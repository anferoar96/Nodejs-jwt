const express=require('express');
const jwt=require('jsonwebtoken')
const db=require('../config/database');
const User=require('../models/User');
const utils=require('../lib/utils');

const router=express.Router()

//Get list of people in database (Only for testing purpose)
/* router.get('/all',(req,res)=>{
    User.findAll()
            .then(users=>{
                res.send(users)
            })
            .catch(err=>console.log(err))
}) */

//
router.post('/change-password',verifyToken,async(req,res)=>{
    jwt.verify(req.token,secretkey,async (err,authData)=>{
        if(err){
            res.sendStatus(403)
        }else{
            if(Object.keys(req.body).length==1){
                    const newPass=await utils.encryptPass(req.body.newpassword)
                    const username=authData.user.username
                    const existUser=await User.findOne({where:{username}})
                    if(existUser){
                        const changePass=await User.update(
                            {password:newPass},
                            {where:{username}}
                        )
                        if(changePass){
                            res.json({
                                message:"Contraseña cambiada correctamente",
                                status:"success"
                            })
                        }else{
                            res.sendStatus(500)
                        }
                    }else{
                        res.json({
                            message:"Usuario no existe",
                            status:"fail"
                        })
                    }
            }else{
                res.json({
                    message:"Numero incorrecto de parametros",
                    status:"fail"
                })
            }
            
        }
    })

})

function verifyToken(req,res,next){
    const header=req.headers['authorization'];
    if(header != undefined){
        const token=header.split(" ")[1]
        req.token=token
        next()
    }else{
        res.sendStatus(403)
    }
}


module.exports=router;