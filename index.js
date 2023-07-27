const express = require("express");
//const swagger = require('swagger-ui-express');
const dotenv = require('dotenv').config();
const cloudinary = require('cloudinary').v2.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});
const {connect} = require("./src/utils/db");

const vinylRoutes = require('./src/api/routes/vinyls.routes');
const shopsRoutes = require('./src/api/routes/shops.routes');
const userRoutes = require('./src/api/routes/user.routes');

const PORT = process.env.PORT;
const app = express();
connect();

app.use(express.json());

app.use('/vinyls', vinylRoutes);
app.use('/shops', shopsRoutes);
app.use('/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Listening http://localhost:${PORT}`);
});




