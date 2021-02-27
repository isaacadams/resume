const path = require('path');
const fastifyConstructor = require('fastify');
const config = require('./env-config');

function buildFastifyServer() {
  const fastify = fastifyConstructor({
    logger: true,
  });

  if (config.LOG) fastify.log.info(config);
  fastify.decorate('config', config);

  fastify.register(require('fastify-static'), {
    root: path.join(__dirname, '../../dist'),
  });
  fastify.register(require('./pdf-parser'));

  fastify.listen(config.PORT, function (err, address) {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
    fastify.log.info(`server listening on ${address}`);
  });

  return fastify;
}

module.exports = buildFastifyServer;
