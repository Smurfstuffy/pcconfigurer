const PowerSupply = require('../models/powersupply.model');
const { getPartImageByNameFunc } =  require('./partsPriceController');
const mongoose = require('mongoose');

const getPowerSupplies = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 24;

  try {
    let query = PowerSupply.find();

    if (req.body.manufacturer && Array.isArray(req.body.manufacturer)) {
      const manufacturerRegexes = req.body.manufacturer.map(manufacturer => new RegExp(manufacturer, 'i'));
      query = query.where('name').in(manufacturerRegexes);
    }
    if (req.body.type && Array.isArray(req.body.type)) {
      query = query.where('type').in(req.body.type);
    }
    if (req.body.efficiency && Array.isArray(req.body.efficiency)) {
      query = query.where('efficiency').in(req.body.efficiency);
    }
    if (req.body.minWattage) {
      query = query.where('wattage').gte(parseInt(req.body.minWattage)); 
    }
    if (req.body.maxWattage) {
      query = query.where('wattage').lte(parseInt(req.body.maxWattage)); 
    }

    let totalProducts;
    if (Object.keys(req.body).length > 0) {
      totalProducts = await PowerSupply.countDocuments(query);
    } else {
      totalProducts = await PowerSupply.countDocuments();
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
    res.status(500).json({ message: 'Error fetching PowerSupplies', error });
  }
}

const getPowerSupplyById = async (req, res) => {
  const { id } = req.body; 

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Product with this ID is not found' });
    }

    const product = await PowerSupply.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Power Supply not found' });
    } else {
      res.json(product);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Power Supply', error });
  }
}

const updatePowerSupplyWithImageUrls = async () => {
  try {
    const powerSupplies = await PowerSupply.find();

    for (const powerSupply of powerSupplies) {
      if (!powerSupply.imgUrl) {  
        const nameToFind = powerSupply.name.replace(/\s*\(.*?\)\s*/g, '').trim();
        console.log(nameToFind);
        const response = await getPartImageByNameFunc({ body: { nameToFind: nameToFind } });
        console.log(response);
        if (response) {
          powerSupply.imgUrl = response;
          console.log('Image URLs added to PowerSupply successfully');
        } else {
          powerSupply.imgUrl = null;
          console.log('Image URLs null');
        }
        await powerSupply.save();
      } else {
        console.log('Image URL already exists for this power supply');
      }
    }
  } catch (error) {
    console.error('Error updating PowerSupplies with image URLs:', error);
  }
};

const searchPowerSupplies = async (req, res) => {
  const { query } = req.body;
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 24;

  if (!query) {
    return res.status(400).json({ message: 'Search query is required' });
  }

  try {
    const searchTerms = query.split(' ').map(term => `(?=.*${term})`).join('');
    const regex = new RegExp(searchTerms, 'i'); 

    const totalProducts = await PowerSupply.countDocuments({ name: { $regex: regex } });

    const totalPages = Math.ceil(totalProducts / limit);

    const powerSupplies = await PowerSupply.find({ name: { $regex: regex } })
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      products: powerSupplies,
      totalPages,
      currentPage: page,
      totalProducts,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error searching power supplies', error });
  }
};

module.exports = { getPowerSupplies, getPowerSupplyById, updatePowerSupplyWithImageUrls, searchPowerSupplies };