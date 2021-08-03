module.exports = require("knex")({
  client: "pg",
  connection: {
    host: "localhost",
    user: process.env.PS_USER,
    password: process.env.PSQWD,
    database: "knex-test",
  },
});
