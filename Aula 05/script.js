//** 1. Classes** 

//**2. Sintaxe Básica de Classes**
//  - Como declarar um classe em Javascript

class Pessoa{

    //**3. Construtores **
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
    // Métodos
    saudacao(){
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }

    dormir(){
        console.log (`Boa noite, hoje vou dormir por 8 horas seguidas!`);
    }
}

//** 4. Criando um objeto de uma classe (Instanciar) **
let pessoa1 = new Pessoa ("Enzo", 30);
let pessoa2 = new Pessoa ("Valentina",25);

//pessoa1.dormir();

//**5. Métodos de Classe** 
//pessoa1.aniversario = function(){
//    this.idade++ //this.idade = this.idade + 1
//    console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos, fiz aniversário agora!`);
//};

//pessoa1.aniversario(); //Olá, meu nome é Enzo e tenho 31 anos, fiz aniversário agora!
//pessoa1.aniversario(); //Olá, meu nome é Enzo e tenho 32 anos, fiz aniversário agora!

//**6. Acessando Propriedades e Métodos **
//console.log(pessoa1.nome);


//**7. Herança**
// A herança é um conceito fundamental de programação orientada a objetos (POO) que permite que um objeto herde todos os métodos e propriedades de outro objeto, chamado da classe pai.

// 8. Palavra-Chave super: chhama o construtor da classe pai

/*class Estudante extends Pessoa{
    constructor(nome,idade,curso){ 
        super(nome,idade);
        this.curso = curso; 

    }
    estudar(){
        console.log(`${this.nome} está estudando ${this.curso}.`);
    }
};

let estudante1 = new Estudante("Lorenzo", 18, "JavaScript");
//console.log(estudante1);
estudante1.saudacao();
estudante1.dormir();
estudante1.estudar();
*/

//** 9.Polimorfismo 

class Veiculo{
    constructor(modelo,ano){
        this.modelo = modelo;
        this.ano = ano;
    }
    buzinar(){
        console.log("Bibi-fomfom "+this.modelo);
    }
}

class Carro extends Veiculo{
    constructor(modelo,ano){
        super(modelo,ano);
    }
    buzinar(){
        console.log("Biiiiiiii " +this.ano)
    }
}

class Onibus extends Veiculo{
    constructor(modelo,ano){
        super(modelo,ano);
    }
    buzinar(){
        console.log("Boooommmm " +this.ano)
    }
}

class Moto extends Veiculo{
    constructor(modelo,ano,usaCapacete){
        super(modelo,ano);
        this.usaCapacete = usaCapacete
    }
}

let fusca = new Carro("Fusca", 1966);
fusca.buzinar();

let onibus = new Onibus("Mercedez", 2018);
onibus.buzinar();

let moto = new Moto("Yamaha", 2019, true);
moto.buzinar();