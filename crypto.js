const cpfCriptografado = CryptoJS.AES.encrypt(valores.cpf, CHAVE_SECRETA).toString()

const bytes = CryptoJS.AES.decrypt(el.cpf, CHAVE_SECRETA)

let cpfDescriptografado = bytes.toString(CryptoJS.enc.utf8)

fetch('https://localhost:3000/bicicleta', {
    method: 'POST',
    headers: {
        'content-type' : 'application/json',
        'authorization': token
    },
    body: JSON.stringify(valores)    
})

localStorage.setItem('token' , dados.token)

if (!token) {
    location.href = '../index,html'
}