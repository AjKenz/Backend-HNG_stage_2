const Sequelize = require('sequelize');
const { URL } = require('url'); 
const db = {};
require('dotenv').config();

let sequelizeOptions = {
  dialect: 'postgres',
  protocol: 'postgres',
  logging: true,
};

if (process.env.DATABASE_URL) {
  const url = new URL(process.env.DATABASE_URL);

  sequelizeOptions = {
    ...sequelizeOptions,
    dialect: url.protocol.replace(':', ''),
    host: url.hostname,
    port: url.port,
    username: url.username,
    password: url.password,
    database: url.pathname.replace('/', ''),
    ssl: true,
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  };
} else {
  sequelizeOptions = {
    ...sequelizeOptions,
    dialect: process.env.DIALECT,
    host: process.env.HOST,
    port: process.env.PORT || 5432,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
    ssl: false,
    dialectOptions: {
      ssl: {
        require: false,
      },
    },
  };
}

const sequelize = new Sequelize(sequelizeOptions);

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.person = require('./person.model')(sequelize, Sequelize);

module.exports = db;
