const Case = require('../models/case.model');

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