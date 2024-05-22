const Processor = require('../models/processor.model');
const { getPartImageByNameFunc } =  require('./partsPriceController');
const mongoose = require('mongoose');

const getProcessors = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 24;

  try {
    let query = Processor.find();

    if (req.body.manufacturer && Array.isArray(req.body.manufacturer)) {
      const manufacturerRegexes = req.body.manufacturer.map(manufacturer => new RegExp(manufacturer, 'i'));
      query = query.where('name').in(manufacturerRegexes);
    }
    if (req.body.minCoreCount) {
      query = query.where('core_count').gte(parseInt(req.body.minCoreCount));
    }
    if (req.body.maxCoreCount) {
      query = query.where('core_count').lte(parseInt(req.body.maxCoreCount));
    }
    if (req.body.minCoreClock) {
      query = query.where('core_clock').gte(parseFloat(req.body.minCoreClock));
    }
    if (req.body.maxCoreClock) {
      query = query.where('core_clock').lte(parseFloat(req.body.maxCoreClock));
    }
    if (req.body.minTdp) {
      query = query.where('tdp').gte(parseInt(req.body.minTdp));
    }
    if (req.body.maxTdp) {
      query = query.where('tdp').lte(parseInt(req.body.maxTdp));
    }
    if (req.body.smt) {
      query = query.where('smt', req.body.smt);
    }

    let totalProducts;
    if (Object.keys(req.body).length > 0) {
      totalProducts = await Processor.countDocuments(query);
    } else {
      totalProducts = await Processor.countDocuments();
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
    res.status(500).json({ message: 'Error fetching Processors', error });
  }
}

const getProcessorById = async (req, res) => {
  const { id } = req.body; 

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }

    const product = await Processor.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Processor not found' });
    } else {
      res.json(product);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Processor', error });
  }
}

const updateCPUsWithImageUrls = async () => {
  try {
    const processors = await Processor.find();

    for (const cpu of processors) {
      console.log(cpu.name)
      const response = await getPartImageByNameFunc({ body: { nameToFind: cpu.name } });
      console.log(response)
      if (response) {
        cpu.imgUrl = response;
        console.log('Image URLs added to CPUs successfully');
      } else {
        cpu.imgUrl = null;
        console.log('Image URLs null');
      }
      await cpu.save();
    }   
  } catch (error) {
    console.error('Error updating CPUs with image URLs:', error);
  }
};

module.exports = { getProcessors, getProcessorById, updateCPUsWithImageUrls };