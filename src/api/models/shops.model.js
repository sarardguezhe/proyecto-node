const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopSchema = new Schema(
    {
    name: {type:String, required:true},
    city: {type:String, required:true},
    address: {type:String, required:true},
    products: [{type: Schema.Types.ObjectId, ref: "vinyls" }],
    }
);

const Shop = mongoose.model("shops", shopSchema);

module.exports = Shop;