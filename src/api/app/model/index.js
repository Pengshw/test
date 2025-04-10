'use strict';
const fs  = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const constant = require('../constant/constant');
const conf = require('nconf');
const basename = path.basename(module.filename);
const db = {};

const sequelize = new Sequelize(
  conf.get(constant.CONFIG.DB.DATABASE),
  conf.get(constant.CONFIG.DB.USERNAME),
  conf.get(constant.CONFIG.DB.PASSWORD),
  conf.get(constant.CONFIG.DB.OPTIONS)
);

fs
  .readdirSync(__dirname)
  .filter(file =>
    (file.indexOf('.', 0) !== 0) &&
    (file !== basename) &&
    (file.endsWith('.js')))
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;