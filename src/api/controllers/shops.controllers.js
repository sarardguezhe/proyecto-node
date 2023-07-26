const Shop = require('../models/shops.model');

const getShops = async (req, res) => {
    try {
      const allShops = await Shop.find().populate('products', 'title artist year genre price');
      return res.status(200).json(allShops);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  const postShop = async ( req,res) => {
    try {
       const newShop = new Shop(req.body);
       const createdShop = await newShop.save()
       return res.status(201).json(createdShop) 
    } catch (error) {
       return res.status(500).json(error)
    }
}

  module.exports = {getShops, postShop};