const Case = require('../models/case.model');

const getCases = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    let query = Case.find();

    if (req.body.manufacturer) {
      const manufacturerRegex = new RegExp(req.body.manufacturer, 'i'); 
      query = query.where('name', manufacturerRegex); 
    }
    if (req.body.type) {
      const typeRegex = new RegExp(req.body.type, 'i'); 
      query = query.where('type', typeRegex); 
    }
    if (req.body.formFactor) {
      const formFactorRegex = new RegExp(req.body.formFactor, 'i'); 
      query = query.where('type', formFactorRegex); 
    }
    if (req.body.color) {
      const colorRegex = new RegExp(req.body.color, 'i'); 
      query = query.where('color', colorRegex); 
    }

    let totalCases;
    if (Object.keys(req.body).length > 0) {
      totalCases = await Case.countDocuments(query);
    } else {
      totalCases = await Case.countDocuments();
    }

    const cases = await query
      .skip((page - 1) * limit)
      .limit(limit);

    const totalPages = Math.ceil(totalCases / limit);

    res.json({
      cases,
      totalPages,
      currentPage: page,
      totalCases,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Cases', error });
  }
}

module.exports = {getCases};