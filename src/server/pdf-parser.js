const fs = require('fs');
const util = require('util');
const path = require('path');
const { pipeline } = require('stream');
const { writeToFile, ensureFolderExists, dateFormat } = require('./write');
const parseDataUri = require('./parseDataUri');
const pump = util.promisify(pipeline);

async function routes(fastify, options, next) {
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
    let [rawMetadata, data] = req.body.split(',');
    let uriMetadata = parseDataUri(rawMetadata);
    let today = dateFormat(Date.now(), '%H.%M.%S [%m-%d-%Y]', false);
    let containingFolder = path.join('files', today);
    ensureFolderExists(containingFolder);
    writeToFile(`${containingFolder}/metadata.txt`, rawMetadata, 'utf8');
    writeToFile(`${containingFolder}/resume.pdf`, data, 'base64');
    reply.send();
  });
}

module.exports = routes;
