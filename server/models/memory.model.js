const mongoose = require('mongoose');

const Memory = new mongoose.Schema(
  {
    name: {type: String, required: true, unique: true},
    price: {type: Number},
    speed: {type: mongoose.Mixed},
    modules: {type: mongoose.Mixed},
    price_per_gb: {type: Number},
    color: {type: String},
    first_word_latency: {type: Number},
    cas_latency: {type: Number},
    imgUrl: {type: String},
  },
  {collection: 'memories'}
)

const memoryModel = mongoose.model('Memory', Memory);

module.exports = memoryModel;