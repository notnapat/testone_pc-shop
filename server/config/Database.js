const Sequelize = require("sequelize")

const db = new Sequelize('testone_pc_shop','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db;