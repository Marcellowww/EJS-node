const express = require('express');
const qualityItems = require('./modules/qualitys.js');
//instanciando o express  na variavel app
const app = express();



// setando a view engine para transformar ejs par html
app.set("view engine", "ejs");

//o metodo get dentro do express, cria uma rota no servido para o arquivo a ser renderizado
app.get("/", (req, res) => { //é passado o parametro req() e res(response)
    res.render("pages/index", { qualitys: qualityItems }); // passando um array em forma de obj com dados para o index
    //aqui a resposta da função seria renderizar o apagina solicitada
})

app.get("/sobre", (req, res) => {
    res.render("pages/about");
})



//listen é um metodo do expres que escuta quando é aberto uma porta que no caso é 8080 assim executando a aplicação
app.listen(8080)
console.log("Servidor rodando na porta 8080")