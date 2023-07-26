const express = require('express');
const {getVinyls, postVinyl, putVinyl, deleteVinyl} = require('../controllers/vinyls.controllers');

const vinylRoutes = express.Router();

vinylRoutes.get("/", getVinyls);
vinylRoutes.post("/", postVinyl);
vinylRoutes.put("/:id", putVinyl);
vinylRoutes.delete("/:id", deleteVinyl);

module.exports = vinylRoutes;