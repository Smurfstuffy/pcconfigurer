const mongoose = require('mongoose');

const MotherBoard = new mongoose.Schema(
  {
    name: {type: String, required: true, unique: true},
    price: {type: Number},
    socket: {type: String},
    form_factor: {type: String},
    max_memory: {type: Number},
    memory_slots: {type: Number},
    color: {type: String},
  },
  {collection: 'motherboards'}
)

const motherBoardModel = mongoose.model('MotherBoard', MotherBoard);

module.exports = motherBoardModel;