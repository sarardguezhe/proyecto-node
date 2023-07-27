const User = require("../api/models/user.model");
const {verifyToken} = require("../utils/jwt");


const isAuth = async (req, res, next) => {

    try {
        const authorization = req.headers.authorization;

        if (!authorization) {
            return res.status(401).json({message:"You don't have authorization"});
        }

        const token = authorization.split(" ")[1];
      
        if (!token) {
            return res.status(401).json({message:"Invalid token"});
        }

        const tokenVerified = verifyToken(token);
     
        if (!tokenVerified.id) {
            return res.status(401).json(tokenVerified);
        }
  
        const userLogged = await User.findById(tokenVerified.id);
        req.user = userLogged;
        next()

    } catch (error) {
        return res.status(500).json(error);
    }
};

const isAdmin = async (req, res, next) => {

    try {
      
        const authorization = req.headers.authorization;

        if (!authorization) {
            return res.status(401).json({message:"You don't have authorization"});
        }

        const token = authorization.split(" ")[1];
      
        if (!token) {
            return res.status(401).json({message:"Invalid token"});
        }

        const tokenVerified = verifyToken(token);
     
        if (!tokenVerified.id) {
            return res.status(401).json(tokenVerified);
        }
  
        const userLogged = await User.findById(tokenVerified.id);
        req.user = userLogged;
     
        if (userLogged.role !== "admin") {
            return res.status(401).json({message:"Admin permissions are required"});
        }

        next()

    } catch (error) {
        return res.status(500).json(error);
    }
};


module.exports = {isAuth, isAdmin};