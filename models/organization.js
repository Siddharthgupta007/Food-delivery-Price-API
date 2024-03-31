
// models/Organization.js

module.exports = (sequelize, DataTypes) => {
  const Organization = sequelize.define('Organization', {
    name: DataTypes.STRING,
    if: DataTypes.STRING,
  });
  return Organization;
};
