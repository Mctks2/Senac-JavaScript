const express = require('express')
const app = express()

app.use(express.json()) // middleware para interpretar json

//endpoint = 'http://localhost:3000/'
//verbo = 'GET'

//Esse GET: 'http://localhost:3000'/hello (Rota: /hello)

app.get('/hello', function(request, response){ // 
    response.status(400).send('Hello Cozinha!')
})

app.get('/', function(request, response){ // 
    response.status(200).send('Bem vindo a minha API!')
})

// //Esse GET: 'http://localhost:3000'/localizacao
app.get('/localizacao', function(request, response){ // 
    localizacaoUsuario = {latitude: 100, longitude: 200}
    response.status(200).send('Localização do usuário')
    // response.status(200).send(localizacaoUsuario)
    response.status(200).json(localizacaoUsuario)
})

app.get('/usuario/:id', function(request, response){ // obter
    id_usuario = request.params.id
    response.status(200).send("Eu conheco o usuario: " + id_usuario)
})

app.delete('/usuario/:id', function(request, response){ // delete
    id_usuario = request.params.id
    response.status(200).send("Eu vou deletar o usuario: " + id_usuario)
})

app.put('/usuario/:id', function(request, response){ // atualizar
    id_usuario = request.params.id
    response.status(200).send("Eu vou atualizar o usuario: " + id_usuario)
})

app.post('/usuario/:id', function(request, response){ // enviar
    id_usuario = request.params.id
    response.status(200).send("Eu vou enviar o usuario: " + id_usuario)
})

app.patch('/usuario/:id', function(request, response){ // consertar
    id_usuario = request.params.id
    response.status(200).send("Eu vou consertar o usuario: " + id_usuario)
})

app.get('usuario/:nome/:sobrenome', (req, response) => {
    const nome = req.query.nome;
    const sobrenome = req.query.sobrenome;

    // Faça algo com nome e sobrenome, como enviar uma resposta
    response.send(`Olá, ${nome} ${sobrenome}`);
})

app.listen(3000, function(){
    console.log('Servidor rodando na porta 3000!')
})