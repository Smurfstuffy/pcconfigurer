const mongoose = require('mongoose');

const Case = new mongoose.Schema(
  {
    name: {type: String, required: true, unique: true},
    price: {type: Number},
    type: {type: String},
    color: {type: String},
    psu: {type: Number},
    side_panel: {type: String},
    external_volume: {type: Number},
    internal_35_bays: {type: Number},
    imgUrl: {type: String},
  },
  {collection: 'cases'}
)

const caseModel = mongoose.model('Case', Case);

module.exports = caseModel;