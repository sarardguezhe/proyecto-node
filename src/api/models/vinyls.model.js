const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vinylSchema = new Schema(
    {
        title: {type:String, required: true},
        artist: {type:String, required: true},
        image:[{type:String, required:false}],
        year: {type:Number, required: false},
        genre: {type:String, required: false},
        price: {type:Number, required: true},
        stock: {type:Number, required: true},
    }
)

const Vinyl = mongoose.model("vinyls", vinylSchema);

module.exports = Vinyl;
