const CpuCooler = require('../models/cpuCooler.model');
const { getPartImageByNameFunc } =  require('./partsPriceController');
const mongoose = require('mongoose');

const getCpuCoolers = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 24;

  try {
    let query = CpuCooler.find();

    if (req.body.manufacturer && Array.isArray(req.body.manufacturer)) {
      const manufacturerRegexes = req.body.manufacturer.map(manufacturer => new RegExp(manufacturer, 'i'));
      query = query.where('name').in(manufacturerRegexes);
    }
    if (req.body.minSize) {
      query = query.where('size').gte(parseInt(req.body.minSize));
    }
    if (req.body.maxSize) {
      query = query.where('size').lte(parseInt(req.body.maxSize));
    }

    let totalProducts;
    if (Object.keys(req.body).length > 0) {
      totalProducts = await CpuCooler.countDocuments(query);
    } else {
      totalProducts = await CpuCooler.countDocuments();
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
    res.status(500).json({ message: 'Error fetching CpuCoolers', error });
  }
}

const getCpuCoolerById = async (req, res) => {
  const { id } = req.body; 

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Product with this ID is not found' });
    }

    const product = await CpuCooler.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'CPU Cooler not found' });
    } else {
      res.json(product);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching CPU Cooler', error });
  }
}

const updateCpuCoolerWithImageUrls = async () => {
  try {
    const coolers = await CpuCooler.find();

    for (const cooler of coolers) {
      console.log(cooler.name)
      const response = await getPartImageByNameFunc({ body: { nameToFind: cooler.name } });
      console.log(response)
      if (response) {
        cooler.imgUrl = response;
        console.log('Image URLs added to CpuCooler successfully');
      } else {
        cooler.imgUrl = null;
        console.log('Image URLs null');
      }
      await cooler.save();
    }
    
  } catch (error) {
    console.error('Error updating CpuCooler with image URLs:', error);
  }
};

module.exports = {getCpuCoolers, getCpuCoolerById, updateCpuCoolerWithImageUrls};