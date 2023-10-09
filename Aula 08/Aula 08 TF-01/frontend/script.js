async function retornaProduto() {
  try {
    const response = await axios.post("http://localhost:4000/", {
      query: `
          query {
            obterProduto(id: "1") {
              id
              nome
              preco
            }
          }
        `,
    });

    const produto = response.data.data.obterProduto;

    const dadosProdutoDiv = document.getElementById("DadosProduto");

    //Inclui os dados no HTML dinamicamente
    dadosProdutoDiv.innerHTML = `
  <p>ID: ${produto.id}</p>
  <p>Nome: ${produto.nome}</p>
  <p>Preco: ${produto.preco}</p>
  `;
  } catch (error) {
    console.log(error);
  }
}

retornaProduto();
