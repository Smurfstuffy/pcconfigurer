const Storage = require('../models/storage.model');

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

    let totalStorages;
    if (Object.keys(req.body).length > 0) {
      totalStorages = await Storage.countDocuments(query);
    } else {
      totalStorages = await Storage.countDocuments();
    }

    const storages = await query
      .skip((page - 1) * limit)
      .limit(limit);

    const totalPages = Math.ceil(totalStorages / limit);

    res.json({
      storages,
      totalPages,
      currentPage: page,
      totalStorages,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Storages', error });
  }
}

module.exports = { getStorages };