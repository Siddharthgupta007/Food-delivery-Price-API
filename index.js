
const { sequelize } = require('./models');
const express = require("express");
const bodyParser = require("body-parser");
const calculatePrice = require('./services/priceCalculator')
const { Organization, Item, Pricing } = require('./models');

const app = express()
const PORT = 8000

app.use(bodyParser.json());



app.post('/calculatePrice', async (req, res) => {
    try {
      const { zone, organization_id, total_distance, item_type } = req.body;
      const totalPrice = await calculatePrice(zone, organization_id, total_distance, item_type);
      res.json({ total_price: `${totalPrice*100} cents`});
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
app.listen(PORT, ()=> 
{
    console.log(`server is running at ${PORT} `)
});


// Sync Sequelize Models with Database
sequelize.sync()
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((error) => {
    console.error('Error syncing database:', error);
  });

  

//   Organization.create({ name: 'Organization Name' })
//   .then((organization) => {
//     console.log('Organization created:', organization.toJSON());
//   })
//   .catch((error) => {
//     console.error('Error creating organization:', error);
//   });

// Create a single item
// Item.create({ type: 'perishable', description: 'Perishable Item' })
//   .then((item) => {
//     console.log('Item created:', item.toJSON());
//   })
//   .catch((error) => {
//     console.error('Error creating item:', error);
//   });

// Create a single pricing
// Pricing.create({ organizationId: 2, itemId: 2, zone: 'North', baseDistanceInKm: 4, kmPrice: 2, fixPrice: 15 })
//   .then((pricing) => {
//     console.log('Pricing created:', pricing.toJSON());
//   })
//   .catch((error) => {
//     console.error('Error creating pricing:', error);
//   });


//   Pricing.create({ organizationId: 3, itemId: 3, zone: 'South', baseDistanceInKm: 6, kmPrice: 2.5, fixPrice: 20 })
//   .then((pricing) => {
//     console.log('Pricing created:', pricing.toJSON());
//   })
//   .catch((error) => {
//     console.error('Error creating pricing:', error);
//   });


//   Pricing.create({ organizationId: 4, itemId: 4, zone: 'East', baseDistanceInKm: 7, kmPrice: 3, fixPrice: 25 })
//   .then((pricing) => {
//     console.log('Pricing created:', pricing.toJSON());
//   })
//   .catch((error) => {
//     console.error('Error creating pricing:', error);
//   });

//   Pricing.create({ organizationId: 5, itemId: 5, zone: 'West', baseDistanceInKm: 8, kmPrice: 3.5, fixPrice: 30 })
//   .then((pricing) => {
//     console.log('Pricing created:', pricing.toJSON());
//   })
//   .catch((error) => {
//     console.error('Error creating pricing:', error);
//   });