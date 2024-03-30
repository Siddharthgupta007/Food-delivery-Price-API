// models/Item.js

module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    type: DataTypes.STRING,
    description: DataTypes.STRING,
  });
  return Item;
};
