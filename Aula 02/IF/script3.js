// Loops de repetição (for, while, do...while)

// For (Para)
/*for (let x = 1; x <= 10; x++) {
    console.log(x)   
}
*/

// Tabuada de 5

/*
for (let x = 0; x <= 10; x++) {
    console.log(" 5 x " + x + " = " + x*5)

    if(x==5){
        break
    }
}
*/

// Tabuada de 5
/*
let x = 1;

while (x <= 5){
    console.log(" 5 x " + x + " = " + x*5)
    x++;
}
*/

//Lampada acesa
/*
LampadaAcesa = true;

console.log("Antes do while")

while (LampadaAcesa == true){
    console.log("Lampada Acesa");
    LampadaAcesa = false
}
console.log("Depois do while")
*/


//Lampada acesa (Do while)
LampadaAcesa = false;

console.log("Antes do while")

do {
    console.log ("Lampada acesa")
    LampadaAcesa = false;

} while (LampadaAcesa == true);

console.log("Depois do while")



