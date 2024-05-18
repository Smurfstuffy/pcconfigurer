const PowerSupply = require('../models/powersupply.model');

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

    let totalPowerSupplies;
    if (Object.keys(req.body).length > 0) {
      totalPowerSupplies = await PowerSupply.countDocuments(query);
    } else {
      totalPowerSupplies = await PowerSupply.countDocuments();
    }

    const powerSupplies = await query
      .skip((page - 1) * limit)
      .limit(limit);

    const totalPages = Math.ceil(totalPowerSupplies / limit);

    res.json({
      powerSupplies,
      totalPages,
      currentPage: page,
      totalPowerSupplies,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching PowerSupplies', error });
  }
}

module.exports = { getPowerSupplies };