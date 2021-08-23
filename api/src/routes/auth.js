const express=require('express');
const jwt=require('jsonwebtoken');


const db=require('../config/database');
const User=require('../models/User');
const utils=require('../lib/utils');

const router=express.Router()

router.post('/sign-up',async (req,res)=>{
    const username=req.body.username
    //Checkea si el usuario ya se encuentra registrado o no
    const isUser= await User.findOne({where:{username:username}})
    if(isUser){
        res.json({
            message:"Usuario ya existe",
        });
    }else{
        //Hashing de la contraseña
        const password=await utils.encryptPass(req.body.password)
        const user= await User.create({
            username,
            password
        })
        if(user){
            res.json({
                message:"Usuario registrado",
            });
        }else{
            res.status(500);
        }
    }
    
})

router.post('/sign-in',async(req,res)=>{
    //Busquena del usuario en la base de datos
    const user=await User.findOne({where:{username: req.body.username } })
    if(user){
        //Verificacion si contraseña del usuario es correcta
        const auth=await utils.decryptPass(req.body.password,user.password)
        if(auth==true){
            //Creacion de la token
            jwt.sign({user}, secretkey, {expiresIn: '1h'}, (err, token) => {
                res.json({
                    token
                });
            });
        }else{
            res.json({
                message:"Contraseña invalida",
                status:"fail"
            });
        }
    }else{
        res.json({
            message:"Usuario no existe",
            status:"fail"
        });
    }
})



module.exports=router;