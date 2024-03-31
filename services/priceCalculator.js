// services/priceCalculator.js

const db = require("../models");


 async function calculatePrice(zone, organization_id, total_distance, item_type) {
  if (!zone || !organization_id || !total_distance || !item_type) {
    throw new Error('Invalid input parameters');
  }

  const pricing = await db.Pricing.findOne({
    where: {
      zone,
    },
  });

  if (!pricing) {
    throw new Error('Pricing not found for the given parameters');
  }

//calculation logic
  const basePrice = pricing.fixPrice;
  let perkmprice = pricing.kmPrice;
  if(item_type ==="perishable"){
    perkmprice += 0.5
  }
  const distancePrice = (total_distance - pricing.baseDistanceInKm) * perkmprice;
  const totalPrice = (basePrice) + distancePrice; 
   console.log(totalPrice);
  return totalPrice;  
}

module.exports = calculatePrice;
