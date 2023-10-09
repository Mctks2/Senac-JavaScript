// Função que recebe um parametro e exibe uma mensagem com ele
/*function mostrarMensagem(nome, sobrenome){
    console.log("Olá, "+nome+ " "+sobrenome+ "!");
}*/

// Chamando a função com um argumento
//mostrarMensagem("João", "Silva");

//Função com retorno
let c=10

function soma(a,b, x){
    let y = 10
    return a + b + x + y;
}

// Chamando a função e armazenando o  resultado em uma variável
//let resultado = soma (5,3);
//console.log("A soma é: "+ resultado);

console.log("A soma é: "+ soma(10,10));

c=20
console.log("A soma é: "+ soma(10,10 + c));
