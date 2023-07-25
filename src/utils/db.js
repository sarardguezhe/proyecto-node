const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const DB_URL = process.env.DB_URL;
    
const connect = async () =>{
    try {
        const db = await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const {name, host} = db.connection;
        console.log(`Connect to: ${name} host: ${host}`);

    } catch (error) {
        console.log(`Error de conexión: ${error}`);
    };

};

module.exports = {connect};