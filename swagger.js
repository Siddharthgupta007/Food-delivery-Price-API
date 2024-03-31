const swaggerJsdoc = require('swagger-jsdoc')
const swaggerUi = require('swagger-ui-express');

// Swagger definition
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'Food Delivery Charges API',
      description: 'This api is designed for calculating the food delivery price dynamically for multiple zones and item type',
      version: '1.0.0',
    },
  },
  // API routes
  apis: ['./index.js'], 
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(swaggerOptions);

module.exports = {
  swaggerUi,
  swaggerSpec,
};
