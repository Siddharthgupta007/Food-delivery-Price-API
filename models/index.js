// models/index.js

const Sequelize = require('sequelize');
const OrganizationModel = require('./organization');
const ItemModel = require('./item');
const PricingModel = require('./pricing');

const sequelize = new Sequelize("sql","postgres","12345", {
  dialect: 'postgres',
  host: 'localhost',
});

const Organization = OrganizationModel(sequelize, Sequelize);
const Item = ItemModel(sequelize, Sequelize);
const Pricing = PricingModel(sequelize, Sequelize);

module.exports = {
  sequelize,
  Organization,
  Item,
  Pricing,
};
