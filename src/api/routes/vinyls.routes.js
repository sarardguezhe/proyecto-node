const express = require('express');
const {getVinyls, postVinyl, putVinyl, deleteVinyl} = require('../controllers/vinyls.controllers');
const {isAdmin} = require('../../middlewares/auth');
const upload = require('../../middlewares/upload');

const vinylRoutes = express.Router();

vinylRoutes.get("/", getVinyls);
vinylRoutes.post("/", isAdmin, upload.fields([{name: "image"}]), postVinyl);
vinylRoutes.put("/:id", isAdmin, putVinyl);
vinylRoutes.delete("/:id", isAdmin, deleteVinyl);

module.exports = vinylRoutes;