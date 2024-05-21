const pcBuildModel = require('../models/pcbuild.model');

async function createPCBuild(req, res) {
  const { user, buildName, cpu, cooler, motherboard, gpu, memory, storage, powerSupply, fan, pcCase } = req.body;

  try {
    const newPCBuild = new pcBuildModel({
      buildName,
      user,
      cpu,
      cooler,
      motherboard,
      gpu,
      memory,
      storage,
      powerSupply,
      fan,
      pcCase,
      scores: [], 
    });

    await newPCBuild.save();

    res.status(201).json(newPCBuild);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createPCBuild,
};
