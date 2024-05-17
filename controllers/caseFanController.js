const CaseFan = require('../models/casefan.model');

const getCaseFans = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    let query = CaseFan.find();

    if (req.body.manufacturer) {
      const manufacturerRegex = new RegExp(req.body.manufacturer, 'i');
      query = query.where('name', manufacturerRegex);
    }
    if (req.body.color) {
      const colorRegex = new RegExp(req.body.color, 'i');
      query = query.where('color', colorRegex);
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

    let totalCaseFans;
    if (Object.keys(req.body).length > 0) {
      totalCaseFans = await CaseFan.countDocuments(query);
    } else {
      totalCaseFans = await CaseFan.countDocuments();
    }

    const caseFans = await query
      .skip((page - 1) * limit)
      .limit(limit);

    const totalPages = Math.ceil(totalCaseFans / limit);

    res.json({
      caseFans,
      totalPages,
      currentPage: page,
      totalCaseFans,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching CaseFans', error });
  }
}

module.exports = { getCaseFans };