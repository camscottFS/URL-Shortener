/*
Cameron Scott
Deployment of Web Applications
March 2017
Assignment 2: Dynamic API
*/

const Sequelize = require('sequelize');
require('dotenv').config();
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_SCHEMA,
  port: process.env.DB_PORT,
  pool: {
    max: 5,
    min: 0,
    idle: 10000,
  },
  logging: false,
});

const url = sequelize.define('url', {
  id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
  },
  url: {
      type: Sequelize.STRING,
  },
  shurl: {
      type: Sequelize.STRING,
  },
  shortUrl: {
      type: Sequelize.STRING,
  },
  key: {
      type: Sequelize.STRING,
  }
});

sequelize.sync();

exports.sequelize = sequelize;
exports.url = url;
