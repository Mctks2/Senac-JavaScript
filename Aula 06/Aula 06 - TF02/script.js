async function fazerRequisicaoAPI() {
    try {
      const resposta = await fetch('https://randomuser.me/api/');
      
      if (!resposta.ok) {
        throw new Error(`Erro na requisição: ${resposta.status}`);
      }
      const dados = await resposta.json();

      console.log('Resposta da API:', dados);
    } catch (erro) {
      console.error('Ocorreu um erro:', erro);
    }
  }
  
  fazerRequisicaoAPI();
  