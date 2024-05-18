const Processor = require('../models/processor.model');
const { getPartImageByName } =  require('./partsPriceController');

const getProcessors = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 24;

  try {
    let query = Processor.find();

    if (req.body.manufacturer && Array.isArray(req.body.manufacturer)) {
      const manufacturerRegexes = req.body.manufacturer.map(manufacturer => new RegExp(manufacturer, 'i'));
      query = query.where('name').in(manufacturerRegexes);
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

const updateCPUsWithImageUrls = async () => {
  try {
    // Find all CPUs from the database
    const processors = await Processor.find();

    // Iterate through each CPU and fetch its image URL
    for (const cpu of processors) {
      // Call getPartImageByName method to get image URL based on CPU name
      const response = await getPartImageByName({ body: { nameToFind: cpu.name } });

      // If image URL is found, update the CPU document with imgUrl field
      if (response.data && response.data.imgUrl) {
        cpu.imgUrl = response.data.imgUrl;
      } else {
        // If image URL is not found, set imgUrl to null
        cpu.imgUrl = null;
      }
      // Save the updated CPU document
      await cpu.save();
    }
    console.log('Image URLs added to CPUs successfully');
  } catch (error) {
    console.error('Error updating CPUs with image URLs:', error);
  }
};

module.exports = { getProcessors, updateCPUsWithImageUrls };