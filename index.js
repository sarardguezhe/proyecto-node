const express = require("express");
const dotenv = require('dotenv').config();
const {connect} = require("./src/utils/db");

const vinylRoutes = require('./src/api/routes/vinyls.routes');
const shopsRoutes = require('./src/api/routes/shops.routes');
const userRoutes = require('./src/api/routes/user.routes');

const PORT = process.env.PORT;
const server = express();
connect();

server.use(express.json());

server.use('/vinyls', vinylRoutes);
server.use('/shops', shopsRoutes);
server.use('/users', userRoutes);

server.listen(PORT, () => {
  console.log(`Listening http://localhost:${PORT}`);
});




