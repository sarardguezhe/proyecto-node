const express = require('express');
const {getVinyls, postVinyl, putVinyl, deleteVinyl} = require('../controllers/vinyls.controllers');
const {isAuth, isAdmin} = require('../../middlewares/auth');

const vinylRoutes = express.Router();

vinylRoutes.get("/", getVinyls);
vinylRoutes.post("/", isAdmin, postVinyl);
vinylRoutes.put("/:id", isAdmin, putVinyl);
vinylRoutes.delete("/:id", isAdmin, deleteVinyl);

module.exports = vinylRoutes;