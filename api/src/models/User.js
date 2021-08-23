const Sequelize=require('sequelize');
const db=require('../config/database')

const User=db.define('user',{
    username:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    }
},{
    schema:'auth'
})

module.exports=User