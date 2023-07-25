const express = require("express");
const dotenv = require('dotenv').config();
const {connect} = require("./src/utils/db");

const PORT = process.env.PORT;
const server = express();
connect();

server.use(express.json());

server.listen(PORT, () => {
  console.log(`Listening http://localhost:${PORT}`);
});



