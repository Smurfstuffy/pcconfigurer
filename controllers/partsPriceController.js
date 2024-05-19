const PartsPrice = require('../models/partsprice.model');

const getPartImageByName = async (req, res) => {
  try {
    const nameToFind = req.body.nameToFind;

    if (!nameToFind) {
      return res.status(400).json({ message: 'nameToFind is required' });
    }

    const words = nameToFind.split(' ');

    const regex = new RegExp(words.map(word => `(?=.*${word})`).join(''), 'i');

    const partsPrices = await PartsPrice.find({
      source: 'rozetka',
      'products.title': regex,
    });

    const filteredProducts = partsPrices.flatMap(partsPrice =>
      partsPrice.products.filter(product => regex.test(product.title))
    );

    const jpgProduct = filteredProducts.find(product => /\.jpg$/.test(product.imgUrl));

    if (!jpgProduct) {
      return res.status(404).json({ message: 'No product found with .jpg image' });
    }

    res.json(jpgProduct);
  } catch (error) {
     res.status(500).json({ message: 'Error getting parts prices by name', error });
  }
};

const getPartImageByNameFunc = async (req) => {
  try {
    const nameToFind = req.body.nameToFind;

    if (!nameToFind) {
      return undefined;
    }

    const words = nameToFind.split(' ');

    const regex = new RegExp(words.map(word => `(?=.*${word})`).join(''), 'i');

    const partsPrices = await PartsPrice.find({
      source: 'rozetka',
      'products.title': regex,
    });

    const filteredProducts = partsPrices.flatMap(partsPrice =>
      partsPrice.products.filter(product => regex.test(product.title))
    );

    const jpgProduct = filteredProducts.find(product => /\.jpg$/.test(product.imgUrl));

    if (!jpgProduct) {
      return undefined;
    }

    return jpgProduct.imgUrl;
  } catch (error) {
     return undefined;
  }
};

module.exports = { getPartImageByName, getPartImageByNameFunc };