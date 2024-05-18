const GraphicalCard = require('../models/graphicCard.model');

const getGraphicalCards = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 24;

  try {
    let query = GraphicalCard.find();

    if (req.body.manufacturer && Array.isArray(req.body.manufacturer)) {
      const manufacturerRegexes = req.body.manufacturer.map(manufacturer => new RegExp(manufacturer, 'i'));
      query = query.where('name').in(manufacturerRegexes);
    }
    if (req.body.chipset && Array.isArray(req.body.chipset)) {
      query = query.where('chipset').in(req.body.chipset);
    }
    if (req.body.minMemory) {
      query = query.where('memory').gte(parseInt(req.body.minMemory)); 
    }
    if (req.body.maxMemory) {
      query = query.where('memory').lte(parseInt(req.body.maxMemory)); 
    }
    if (req.body.minCoreClock) {
      query = query.where('core_clock').gte(parseFloat(req.body.minCoreClock)); 
    }
    if (req.body.maxCoreClock) {
      query = query.where('core_clock').lte(parseFloat(req.body.maxCoreClock)); 
    }
    if (req.body.minLength) {
      query = query.where('length').gte(parseInt(req.body.minLength));
    }
    if (req.body.maxLength) {
      query = query.where('length').lte(parseInt(req.body.maxLength));
    }

    let totalGraphicalCards;
    if (Object.keys(req.body).length > 0) {
      totalGraphicalCards = await GraphicalCard.countDocuments(query);
    } else {
      totalGraphicalCards = await GraphicalCard.countDocuments();
    }

    const graphicalCards = await query
      .skip((page - 1) * limit)
      .limit(limit);

    const totalPages = Math.ceil(totalGraphicalCards / limit);

    res.json({
      graphicalCards,
      totalPages,
      currentPage: page,
      totalGraphicalCards,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching GraphicalCards', error });
  }
}

module.exports = {getGraphicalCards};