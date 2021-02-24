const fs = require('fs');
const util = require('util');
const path = require('path');
const { pipeline } = require('stream');
const { writeToFile, ensureFolderExists, dateFormat } = require('./write');
const parseDataUri = require('./parseDataUri');
const pump = util.promisify(pipeline);

async function routes(fastify, options, next) {
  fastify.get('/connected', async (request, reply) => {
    await reply.code(200).send('fastify is running');
    if (fastify.config.KILLONPRINT) process.exit(1);
  });

  fastify.get('/', async (request, reply) => {
    return reply.sendFile('index.html');
  });

  fastify.addContentTypeParser('*', function (request, payload, done) {
    var data = [];
    payload.on('data', (chunk) => {
      data.push(chunk);
    });
    payload.on('end', () => {
      done(null, Buffer.concat(data).toString());
    });
  });

  fastify.post('/print', (req, reply) => {
    // coming back as data uri
    // https://tools.ietf.org/html/rfc2397
    let metadata = parseDataUri(req.body);
    let timestamp = dateFormat(Date.now(), '%H.%M.%S [%m-%d-%Y]', false);
    let containingFolder = path.join('files', timestamp);
    let filename = metadata.filename || 'generated.pdf';
    ensureFolderExists(containingFolder);

    Promise.all([
      writeToFile(
        path.join(containingFolder, 'metadata.txt'),
        metadata.raw,
        'utf8'
      ),
      writeToFile(
        path.join(containingFolder, filename),
        metadata.data,
        metadata.encoding
      ),
    ]).then((r) => {
      console.log(r);
      if (fastify.config.KILLONPRINT) process.exit(1);
    });
    reply.send();
  });
}

module.exports = routes;
