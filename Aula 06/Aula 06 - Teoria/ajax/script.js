// Programação assíncrona AJAX, Promisses e Async/Await

// A programação assíncrona permite que várias tarefas sejam executadas simultaneamente, sem bloquear  a execução de outras tarefas.

// 1. Callbacks , 2. AJAX, 3. Promises, 4. Async/Await

//1. Callbacks:  Os callbacks são funções que são passadas como argumentos para outras funções e executadas quando uma operação assíncrona é concluída. Isso permite que o código continue a ser executado enquanto a operação assíncrona está em andamento. No entanto, o uso excessivo de callbacks pode levar a problemas  de legibilidade e manutenção de codigo, conhecidos como "callback hell ou "pyramid of doom".

// setTimeout é uma função em JavaScript que  permite que voce agende a execucao de uma função para um determinado tempo. Essa função é útil quando voce deseja criar atrasos ou temporizadores em seu codigo. A sintaxe desta função é:
// setTimeout(funcao, tempo);

/*
console.log('Início do programa', new Date().toTimeString());
console.log('----------------------------------------------')

setTimeout(() => { //Isso é um callback assíncrono exibido 2 segundos depois chamado por setTimeout
    console.log('Isso é um callback assíncrono exibido 2 segundos após chamado');
    console.log('Meio do programa', new Date().toTimeString());
},2000);

console.log('Fim do programa', new Date().toTimeString());
console.log('----------------------------------------------')
*/

// setInterval é uma em JavaScript que  permite que voce agende a execucao de uma função a cada determinado tempo.
//Esta função é frenquentemente usada para criar ações ou tarefas de repetição, como atualizar dados em uma página web ou executar animações em intervalos regulares.

/* function exibirHora() { //Isso é um callback assíncrono exibido 2 segundos depois chamado por setInterval
  const agora = new Date();
  console.log(`Hora atual após 2 segundos: ${agora.toLocaleTimeString()}`);
}

setInterval(exibirHora, 2000); */

/* let arr = [1, 2, 3, 4, 5]; 
arr.forEach(element => {  
    console.log(element) 
}) */

// 2. AJAX é uma técnica que permite realizar solicitações assíncronas de HTTP no browser, sem precisar recarregar a pagina inteira. É frequentemente usado para buscar e enviar dados do servidor em segundo plano. Embora o AJAX  seja mais uma técninca do que uma construção de linguagem específica, é amplamente usado em combinação com JavaScript para criar aplicativos web assíncronos.

//npm instal xmlhttprequest

/*
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://randomuser.me/api/", true); // true - callback assíncrono; false - callback síncrono;

xhr.onreadystatechange = function () { //Isso é um callback assíncrono
  if (xhr.readyState === 4 && xhr.status === 200) { 
    const response = JSON.parse(xhr.responseText); //Transforma a resposta http(texto) em um objeto JSON
    const user = response.results[0]; // Pega o primeiro resultado do objeto JSON

    console.log("Nome: " + user.name.first + " " + user.name.last);
    console.log("Email: " + user.email);

  } else if (xhr.readyState === 4 && xhr.status !== 200) {
    console.error("Erro ao buscar os dados do usuário.");
  }
};

console.log("Início da requisição", new Date().toLocaleTimeString());
xhr.send();
console.log("Fim da requisição", new Date().toLocaleTimeString());
*/

// https://http.cat/

// 3. Promises (Promessas): Promises são objetos que representam o resultado de uma operação assíncrona, que pode ser resolvida (com sucesso) ou rejeitada (com erro). Elas permitem um tratamento mais estruturado de uma operação assíncronas, evitando o aninhamento excessivo de callbacks.

/*
fetch("https://randomuser.me/api/") //Faz a requisição e aguarda a "promessa" de resposta (promise)
  .then((response) => response.json()) //Transforma a resposta http(texto) em um objeto JSON
  .then((data) => {
    //Jogo o objeto JSON na variável "data" e exibe os dados
    const user = data.results[0];
    //console.log(user);
    console.log("#### Dados do usuário da API randomuser.me ####");
    console.log("Nome: " + user.name.first + " " + user.name.last);
    console.log("Email: " + user.email);
  })

  .catch((error) => {
    console.error("Erro ao buscar os dados do usuário: ", error);
  });
*/

// 4. Async/Await: A sintaxe async/await é uma forma mais recente e mais legível de lidar com código assíncrono em JavaScript. Ela permite que voce escreva código assíncrono de forma mais semelhante a código síncrono, tornando-o mais fácil de entender e manter.

async function getUserData(){
    try{
        const response = await fetch("https://randomuser.me/api/");
        const data = await response.json();
        const user = data.results[0];

        console.log("Nome: " + user.name.first + " " + user.name.last);
        console.log("Email: " + user.email);
    } catch(error){
        console.error("Erro ao buscar os dados do usuário: ", error);
    }
}

getUserData();