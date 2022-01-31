const bodyParser = require('body-parser') //faz o parser do Body da requisição e deixa os dados prontos para serem manipulados
const express = require('express')
const app = express()

//middleware = funções executadas sempre que uma requisição chegar
app.use(express.static('.')) //serve os arquivos estáticos de dentro pasta
app.use(bodyParser.urlencoded({ extended: true })) //Lê dados e transforma em um objeto
app.use(bodyParser.json()) //código que transforma o json é um objeto

app.listen(8080, () => console.log('Executando servidor...'))