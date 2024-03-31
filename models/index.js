// models/index.js
const Sequelize = require('sequelize');
const OrganizationModel = require('./organization');
const ItemModel = require('./item');
const PricingModel = require('./pricing');

const sequelize = new Sequelize("sql_x38x","sql_x38x_user","mJZ1xJ2WEmeOyDfyEKXyAadwaezU9jaF", {
  dialect: 'postgres',
  host: "dpg-co4jhsi1hbls73btts70-a.oregon-postgres.render.com",
  port:'5432',
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true, // This will require SSL/TLS
      rejectUnauthorized: false // Disable SSL certificate verification (useful for self-signed certificates)
    }
  }
});

// Test the connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
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
