const mongoose = require('mongoose');

const Processor = new mongoose.Schema(
  {
    name: {type: String, required: true, unique: true},
    price: {type: Number},
    core_count: {type: Number},
    core_clock: {type: Number},
    boost_clock: {type: Number},
    tdp: {type: Number},
    graphics: {type: String},
    smt: {type: Boolean},
    imgUrl: {type: String},
  },
  {collection: 'cpus'}
)

const processorModel = mongoose.model('Processor', Processor);

module.exports = processorModel;