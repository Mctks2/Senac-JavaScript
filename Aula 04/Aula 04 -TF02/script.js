
let listaDeTarefas= { // cria um objeto
    tarefa1:{
        descricao: "Limpar o quarto",
        status: "Pendente"
    },
    tarefa2:{
        descricao: "Estudar JavaScript",
        status: "Em andamento"
    },
    tarefa3:{
        descricao: "Ir a academia",
        status: "Concluída"
    }
};

// Percorrer o objeto e imprimir as informações de cada tarefa no console
for(let chave in listaDeTarefas){
    let tarefa = listaDeTarefas[chave]; // chave = tarefa1, tarefa2, tarefa3
    console.log("Descrição: "+tarefa.descricao)
    console.log("Status: "+tarefa.status)
    console.log("----------------------");
}
