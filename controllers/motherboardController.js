const MotherBoard = require('../models/motherboard.model');

const getMotherBoards = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    let query = MotherBoard.find();

    if (req.body.manufacturer) {
      const manufacturerRegex = new RegExp(req.body.manufacturer, 'i'); 
      query = query.where('name', manufacturerRegex); 
    }
    if (req.body.chipset) {
      const chipsetRegex = new RegExp(req.body.chipset, 'i'); 
      query = query.where('name', chipsetRegex); 
    }
    if (req.body.socket) {
      query = query.where('socket', req.body.socket); 
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