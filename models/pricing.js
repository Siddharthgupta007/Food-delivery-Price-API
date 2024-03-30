
module.exports = (sequelize, DataTypes) => {
  const Pricing = sequelize.define('Pricing', {
    organizationId: DataTypes.INTEGER,
    itemId: DataTypes.INTEGER,
    zone: DataTypes.STRING,
    baseDistanceInKm: DataTypes.FLOAT,
    kmPrice: DataTypes.FLOAT,
    fixPrice: DataTypes.FLOAT,
  });

  Pricing.associate = (models) => {
    Pricing.belongsTo(models.Organization, { foreignKey: 'organizationId' });
    Pricing.belongsTo(models.Item, { foreignKey: 'itemId' });
  };

  return Pricing;
};




// const { DataTypes, Model } = require('sequelize');

// module.exports = (sequelize) => {
//   class Pricing extends Model {}
//   Pricing.init({
//     organizationId: {
//       type: DataTypes.INTEGER,
//       allowNull: false
//     },
//     itemId: {
//       type: DataTypes.INTEGER,
//       allowNull: false
//     },
//     zone: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     baseDistanceInKm: {
//       type: DataTypes.FLOAT,
//       allowNull: false
//     },
//     kmPrice: {
//       type: DataTypes.FLOAT,
//       allowNull: false
//     },
//     fixPrice: {
//       type: DataTypes.FLOAT,
//       allowNull: false
//     }
//   }, {
//     sequelize,
//     modelName: 'Pricing',
//     tableName: 'pricings', // Adjust table name if needed
//   });
//   return Pricing;
// };


// Pricing.init({
//   // Model attributes here
// }, {
//   sequelize, // Pass sequelize instance here
//   modelName: 'Pricing'
// });
