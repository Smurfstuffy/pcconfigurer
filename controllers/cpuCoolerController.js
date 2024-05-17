const CpuCooler = require('../models/cpuCooler.model');

const getCpuCoolers = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

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

    let totalCpuCoolers;
    if (Object.keys(req.body).length > 0) {
      totalCpuCoolers = await CpuCooler.countDocuments(query);
    } else {
      totalCpuCoolers = await CpuCooler.countDocuments();
    }

    const cpuCoolers = await query
      .skip((page - 1) * limit)
      .limit(limit);

    const totalPages = Math.ceil(totalCpuCoolers / limit);

    res.json({
      cpuCoolers,
      totalPages,
      currentPage: page,
      totalCpuCoolers,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching CpuCoolers', error });
  }
}

module.exports = {getCpuCoolers};