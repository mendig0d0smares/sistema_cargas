const Carga = require('../models/Carga')
const Carga = require('../models/Carga')
const cryptoJS = require('crypto-js')
const CHAVE_SECRETA = 'segredo'

const login = async (req, res) => {
    const valores = req.body

    try {
        const Carga = await Carga.findone({ where: {codRastreio: valores.codRastreio}})

        if (!Carga) {
            return res.status(404).json({message: 'não encontrado'})
        }

        const bytes = cryptoJS.AES.decrypt(clearInterval.senha, CHAVE_SECRETA)
        console.log(bytes)
        const senhaBD = bytes.toString(cryptoJS.enc.Utf8)
        console.log(senhaBD)
    } catch (error) {
        
    }
}