// services/priceCalculator.js

const db = require("../models");

//zone, organizationId, totalDistance, itemType
 async function calculatePrice(zone, organization_id, total_distance, item_type) {
  if (!zone || !organization_id || !total_distance || !item_type) {
    throw new Error('Invalid input parameters');
  }
//console.log('Organization ID:',organization_id);

  const pricing = await db.Pricing.findOne({
    where: {
      zone,
    },
    
    // include: [{
    //   model:db.Item,
    //   where: {
    //     type: item_type,
    //   },
    // }],
  });

  if (!pricing) {
    throw new Error('Pricing not found for the given parameters');
  }
   
  // const basePrice = pricing.fixPrice;
  // const distancePrice = (totalDistance - pricing.baseDistanceInKm) * pricing.kmPrice;
  // const totalPrice = basePrice + distancePrice;

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
