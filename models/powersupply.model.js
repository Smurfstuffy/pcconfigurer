const mongoose = require('mongoose');

const PowerSupply = new mongoose.Schema(
  {
    name: {type: String, required: true, unique: true},
    price: {type: Number},
    type: {type: String},
    efficiency: {type: String},
    wattage: {type: Number},
    modular: {type: mongoose.Mixed},
    color: {type: String},
  },
  {collection: 'powersuplies'}
)

const powerSupplyModel = mongoose.model('PowerSupply', PowerSupply);

module.exports = powerSupplyModel;