async function routes(fastify, options, next) {
  fastify.get('/', async (request, reply) => {
    return { hello: 'world jingles' };
  });
}

module.exports = routes;
