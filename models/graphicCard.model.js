const mongoose = require('mongoose');

const GraphicCard = new mongoose.Schema(
  {
    name: {type: String, required: true, unique: true},
    price: {type: Number},
    chipset: {type: String},
    memory: {type: Number},
    core_clock: {type: Number},
    boost_clock: {type: Number},
    color: {type: String},
    length: {type: Number},
    imgUrl: {type: String},
  },
  {collection: 'gpus'}
)

const graphicCardModel = mongoose.model('GraphicCard', GraphicCard);

module.exports = graphicCardModel;