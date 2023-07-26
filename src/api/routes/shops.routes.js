const express = require('express');
const {getShops} = require('../controllers/shops.controllers');

const shopsRoutes = express.Router();

shopsRoutes.get("/", getShops);

module.exports = shopsRoutes;