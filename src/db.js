const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
    "telegram_opinion_polls",
    "postgres",
    "root",
    {
        host: "localhost",
        port: "5432",
        dialect: "postgres"
    }
);