const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Entrega = db.define('entrega', {
    codEntrega: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cidade: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    destino: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('entregue','transito'),
        allowNull: false
    },
    data: {
        type: DataTypes.DATE,
        allowNull: false
    },
    idCarga: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'cargas',
            key: 'codCarga'
        }
    }
}, {
    timestamps: false,
    tableName: 'entregas'
})

module.exports = Entrega