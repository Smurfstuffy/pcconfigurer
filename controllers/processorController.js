const Processor = require('../models/processor.model');

const getProcessors = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;

  try {
    let query = Processor.find();

    if (req.body.manufacturer) {
      const manufacturerRegex = new RegExp(req.body.manufacturer, 'i'); 
      query = query.where('name', manufacturerRegex); 
    }
    if (req.body.minCoreCount) {
      query = query.where('core_count').gte(parseInt(req.body.minCoreCount)); 
    }
    if (req.body.maxCoreCount) {
      query = query.where('core_count').lte(parseInt(req.body.maxCoreCount)); 
    }
    if (req.body.minCoreClock) {
      query = query.where('core_clock').gte(parseFloat(req.body.minCoreClock)); 
    }
    if (req.body.maxCoreClock) {
      query = query.where('core_clock').lte(parseFloat(req.body.maxCoreClock)); 
    }
    if (req.body.minTdp) {
      query = query.where('tdp').gte(parseInt(req.body.minTdp));
    }
    if (req.body.maxTdp) {
      query = query.where('tdp').lte(parseInt(req.body.maxTdp));
    }
    if (req.body.smt) {
      query = query.where('smt', req.body.smt); 
    }

    let totalProcessors;
    if (Object.keys(req.body).length > 0) {
      totalProcessors = await Processor.countDocuments(query);
    } else {
      totalProcessors = await Processor.countDocuments();
    }

    const processors = await query
      .skip((page - 1) * limit)
      .limit(limit);

    const totalPages = Math.ceil(totalProcessors / limit);

    res.json({
      processors,
      totalPages,
      currentPage: page,
      totalProcessors,
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Processors', error });
  }
}

module.exports = {getProcessors};