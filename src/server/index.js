const path = require('path');
const fastify = require('fastify')({
  logger: true,
});

const config = require('./env-config');
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
