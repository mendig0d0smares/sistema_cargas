const {Sequelize} = require('sequelize')
const db = new Sequelize('db_logistica','root','senai', {
    host : 'localhost',
    dialect: 'mysql',
    port: 3306
})

db.authenticate()
    .then(()=>{
        console.log('banco de dados conectado')
    })
.catch((err)=>{
    console.error('erro de conexão',err)
})

module.exports = db