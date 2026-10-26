const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Carga = db.define('carga', {
    codCarga: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descricao: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    peso: {
        type: DataTypes.FLOAT(20,3),
        allowNull: false
    },
    volume: {
        type: DataTypes.FLOAT(20,3),
    },
    codRastreio: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    idMotorista:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'motoristas',
            key: 'codMotorista'
        }
    }
}, {
    timestamps: false,
    tableName: 'cargas'
})

module.exports = Carga