const envSchema = require('env-schema');

const schema = {
  type: 'object',
  required: ['PORT', 'LOG', 'KILLONPRINT'],
  properties: {
    PORT: {
      type: 'string',
      default: 3000,
    },
    LOG: {
      type: 'boolean',
      default: 'false',
    },
    KILLONPRINT: {
      type: 'boolean',
      default: 'true',
    },
  },
};

module.exports = envSchema({
  schema: schema,
  data: process.env, // optional, default: process.env
  dotenv: true, // load .env if it's there, default: false
});
