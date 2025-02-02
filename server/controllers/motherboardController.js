const MotherBoard = require('../models/motherboard.model');
const { getPartImageByNameFunc } =  require('./partsPriceController');
const mongoose = require('mongoose');

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
    if (req.body.formFactor && Array.isArray(req.body.formFactor)) {
      query = query.where('form_factor').in(req.body.formFactor);
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

    let totalProducts;
    if (Object.keys(req.body).length > 0) {
      totalProducts = await MotherBoard.countDocuments(query);
    } else {
      totalProducts = await MotherBoard.countDocuments();
    }

    const products = await query
      .skip((page - 1) * limit)
      .limit(limit);

    const totalPages = Math.ceil(totalProducts / limit);

    res.json({
      products,
      totalPages,
      currentPage: page,
      totalProducts,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching MotherBoards', error });
  }
}

const getMotherboardById = async (req, res) => {
  const { id } = req.body; 

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Product with this ID is not found' });
    }

    const product = await MotherBoard.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Motherboard not found' });
    } else {
      res.json(product);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Motherboard', error });
  }
}

const updateMotherboardWithImageUrls = async () => {
  try {
    const motherboards = await MotherBoard.find();

    for (const motherboard of motherboards) {
      if (!motherboard.imgUrl) {  // Check if the image URL is not already set
        console.log(motherboard.name);
        const response = await getPartImageByNameFunc({ body: { nameToFind: motherboard.name } });
        console.log(response);
        if (response) {
          motherboard.imgUrl = response;
          console.log('Image URLs added to Motherboard successfully');
        } else {
          motherboard.imgUrl = null;
          console.log('Image URLs null');
        }
        await motherboard.save();
      } else {
        console.log('Image URL already exists for this motherboard');
      }
    }
  } catch (error) {
    console.error('Error updating Motherboard with image URLs:', error);
  }
};


const searchMotherBoards = async (req, res) => {
  const { query } = req.body;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 24;

  if (!query) {
    return res.status(400).json({ message: 'Search query is required' });
  }

  try {
    const searchTerms = query.split(' ').map(term => `(?=.*${term})`).join('');
    const regex = new RegExp(searchTerms, 'i'); 

    const totalProducts = await MotherBoard.countDocuments({ name: { $regex: regex } });

    const totalPages = Math.ceil(totalProducts / limit);

    const motherboards = await MotherBoard.find({ name: { $regex: regex } })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      products: motherboards,
      totalPages,
      currentPage: page,
      totalProducts,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error searching motherboards', error });
  }
};

module.exports = {getMotherBoards, getMotherboardById, updateMotherboardWithImageUrls, searchMotherBoards};