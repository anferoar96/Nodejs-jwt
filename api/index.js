const express = require('express');
const morgan = require('morgan');
var crypto = require('crypto')
const path = require('path');

const db=require('./src/config/database')

//Initizalization
const app=express();


//Settings
app.set('port', process.env.port || 4000);
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(require('./src/routes/routes'));
app.use(require('./src/routes/auth'))

//Globals
global.secretkey=crypto.randomBytes(64).toString('hex');


//Database
db.authenticate()
    .then(()=>console.log("Database connected"))
    .catch(err=>console.log("Error "+err))
//Starting server
app.listen(app.get('port'),()=>{
    console.log("Server on port",app.get('port'))
})