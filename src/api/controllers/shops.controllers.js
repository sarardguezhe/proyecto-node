const Shop = require('../models/shops.model');

const getShops = async (req, res) => {
    try {
      const allShops = await Shop.find().populate('collection');
      return res.status(200).json(allShops);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  module.exports = {getShops};