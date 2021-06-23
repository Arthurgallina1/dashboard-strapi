module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "bookshelf",
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "127.0.0.1"),
        port: env.int("DATABASE_PORT", 'DATABASE_PORT'),
        database: env("DATABASE_NAME", 'DATABASE_NAME'),
        username: env("DATABASE_USERNAME", 'DATABASE_USERNAME'),
        password: env("DATABASE_PASSWORD", "DATABASE_PASSWORD"),
        ssl: env.bool("DATABASE_SSL", false),
      },
      options: {},
    },
  },
});
