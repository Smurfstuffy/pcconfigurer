const GraphicalCard = require('../models/graphicCard.model');
const { getPartImageByNameFunc } =  require('./partsPriceController');
const mongoose = require('mongoose');

const getGraphicalCards = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 24;

  try {
    let query = GraphicalCard.find();

    if (req.body.manufacturer && Array.isArray(req.body.manufacturer)) {
      const manufacturerRegexes = req.body.manufacturer.map(manufacturer => new RegExp(manufacturer, 'i'));
      query = query.where('name').in(manufacturerRegexes);
    }
    if (req.body.chipset && Array.isArray(req.body.chipset)) {
      query = query.where('chipset').in(req.body.chipset);
    }
    if (req.body.minMemory) {
      query = query.where('memory').gte(parseInt(req.body.minMemory)); 
    }
    if (req.body.maxMemory) {
      query = query.where('memory').lte(parseInt(req.body.maxMemory)); 
    }
    if (req.body.minCoreClock) {
      query = query.where('core_clock').gte(parseFloat(req.body.minCoreClock)); 
    }
    if (req.body.maxCoreClock) {
      query = query.where('core_clock').lte(parseFloat(req.body.maxCoreClock)); 
    }
    if (req.body.minLength) {
      query = query.where('length').gte(parseInt(req.body.minLength));
    }
    if (req.body.maxLength) {
      query = query.where('length').lte(parseInt(req.body.maxLength));
    }

    let totalProducts;
    if (Object.keys(req.body).length > 0) {
      totalProducts = await GraphicalCard.countDocuments(query);
    } else {
      totalProducts = await GraphicalCard.countDocuments();
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
    res.status(500).json({ message: 'Error fetching GraphicalCards', error });
  }
}

const getGraphicalCardById = async (req, res) => {
  const { id } = req.body; 

  try {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid ID format' });
    }

    const product = await GraphicalCard.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'GraphicalCard not found' });
    } else {
      res.json(product);
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching GraphicalCard', error });
  }
}

const updateGpuWithImageUrls = async () => {
  try {
    const graphicalCards = await GraphicalCard.find();

    for (const graphicalCard of graphicalCards) {
      if (!graphicalCard.name.includes(graphicalCard.chipset)) {
        const firstSpaceIndex = graphicalCard.name.indexOf(' ');
        if (firstSpaceIndex !== -1) {
          graphicalCard.name = graphicalCard.name.slice(0, firstSpaceIndex + 1) + graphicalCard.chipset + ' ' + graphicalCard.name.slice(firstSpaceIndex + 1);
        } else {
          graphicalCard.name = graphicalCard.chipset + ' ' + graphicalCard.name;
        }
      }
      console.log(graphicalCard.name)
      const response = await getPartImageByNameFunc({ body: { nameToFind: graphicalCard.name } });
      console.log(response)
      if (response) {
        graphicalCard.imgUrl = response;
        console.log('Image URLs added to GraphicalCard successfully');
      } else {
        graphicalCard.imgUrl = null;
        console.log('Image URLs null');
      }
      await graphicalCard.save();
    }
    
  } catch (error) {
    console.error('Error updating GraphicalCard with image URLs:', error);
  }
};

module.exports = {getGraphicalCards, getGraphicalCardById, updateGpuWithImageUrls};