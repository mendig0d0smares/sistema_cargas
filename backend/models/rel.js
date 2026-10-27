const Carga = require('./Carga')
const Motorista = require('./Motorista')
const Entrega = require('./Entrega')
const Funcionario = require('./funcionario')

Motorista.hasMany(Carga, {
    foreignKey: 'idCarga',
    as: 'cargaMotorista',
    onDelete: 'CASCADE' })

Carga.belongsTo(Motorista, {
    foreignKey: 'idMotorista',
    as: 'motoristaCarga',
    allowNull: false
})

Carga.hasMany(Entrega, {
    foreignKey: 'idEntrega',
    as: 'entregaCarga',
    onDelete: 'CASCADE' })

Entrega.belongsTo(Carga,{
 foreignKey: 'idCarga',
 as: 'cargaEntrega',
 allowNull: false    
})

module.exports = {Carga, Motorista, Entrega, Funcionario}