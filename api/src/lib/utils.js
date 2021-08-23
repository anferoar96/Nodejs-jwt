const bcrypt=require('bcryptjs')
const utils={}

utils.encryptPass=async (password)=>{
    //Hashing de la contraseña usando bcrypt
    const salt=await bcrypt.genSalt(10);
    const passHash=await bcrypt.hash(password,salt);
    return passHash;
};

utils.decryptPass=async (password,savedPassword)=>{
   return await bcrypt.compare(password,savedPassword);
}

module.exports=utils;