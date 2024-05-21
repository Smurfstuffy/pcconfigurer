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

async function getAllPCBuilds(req, res) {
  try {
    let query = pcBuildModel.find();

    if (req.query.limit) {
      const limit = parseInt(req.query.limit);
      query = query.limit(limit);
    }

    const pcBuilds = await query;
    res.status(200).json(pcBuilds);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getPCBuildById(req, res) {
  const { id } = req.body;

  if (!id) {
    return res.status(400).json({ error: 'ID is required' });
  }

  try {
    const pcBuild = await pcBuildModel.findById(id);
    if (!pcBuild) {
      return res.status(404).json({ error: 'PC Build not found' });
    }
    res.status(200).json(pcBuild);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createPCBuild,
  getAllPCBuilds,
  getPCBuildById
};
