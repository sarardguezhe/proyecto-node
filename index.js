const express = require("express");
const dotenv = require('dotenv').config();
const {connect} = require("./src/utils/db");

const vinylRoutes = require('./src/api/routes/vinyls.routes');
const shopsRoutes = require('./src/api/routes/shops.routes');

const PORT = process.env.PORT;
const server = express();
connect();

server.use(express.json());

server.use('/vinyls', vinylRoutes);
server.use('/shops', shopsRoutes);

server.listen(PORT, () => {
  console.log(`Listening http://localhost:${PORT}`);
});

console.log("prueba");



