const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserScore = new mongoose.Schema({
  username: { type: String },
  score: { type: Number },
});

const PcBuild = new mongoose.Schema(
  {
    buildName: { type: String, required: true },
    user: { type: String, required: true },
    cpu: { type: Schema.Types.ObjectId, ref: 'cpus', required: true }, // Change type to ObjectId and specify ref
    cooler: { type: Schema.Types.ObjectId, ref: 'cpucoolers', required: true },
    motherboard: { type: Schema.Types.ObjectId, ref: 'motherboards', required: true },
    gpu: { type: Schema.Types.ObjectId, ref: 'gpus', required: true },
    memory: { type: Schema.Types.ObjectId, ref: 'memories', required: true },
    storage: { type: Schema.Types.ObjectId, ref: 'harddrives', required: true },
    powerSupply: { type: Schema.Types.ObjectId, ref: 'powersuplies', required: true },
    fan: { type: Schema.Types.ObjectId, ref: 'casefans', required: true },
    pcCase: { type: Schema.Types.ObjectId, ref: 'cases', required: true },
    scores: [UserScore],
  },
  { collection: 'pcbuilds' }
);

const pcBuildModel = mongoose.model('PcBuild', PcBuild);

module.exports = pcBuildModel;
