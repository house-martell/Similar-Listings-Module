// const mysql = require('mysql');
const Sequelize = require('sequelize');
require('dotenv').config();

const connection = new Sequelize(
  'mockluludata',
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  // eslint-disable-next-line comma-dangle
  }
);

connection
  .authenticate()
  .then(() => { console.log('connected to mysql'); })
  .catch(err => console.error(err));

module.exports = connection;
