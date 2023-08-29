const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodejs", "dev", "Password@12345", {
  dialect: "mysql",
  host: "127.0.0.1",
});

module.exports = sequelize;
