const express = require('express');
const {getVinyls} = require('../controllers/vinyls.controllers');

const vinylRoutes = express.Router();

vinylRoutes.get("/", getVinyls);

module.exports = vinylRoutes;