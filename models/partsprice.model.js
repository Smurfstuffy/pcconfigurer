const mongoose = require('mongoose');

const Product = new mongoose.Schema(
  {
    title: {type: String, required: true},
    price: {type: String},
    imgUrl: {type: String},
    productUrl: {type: String},
  }
)

const PartsPrice = new mongoose.Schema(
  {
    source: {type: String, required: true},
    products: [Product],
  },
  {collection: 'partsprices'}
)

const partsPriceModel = mongoose.model('PartsPrice', PartsPrice);

module.exports = partsPriceModel;