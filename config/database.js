module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ep-calm-boat-a5gjmcb2.us-east-2.aws.neon.tech'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'ai-resume-builder'),
      user: env('DATABASE_USERNAME', 'ai-resume-builder_owner'),
      password: env('DATABASE_PASSWORD', '38mDeiZBsYvW'),
      ssl: {
        rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', false),
      },
    },
    debug: false,
    acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 12000),
  },
});