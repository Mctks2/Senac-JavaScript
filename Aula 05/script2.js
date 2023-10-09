// **10. Métodos Estáticos**
// Como criar métodos estáticos que não dependem de instâncias da classe

/* class Util{
    static somar(a,b){
        return a+b;
    }
}*/

//console.log(Util.somar(5,3));

// ** 11. Encapsulamento**
// - Como usar convenções para indicar propriedades privadas (usando `_`) . (Antigo)
// - Como usar # para indicar propriedades privadas (usando #) . (Novo)

class Carro {
    nome;
    #marca;
    #modelo;
    constructor(nome, marca, modelo) {
        this.nome = nome;
        this.#marca = marca;
        this.#modelo = modelo;    
    }

    buzinar(){console.log("Bibi-fomfom "+this.nome);}

    get marca(){
        return this.#marca + " " + this.nome;
    }

    set marca(novaMarca){
        this.#marca = novaMarca;
    }
}

let meuCarro = new Carro("Coroabot", "Toyota", "Corolla");
console.log(meuCarro);
meuCarro.buzinar();
meuCarro.marca = "Fiat"; // set
console.log(meuCarro.marca); // get

