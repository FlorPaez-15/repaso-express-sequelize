const { Sequelize } = require("sequelize");

const db = new Sequelize(
  "postgres://postgres@localhost:5432/repaso_sequelize",
  {
    logging: false,
  }
);

module.exports = db;
