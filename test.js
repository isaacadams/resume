//https://node-tap.org/docs/getting-started/
const tap = require('tap');
const buildFastify = require('./src/server/app');

tap.test('GET `/` route', { autoend: false }, async (t) => {
  const fastify = buildFastify();

  fastify.inject(
    {
      method: 'GET',
      url: '/',
    },
    (err, response) => {
      t.error(err);
      t.strictEqual(response.statusCode, 200);
      t.strictEqual(
        response.headers['content-type'],
        'text/html; charset=UTF-8'
      );
      //t.deepEqual(response.json(), { hello: 'world' });
      t.end();
    }
  );
});
