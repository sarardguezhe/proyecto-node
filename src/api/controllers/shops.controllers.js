const Shop = require('../models/shops.model');

const getShops = async (req, res) => {
    try {
      const allShops = await Shop.find().populate('products', 'title artist year genre price');
      return res.status(200).json(allShops);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

  const postShop = async (req, res) => {
    try {
       const newShop = new Shop(req.body);
       const createdShop = await newShop.save()
       return res.status(201).json(createdShop) 
    } catch (error) {
       return res.status(500).json(error)
    }
};

const putShop = async (req, res) => {
  try {
    const {id} = req.params;

    const putShop = new Shop(req.body);
    putShop._id = id;
    const updatedShop = await Shop.findByIdAndUpdate(id, putShop, {
      new: true,
    });
    
    if (!updatedShop) {
      return res.status(404).json({ message: "No existe este id de tienda" });
    }
    return res.status(200).json(updatedShop);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteShop = async (req, res) => {
  try {
    const {id} = req.params;
    const deletedShop = await Shop.findByIdAndDelete(id)
    if (!deletedShop) {
        return res.status(404).json({message:"Este id no existe"})
    }
    return res.status(200).json(deletedShop);
  } catch (error) {
    return res.status(500).json(error)
  }
};

  module.exports = {getShops, postShop, putShop, deleteShop};