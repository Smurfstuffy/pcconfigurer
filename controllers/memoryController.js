const Memory = require('../models/memory.model');

const getMemories = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 24;

  try {
    let query = Memory.find();

    if (req.body.manufacturer && Array.isArray(req.body.manufacturer)) {
      const manufacturerRegexes = req.body.manufacturer.map(manufacturer => new RegExp(manufacturer, 'i'));
      query = query.where('name').in(manufacturerRegexes);
    }
    if (req.body.casLatency && Array.isArray(req.body.casLatency)) {
      query = query.where('cas_latency').in(req.body.casLatency);
    }
    if (req.body.speed && Array.isArray(req.body.speed)) {
      query = query.where('speed.1').in(req.body.speed);
    }
    if (req.body.sticks && Array.isArray(req.body.sticks)) {
      query = query.where('modules.0').in(req.body.sticks);
    }
    if (req.body.capacity && Array.isArray(req.body.capacity)) {
      query = query.where('modules.1').in(req.body.capacity);
    }

    let totalMemories;
    if (Object.keys(req.body).length > 0) {
      totalMemories = await Memory.countDocuments(query);
    } else {
      totalMemories = await Memory.countDocuments();
    }

    const memories = await query
      .skip((page - 1) * limit)
      .limit(limit);

    const totalPages = Math.ceil(totalMemories / limit);

    res.json({
      memories,
      totalPages,
      currentPage: page,
      totalMemories,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Memory', error });
  }
}

module.exports = { getMemories };