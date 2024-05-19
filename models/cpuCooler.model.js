const mongoose = require('mongoose');

const CpuCooler = new mongoose.Schema(
  {
    name: {type: String, required: true, unique: true},
    price: {type: Number},
    rpm: {type: mongoose.Mixed},
    noise_level: {type: mongoose.Mixed},
    color: {type: String},
    size: {type: Number},
    imgUrl: {type: String},
  },
  {collection: 'cpucoolers'}
)

const cpuCoolerModel = mongoose.model('CpuCooler', CpuCooler);

module.exports = cpuCoolerModel;