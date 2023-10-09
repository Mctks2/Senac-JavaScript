
// **Criando um Objeto**
// Você pode criar um objeto em JavaScript de várias maneiras, mas a forma mais comum é usando sintaxe de objeto literal:

/*
let pessoa = {
    nome: "João",
    idade: 30, 
    profissao: "Desenvolvedor",
    empregado: true,
    andar: function(){console.log("Estou andando")}, // função anonima
    dormir: () => {console.log("Estou dormindo")}, //funcão anonima com arrow function
    somar: function(a, b){
        return a + b;
    }
};
*/

// Acessando Propriedades do Objeto
// Você pode acessar as propriedades de um objeto usando a notação  de ponto ou a notação de colchetes:

//console.log(pessoa.nome);
//console.log(pessoa['idade']);
//console.log(pessoa['profissao']);
//console.log(pessoa.profissao);

//let sobrenome = "Silva";
//console.log(sobrenome.toUpperCase()) // sobrenome maiusculo
//console.log(sobrenome[4]) // pega o quarto valor da variavel sobrenome

//Você pode adicionar novas propriedades a um objeto ou modificar as existentes a qualquer momento:
//pessoa.cidade = "São Paulo";
//console.log(pessoa)

// **Removendo Propriedades**
// Você pode remover uma propriedades  de um objeto usando o operador ´delete´:

//delete pessoa.profissao;
//console.log(pessoa);

// **Métodos em Objetos**
// Além das propriedades, os objetos podem conter métodos, que são funções associadas ao objeto:

//pessoa.andar();
//pessoa.dormir();
//console.log(pessoa.somar(1, 2));

// **Iterando em Propriedades de um Objeto**
// Você pode percorrer todas as propriedades de um objeto usando um loop ´for...in´:
//for(let chave in pessoa){
    //console.log(chave +": "+pessoa[chave]);
    //console.log(chave);
    //console.log(pessoa.nome);
//}

// **Objetos Aninhados**
// Objetos podem conter outros objetos, criando assim objetos aninhados:
/*
let empresa = {
    nome: "Dev Anjos",
    endereco: {
        rua: "Rua Principal",
        cidade: "Cidade A",
        estado: "Estado X"
    },
    funcionarios: ["João", "Maria", "Pedro"]
};*/

//console.log(empresa)
//console.log(empresa.endereco.rua);
//console.log(empresa.funcionarios[1]);

//for (const func of empresa.funcionarios){// percorre o array    
//    console.log(func)
//}

// **Construtores de Objeto ou Fábricas de Objetos**
// Você também pode criar objetos usando construtores de objeto. Aqui esta um exemplo:

//function Carro(marca, modelo){  
//   this.marca = marca; //
//    this.modelo = modelo;
//    this.buzinar = function(){
//       console.log("Bibi-fomfom") 
//    };
//}

/*let meuCarro = new Carro("Toyota", "Corolla");
console.log(meuCarro.marca);
meuCarro.buzinar(); 

let meuPalio = new Carro("Fiat", "Palio");
console.log(meuPalio.marca);    
meuPalio.buzinar(); */


//function Carro2(marca, modelo){  
//    return{marca, modelo}; // retorna um objeto
//}

//let meuCarro2 = new Carro2("Toyota", "Corolla");
//console.log(meuCarro);

// JSON é uma abreviação de JavaScript Object Notation.
// Json é utilizado para representar informações estruturas e é frequentemente usado para troca de dados entre um servidor e um cliente.

// API REST (Json)
//{{ nome: "João", idade: 30}, { nome: "João", idade: 30}, { nome: "Pedro", idade: 35}}

let usuario = {
    "nome": "João",
    "idade": 30,
    "casado": false,
    "amigos": ["Maria", "Pedro"],
    "endereco": {
        "rua": "Rua Principal",
        "cidade": "São Paulo",
    },
    "telefone": null
}

// Converter um objeto Javascript em uma string JSON
//let jsonString = JSON.stringify(usuario); 
//console.log(jsonString); 

// Converter uma string JSON em um objeto Javascript
//let objetoDeNovo = JSON.parse(jsonString);
//console.log(objetoDeNovo);

// **Validação de JSON**

// Para validar se uma string contem um objeto JSON válido, você pode usar o `try...catch` ao tentar fazer o parse da string:

//let jsonString = '{"nome": "João", "idade": 30}';
//try{ // tenta executar
//    let objeto = JSON.parse(jsonString); 
//    console.log("JSON válido: ",objeto); 
//}catch (error){
//    console.log("JSON inválido: ",error);
//}

//**JSON em requisições HTTP** 
//JSON é amplamente utilizado em requisições HTTP e respostas, especialmente em APIs da web. Por exemplo, ao fazer uma requisição AJAX para um servidor, você pode usar JSON para armazenar os dados retornados.

// Exemplo de requisição AJAX para receber um objeto JSON
//fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//.then(response => response.json())
//.then(data => console.log(data))
//.catch(error => console.log('Erro: ',error));

// Criar um objeto que representa uma lista de tarefas
const listaDeTarefas = {
    tarefas: [{descricao: 'Fazer almoço', status: 'Pendente'},
    {descricao: 'Estudar JavaScript', status: 'Concluída'},
    {descricao: 'Jogar video-game', status: 'Pendente'}
    ],
    nomeDaLista: 'Minhas tarefas'
};

// Percorrer o objeto e imprimir as informações de cada tarefa
for (const tarefa of listaDeTarefas.tarefas) {
    console.log(tarefa.descricao, tarefa.status);
}
