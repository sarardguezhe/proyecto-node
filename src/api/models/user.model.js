const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        email:{type:String, required: true},
        password:{type:String, required: true},
        role:{type:String, default:"user", enum:["admin","user"]},

    }
);

const User = mongoose.model("users", userSchema);

module.exports = User;