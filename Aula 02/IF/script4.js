//Verificar maior idade (NODEJS)

//Importação do prompt
let prompt = require('prompt-sync')();

let idade = Number (prompt("Qual a sua idade? "));

//Number = Converte para número inteiro ou decimal.
//parseInt = Converte para número inteiro
//parseFloat = Converte para número decimal ou ponto flutuante

console.log("Você tem " +idade)

if(idade  >= 18){
    console.log("Você pode dirigir")
}else{
    console.log("Você não pode dirigir")
}