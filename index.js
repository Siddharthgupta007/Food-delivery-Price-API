
const { sequelize } = require('./models');
const express = require("express");
const bodyParser = require("body-parser");
const calculatePrice = require('./services/priceCalculator')
const { Organization, Item, Pricing } = require('./models');
const { swaggerUi, swaggerSpec } = require('./swagger');

const app = express()
const PORT = 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(bodyParser.json());

/**
 * @swagger
 * /calculatePrice:
 *   post:
 *     summary: Calculate the total price for food delivery
 *     description: Calculate the total price for food delivery based on various factors such as zone, organization ID, total distance, and item type.
 *     parameters:
 *       - in: body
 *         name: CalculatePriceRequest
 *         description: Request body for calculating the total price
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             zone:
 *               type: string
 *               description: The zone for food delivery (central/North/South/West/East)
 *               default: Central
 *             organization_id:
 *               type: string
 *               description: The ID of the organization(01,02,03)
 *               default: 005
 *             total_distance:
 *               type: number
 *               description: The total distance for food delivery(10,20,30)
 *               default: 10
 *             item_type:
 *               type: string
 *               description: The type of food item (e.g., perishable, non-perishable)
 *               default: perishable
 *     responses:
 *       200:
 *         description: Success 
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 total_price:
 *                   type: string
 *                   description: The total price for food delivery in cents
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   description: Error message
 */
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
    console.log(`server is running at ${PORT}`)
});


// Sync Sequelize Models with Database
sequelize.sync()
  .then(() => {
    console.log('Database synchronized');
  })
  .catch((error) => {
    
    console.error('Error syncing database:', error);
  });




  

