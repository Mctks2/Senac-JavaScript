// Criando um array vazio
const frutas = [];

// Adicionar elementos ao array
frutas.push('maçã');
frutas.push('banana');
frutas.push('laranja');
frutas.push('uva');

//console.log(frutas);

//Encontrando o Índice de um Elemento:
const indiceBanana = frutas.indexOf('banana')
//console.log(indiceBanana)
//console.log(frutas[indiceBanana])

//Removendo um elemento específico
frutas.splice(indiceBanana, 1)
console.log(frutas);

if (frutas.includes(indiceBanana)){
    console.log("O elemento existe no Array")
} else {
    console.log("O elemento não existe no Array")
}