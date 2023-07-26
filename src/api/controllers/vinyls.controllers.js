const Vinyl = require('../models/vinyls.model');

const getVinyls = async (req, res) => {
    try {
      const allVinyls = await Vinyl.find();
      return res.status(200).json(allVinyls);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

const postVinyl = async (req, res) => {
    try {
      const newVinyl = new Vinyl(req.body);
      const createdVinyl = await newVinyl.save();

      return res.status(200).json(createdVinyl);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

const putVinyl = async (req, res) => {
    try {
      const { id } = req.params;
  
      const putVinyl = new Vinyl(req.body);
      putVinyl._id = id;
      const updatedVinyl = await Vinyl.findByIdAndUpdate(id, putVinyl, {
        new: true,
      });
      
      if (!updatedVinyl) {
        return res.status(404).json({ message: "no existe este id de vinilo" });
      }
      return res.status(200).json(updatedVinyl);
    } catch (error) {
      return res.status(500).json(error);
    }
  };

const deleteVinyl = async (req, res) => {
    try {
      const {id} = req.params;
      const deletedVinyl = await Vinyl.findByIdAndDelete(id)
      if (!deletedVinyl) {
          return res.status(404).json({message:"este id no existe"})
      }
      return res.status(200).json(deletedVinyl);
    } catch (error) {
      return res.status(500).json(error)
    }
  };


module.exports = {getVinyls, postVinyl, putVinyl, deleteVinyl};