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

        if (valores.senha !== senhaBD) {
            return res.status(401).json({message: 'senha incorreta'})
        }

        const tresHorasEmMs = 3 * 60 * 60 * 1000
        const tempoExpiracao = Date.now() + tresHorasEmMs

        const payload = {
            idCliente: cliente.codCliente,
            nome: cliente.nome,
            expiraEm: tempoExpiracao
        }

        const token = CryptoJS.AES.encrypt(JSON.stringify(payload), CHAVE_SECRETA).toString()

        return res.status(200).json({
            message: 'login realizado com sucesso!',
            token: token,
            nome: cliente.nome
        })
    } catch (error) {
        console.error('erro ao tentar fazer login',err)
        return res.status(500).json({message: 'erro ao tentar fazer o login!' })
    }
}
module.exports = { login }