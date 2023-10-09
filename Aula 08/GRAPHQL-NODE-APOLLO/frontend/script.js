async function retornaUsuario() {
  try {
    const response = await axios.post("http://localhost:4000/", {
      query: `
          query {
            obterUsuario(id: "1") {
              id
              nome
              email
              cpf
            }
          }
        `,
    });

    const usuario = response.data.data.obterUsuario;

    const dadosUsuarioDiv = document.getElementById("DadosUsuario");

    //Inclui os dados no HTML dinamicamente
    dadosUsuarioDiv.innerHTML = `
  <p>ID: ${usuario.id}</p>
  <p>Nome: ${usuario.nome}</p>
  <p>Email: ${usuario.email}</p>
  <p>CPF: ${usuario.cpf}</p>
  `;
  } catch (error) {
    console.log(error);
  }
}

retornaUsuario();
