const CaseFan = require('../models/casefan.model');
const { getPartImageByNameFunc } =  require('./partsPriceController');

const getCaseFans = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 24;

  try {
    let query = CaseFan.find();

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
    if (req.body.pwm) {
      query = query.where('pwm', req.body.pwm);
    }

    let totalProducts;
    if (Object.keys(req.body).length > 0) {
      totalProducts = await CaseFan.countDocuments(query);
    } else {
      totalProducts= await CaseFan.countDocuments();
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
    res.status(500).json({ message: 'Error fetching CaseFans', error });
  }
}

const updateCaseFanWithImageUrls = async () => {
  try {
    const caseFans = await CaseFan.find();

    for (const caseFan of caseFans) {
      console.log(caseFan.name)
      const response = await getPartImageByNameFunc({ body: { nameToFind: caseFan.name } });
      console.log(response)
      if (response) {
        caseFan.imgUrl = response;
        console.log('Image URLs added to CaseFan successfully');
      } else {
        caseFan.imgUrl = null;
        console.log('Image URLs null');
      }
      await caseFan.save();
    }
    
  } catch (error) {
    console.error('Error updating CaseFan with image URLs:', error);
  }
};

module.exports = { getCaseFans, updateCaseFanWithImageUrls };