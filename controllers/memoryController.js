const Memory = require('../models/memory.model');
const { getPartImageByNameFunc } =  require('./partsPriceController');
const mongoose = require('mongoose');

const getMemories = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 24;

  try {
    let query = Memory.find();

    if (req.body.manufacturer && Array.isArray(req.body.manufacturer)) {
      const manufacturerRegexes = req.body.manufacturer.map(manufacturer => new RegExp(manufacturer, 'i'));
      query = query.where('name').in(manufacturerRegexes);
    }
    if (req.body.casLatency && Array.isArray(req.body.casLatency)) {
      query = query.where('cas_latency').in(req.body.casLatency);
    }
    if (req.body.speed && Array.isArray(req.body.speed)) {
      query = query.where('speed.1').in(req.body.speed);
    }
    if (req.body.sticks && Array.isArray(req.body.sticks)) {
      query = query.where('modules.0').in(req.body.sticks);
    }
    if (req.body.capacity && Array.isArray(req.body.capacity)) {
      query = query.where('modules.1').in(req.body.capacity);
    }

    let totalProducts;
    if (Object.keys(req.body).length > 0) {
      totalProducts = await Memory.countDocuments(query);
    } else {
      totalProducts = await Memory.countDocuments();
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
    res.status(500).json({ message: 'Error fetching Memory', error });
  }
}

const getMemoryById = async (req, res) => {
  const { id } = req.body; 

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Product with this ID is not found' });
    }

    const product = await Memory.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Memory not found' });
    } else {
      res.json(product);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Memory', error });
  }
}

const updateMemoryWithImageUrls = async () => {
  try {
    const memories = await Memory.find();

    for (const memory of memories) {
      console.log(memory.name)
      const response = await getPartImageByNameFunc({ body: { nameToFind: memory.name } });
      console.log(response)
      if (response) {
        memory.imgUrl = response;
        console.log('Image URLs added to Memory successfully');
      } else {
        memory.imgUrl = null;
        console.log('Image URLs null');
      }
      await memory.save();
    }
    
  } catch (error) {
    console.error('Error updating Memory with image URLs:', error);
  }
};

const searchMemories = async (req, res) => {
  const { query } = req.body;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 24;

  if (!query) {
    return res.status(400).json({ message: 'Search query is required' });
  }

  try {
    const searchTerms = query.split(' ').map(term => `(?=.*${term})`).join('');
    const regex = new RegExp(searchTerms, 'i'); 

    const totalProducts = await Memory.countDocuments({ name: { $regex: regex } });

    const totalPages = Math.ceil(totalProducts / limit);

    const memories = await Memory.find({ name: { $regex: regex } })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      products: memories,
      totalPages,
      currentPage: page,
      totalProducts,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error searching memories', error });
  }
};

module.exports = { getMemories, getMemoryById, updateMemoryWithImageUrls, searchMemories };