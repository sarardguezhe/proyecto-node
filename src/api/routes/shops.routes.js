const express = require('express');
const {getShops, postShop, putShop, deleteShop} = require('../controllers/shops.controllers');
const {isAuth, isAdmin} = require('../../middlewares/auth');

const shopsRoutes = express.Router();

shopsRoutes.get("/", getShops);
shopsRoutes.post("/", isAdmin, postShop);
shopsRoutes.put("/:id", isAdmin, putShop);
shopsRoutes.delete("/:id", isAdmin, deleteShop);

module.exports = shopsRoutes;