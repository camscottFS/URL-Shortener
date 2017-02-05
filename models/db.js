const Sequelize = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize('url-shortener', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  port: '3306',
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
});

const url = sequelize.define('url', {
  short_url: {
    type: Sequelize.STRING,
  },
  long_url: {
    type: Sequelize.STRING,
  }
});

url.hasMany(url, {
  foreignKey: 'id',
});

sequelize.sync();

exports.sequelize = sequelize;
exports.url = url;
