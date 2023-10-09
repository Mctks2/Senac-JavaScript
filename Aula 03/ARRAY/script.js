// array = lista ou vetor ou matriz(multidimensional)

/*let numeros= []
const frutas = ['maçã','banana','laranja'];

console.log(frutas)
console.log(numeros)

//Construtor Array:
const frutas2 = new Array('maçã','banana','laranja')
const numeros2 = new Array(10) // Array vazio com 10 posições.

console.log(frutas2)
console.log(numeros2)
*/

//Acessando elementos
//console.log(frutas[0]) //Retonar maçã


//const frutas = ['maçã','banana','laranja','uva']
//console.log(frutas[0])

// Retornar a quantidade de elementos do array
//console.log(frutas.length) 

//Retornar o último valor do array
//console.log([frutas.length -1]) 

//Adicionando Elementos no Final: 
//frutas.push('uva')
//console.log(frutas)

//Removendo Elementos do Final: 
//frutas.pop()

//frutas[0] = 'uva' // substitui maçã

//Adicionando Elementos no Início
//frutas.unshift("Abacaxi") 
//console.log(frutas)

//Removendo Elementos no Início
//frutas.shift()
//console.log(frutas)

//Encontrando o Índice de um Elemento:
//const indiceBanana = frutas.indexOf('banana')
//console.log(indiceBanana)
//console.log(frutas[indiceBanana]) //retorna o valor do indiceBanana = banana

//Removendo Elementos por Índice
//frutas.splice(indiceBanana, 1) // se colocar 2 ou 3 remove elementos a direita


//console.log("Gosto de: "+frutas[0])
//console.log("Gosto de: "+frutas[1])
//console.log("Gosto de: "+frutas[2])
//console.log("Gosto de: "+frutas[3])
//console.log("====================")

//Interação com for:
//for(let i = 0; i< frutas.length; i++){
//    console.log("Gosto de: "+frutas[i])
//}


const frutas = ['maçã','banana','laranja','uva']

//Interação com for..of`
for (const fruta of frutas){
    console.log(fruta)
}


