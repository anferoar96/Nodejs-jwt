const { Sequelize } = require('sequelize');

module.exports=new Sequelize('ruedata1', 'adminuser', 'admin1289', {
    host:'db1',
    port:'5432',
    //host:'localhost',
    dialect: 'postgres',
    //port:'5430'
});