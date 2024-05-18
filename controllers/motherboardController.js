const MotherBoard = require('../models/motherboard.model');

const getMotherBoards = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 24;

  try {
    let query = MotherBoard.find();

    if (req.body.manufacturer && Array.isArray(req.body.manufacturer)) {
      const manufacturerRegexes = req.body.manufacturer.map(manufacturer => new RegExp(manufacturer, 'i'));
      query = query.where('name').in(manufacturerRegexes);
    }
    if (req.body.chipset && Array.isArray(req.body.chipset)) {
      const chipsetRegexes = req.body.chipset.map(chipset => new RegExp(chipset , 'i'));
      query = query.where('name').in(chipsetRegexes);
    }
    if (req.body.socket && Array.isArray(req.body.socket)) {
      query = query.where('socket').in(req.body.socket);
    }
    if (req.body.minMemory) {
      query = query.where('max_memory').gte(parseInt(req.body.minMemory)); 
    }
    if (req.body.maxMemory) {
      query = query.where('max_memory').lte(parseInt(req.body.maxMemory)); 
    }
    if (req.body.minMemorySlots) {
      query = query.where('memory_slots').gte(parseInt(req.body.minMemorySlots)); 
    }
    if (req.body.maxMemorySlots) {
      query = query.where('memory_slots').lte(parseInt(req.body.maxMemorySlots)); 
    }

    let totalMotherBoards;
    if (Object.keys(req.body).length > 0) {
      totalMotherBoards = await MotherBoard.countDocuments(query);
    } else {
      totalMotherBoards = await MotherBoard.countDocuments();
    }

    const motherBoards = await query
      .skip((page - 1) * limit)
      .limit(limit);

    const totalPages = Math.ceil(totalMotherBoards / limit);

    res.json({
      motherBoards,
      totalPages,
      currentPage: page,
      totalMotherBoards,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching MotherBoards', error });
  }
}

module.exports = {getMotherBoards};