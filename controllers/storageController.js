const Storage = require('../models/storage.model');
const { getPartImageByNameFunc } =  require('./partsPriceController');

const getStorages = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 24;

  try {
    let query = Storage.find();

    if (req.body.manufacturer && Array.isArray(req.body.manufacturer)) {
      const manufacturerRegexes = req.body.manufacturer.map(manufacturer => new RegExp(manufacturer, 'i'));
      query = query.where('name').in(manufacturerRegexes);
    }
    if (req.body.minCapacity) {
      query = query.where('capacity').gte(parseInt(req.body.minCapacity));
    }
    if (req.body.maxCapacity) {
      query = query.where('capacity').lte(parseInt(req.body.maxCapacity));
    }
    if (req.body.type && Array.isArray(req.body.type)) {
      query = query.where('type').in(req.body.type);
    }
    if (req.body.formFactor && Array.isArray(req.body.formFactor)) {
      query = query.where('form_factor').in(req.body.formFactor);
    }
    if (req.body.interface && Array.isArray(req.body.interface)) {
      query = query.where('interface').in(req.body.interface);
    }

    let totalProducts;
    if (Object.keys(req.body).length > 0) {
      totalProducts = await Storage.countDocuments(query);
    } else {
      totalProducts = await Storage.countDocuments();
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
    res.status(500).json({ message: 'Error fetching Storages', error });
  }
}

const updateStoragesWithImageUrls = async () => {
  try {
    const storages = await Storage.find();

    for (const storage of storages) {
      console.log(storage.name)
      const response = await getPartImageByNameFunc({ body: { nameToFind: storage.name } });
      console.log(response)
      if (response) {
        storage.imgUrl = response;
        console.log('Image URLs added to Storage successfully');
      } else {
        storage.imgUrl = null;
        console.log('Image URLs null');
      }
      await storage.save();
    }
    
  } catch (error) {
    console.error('Error updating Storages with image URLs:', error);
  }
};

module.exports = { getStorages, updateStoragesWithImageUrls };