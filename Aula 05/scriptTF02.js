// Código Inicial

function calcularOperacoes(numero1, numero2, operacao) {
    let resultado;

    resultado = operacaoSomarMultiplicar(operacao, resultado, numero1, numero2);
    return resultado;
  }

function operacaoSomarMultiplicar(operacao, resultado, numero1, numero2) {
    if (operacao === 'soma') {
        resultado = numero1 + numero2;
    } else if (operacao === 'multiplicacao') {
        resultado = numero1 * numero2;
    }
    return resultado;
}

// Utilizando clean code
function calcularOperacoes(numero1, numero2, operacao) {
    
}

    function executarOperacao(numero1, numero2, operacao) {
        return newOperation(operacao, numero1, numero2);

    } 

function newOperation(operacao, numero1, numero2) {
    switch (operacao) {
        case 'soma':
            return realizarSoma(numero1, numero2);
        case 'multiplicacao':
            return realizarMultiplicacao(numero1, numero2);
    }
}

