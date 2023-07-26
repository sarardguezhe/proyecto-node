const express = require('express');
const {getShops, postShop} = require('../controllers/shops.controllers');

const shopsRoutes = express.Router();

shopsRoutes.get("/", getShops);
shopsRoutes.post("/", postShop);

module.exports = shopsRoutes;