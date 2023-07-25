const Vinyl = require('../models/vinyls.model');

const getVinyls = async (req, res) => {
    try {
      const allVinyls = await Vinyl.find();
      return res.status(200).json(allVinyls);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  module.exports = {getVinyls};