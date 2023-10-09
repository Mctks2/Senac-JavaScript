

let prompt = require('prompt-sync')();

let numero = Number (prompt("Solicite um número: "));

if (numero > 0 ){
    console.log("número positivo")
}else if(numero == 0){
    console.log("número igual zero")
} else {
    console.log("número negativo")
}
