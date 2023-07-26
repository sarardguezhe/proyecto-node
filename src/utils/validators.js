const User = require("../api/models/user.model");

const validateEmail = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(String(email).toLowerCase());
};

const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;  
    //Mínnimo 6 caracteres, una mayúscula, una minúscula, un número y un caracter especial
   
    return regex.test(String(password));
};

const usedEmail = async (email) => {
  const users = await User.find({ email: email });
  return users.length;
};

module.exports = { validateEmail, validatePassword, usedEmail };
