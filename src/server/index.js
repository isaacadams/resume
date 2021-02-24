const path = require('path');
const fastify = require('fastify')({
  logger: true,
});

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, '../../dist'),
});
fastify.register(require('./pdf-parser'));

fastify.listen(3000, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`server listening on ${address}`);
});
