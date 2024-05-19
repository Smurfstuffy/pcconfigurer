const mongoose = require('mongoose');

const CaseFan = new mongoose.Schema(
  {
    name: {type: String, required: true, unique: true},
    price: {type: Number},
    size: {type: Number},
    color: {type: String},
    rpm: {type: mongoose.Mixed},
    airflow: {type: mongoose.Mixed},
    noise_level: {type: mongoose.Mixed},
    pwm: {type: Boolean},
    imgUrl: {type: String},
  },
  {collection: 'casefans'}
)

const caseFanModel = mongoose.model('CaseFan', CaseFan);

module.exports = caseFanModel;