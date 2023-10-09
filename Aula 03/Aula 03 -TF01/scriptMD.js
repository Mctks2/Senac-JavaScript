
// Função para calcular a média de um conjunto de números
function calcularMedia(){
    let soma = 0;
    let quantidade = arguments.length;

    for (let i = 0; i < quantidade; i++){
        soma+= arguments[i]
    }

    return soma /quantidade;
}

module.exports = calcularMedia;
