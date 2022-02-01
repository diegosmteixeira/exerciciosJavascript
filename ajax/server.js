const bodyParser = require('body-parser') //faz o parser do Body da requisição e deixa os dados prontos para serem manipulados
const express = require('express')
const app = express()

//middleware = funções executadas sempre que uma requisição chegar
app.use(express.static('.')) //serve os arquivos estáticos de dentro pasta
app.use(bodyParser.urlencoded({ extended: true })) //Lê dados e transforma em um objeto
app.use(bodyParser.json()) //código que transforma o json é um objeto

const multer = require('multer') //interpretar o formulário que veio do arquivo upload

//personaliza a pasta que salva os arquivos como a pasta que salva ele
const storage = multer.diskStorage({
    destination: function (req, file, callback) {
        callback(null, './upload')
    },
    filename: function (req, file, callback) {
        callback(null, `${Date.now()}_${file.originalname}`) //composição do nome original + data atual
    }
})

const upload = multer({ storage }).single('arquivo') //interpreta o upload vindo da requisição

app.post('/upload', (req, res) => {
    upload(req, res, err => {
        if (err) {
            return res.end('Ocorreu um erro.')
        }

        res.end('Concluído com sucesso.')
    })
})

app.listen(8080, () => console.log('Executando servidor...'))
