const mongoose = require('mongoose');

const Storage = new mongoose.Schema(
  {
    name: {type: String, required: true, unique: true},
    price: {type: Number},
    capacity: {type: Number},
    price_per_gb: {type: Number},
    type: {type: mongoose.Mixed},
    cache: {type: Number},
    form_factor: {type: mongoose.Mixed},
    interface: {type: String},
  },
  {collection: 'harddrives'}
)

const storageModel = mongoose.model('Storage', Storage);

module.exports = storageModel;