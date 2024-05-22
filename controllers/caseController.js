const Case = require('../models/case.model');
const { getPartImageByNameFunc } =  require('./partsPriceController');
const mongoose = require('mongoose');

const getCases = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 24;

  try {
    let query = Case.find();

    if (req.body.manufacturer && Array.isArray(req.body.manufacturer)) {
      const manufacturerRegexes = req.body.manufacturer.map(manufacturer => new RegExp(manufacturer, 'i'));
      query = query.where('name').in(manufacturerRegexes);
    }
    if (req.body.type && Array.isArray(req.body.type)) {
      const typeRegex = req.body.type.map(type => new RegExp(type, 'i'));
      query = query.where('type', typeRegex); 
    }
    if (req.body.formFactor && Array.isArray(req.body.formFactor)) {
      const formFactorRegex = req.body.formFactor.map(formFactor => new RegExp(formFactor, 'i')); 
      query = query.where('type', formFactorRegex); 
    }
    if (req.body.color && Array.isArray(req.body.color)) {
      const colorRegex = req.body.color.map(color => new RegExp(color, 'i')); 
      query = query.where('color', colorRegex); 
    }

    let totalProducts;
    if (Object.keys(req.body).length > 0) {
      totalProducts = await Case.countDocuments(query);
    } else {
      totalProducts = await Case.countDocuments();
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
    res.status(500).json({ message: 'Error fetching Cases', error });
  }
}

const getCaseById = async (req, res) => {
  const { id } = req.body; 

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }

    const product = await Case.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Case  not found' });
    } else {
      res.json(product);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Case', error });
  }
}

const updateCasesWithImageUrls = async () => {
  try {
    const cases = await Case.find();

    for (const pcCase of cases) {
      console.log(pcCase.name)
      const response = await getPartImageByNameFunc({ body: { nameToFind: pcCase.name } });
      console.log(response)
      if (response) {
        pcCase.imgUrl = response;
        console.log('Image URLs added to Case successfully');
      } else {
        pcCase.imgUrl = null;
        console.log('Image URLs null');
      }
      await pcCase.save();
    }
    
  } catch (error) {
    console.error('Error updating Case with image URLs:', error);
  }
};

module.exports = {getCases, getCaseById, updateCasesWithImageUrls};