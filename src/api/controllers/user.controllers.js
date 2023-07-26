const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const {validateEmail, validatePassword, usedEmail} = require("../../utils/validators");
const {generateSign} = require("../../utils/jwt");

const signup = async (req, res ) => {
    try {
        const newUser = new User(req.body);

        if (!validateEmail(newUser.email)) {
            return res.status(400).json({message:"Email inválido"});
        }
        if (!validatePassword(newUser.password)) {
            return res.status(400).json({message:"Contraseña inválida"});
        }
        if (await usedEmail(newUser.email)) {
            return res.status(400).json({message:"El email introducido ya existe"});
        }

        newUser.password = bcrypt.hashSync(newUser.password, 10);
        const createdUser = await newUser.save();

        return res.status(201).json(createdUser);

    } catch (error) {
        return res.status(500).json(error);
    }
};

const login = async (req, res) => {
    try {
        const userInfo = await User.findOne({email: req.body.email});
        
        if (!userInfo) {
            return res.status(404).json({message:"Email no encontrado"});
        }
        if (!bcrypt.compareSync(req.body.password,userInfo.password)) {
            return res.status(404).json({message:"Contraseña incorrecta"});
        }
       const token = generateSign(userInfo._id,userInfo.email);

       return res.status(200).json({user:userInfo,token:token});

    } catch (error) {
        return res.status(500).json(error);
    }
};


module.exports = {signup, login};