async function routes(fastify, options, next) {
  fastify.get('/', async (request, reply) => {
    return { message: 'hello world' };
  });
}

module.exports = routes;
