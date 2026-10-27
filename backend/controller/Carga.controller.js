const Carga = require('../models/Carga')
const Motorista = require('../models/Motorista')

const cadastrar = async(req, res) => {
    const valores = req.body

    try {
        const Carga = await Carga.findByPk(valores.idMotorista)
        if(!Carga){
            return res.status(400).json({message: 'Motorista não existe'})
        }

        const novaCarga = await Carga.create(valores)
        return res.status(201).json({message: 'cadastrado com sucesso'})
    } catch (err) {
        console.error('erro ao cadastrar',err)
        return res.status(500).json({message: 'erro ao cadastrar'})
    }
}

const listar = async (req, res) => {
    try {
        const clientes = await Cliente.findAll()
        let resultado = []
    }
}
module.exports = { cadastrar }