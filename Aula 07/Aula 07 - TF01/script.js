const axios = require('axios');

// URL da API JSONPlaceholder que fornece dados de teste simulados.
const apiUrl = 'https://jsonplaceholder.typicode.com/users';

// Função para fazer a solicitação à API e imprimir os dados no console.
async function fetchUsers() {
  try {
    // Faz a solicitação GET à API JSONPlaceholder.
    const response = await axios.get(apiUrl);

    // Verifica se a solicitação foi bem-sucedida (status 200).
    if (response.status === 200) {
      // Imprime os dados obtidos no console.
      console.log('Dados de usuários obtidos com sucesso:');
      console.log(response.data[0]);
    } else {
      console.error('A solicitação não retornou o status HTTP esperado.');
    }
  } catch (error) {
    console.error('Ocorreu um erro ao fazer a solicitação:', error);
  }
}

// Chama a função para buscar os dados de usuários.
fetchUsers();
