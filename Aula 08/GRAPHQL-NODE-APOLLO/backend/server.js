// ### O que é GraphQL?

// GraphQL é uma linguagem de programação para interagir com o sistema de dados de uma API REST.

// ### Configurando o ambiente

// Primeiro, certifique-se de ter o Node.js instalado em seu sistema. Em seguida, siga os passos abaixo:

// 1. Crie uma pasta para o projeto e navegue até ela pelo terminal.

// 2. Inicialiaze um projeto Node.js executando o comando:

//    npm init -y

// 3. Instale as dependências:

//    npm install apollo-server graphql
//    npm install - baixa todas as dependências do projeto

const { ApolloServer, gql } = require("apollo-server"); // Importa o ApolloServer e o gql

// Define o schema GraphQL (Como você deseja que sejam manipulados os dados)

//Consulta chamada "obterUsuario" que aceita um argumento obrigatório (! exclamação) "id" do tipo ID (tipo especial do GraphQL). Essa consulta permite buscar um usuário com base no campo id.

const typeDefs = gql`
  type Usuario {
    id: ID
    nome: String
    email: String
    cpf: String
  }

  type Query { 
    obterUsuario(id: ID!): Usuario
    obterUsuarioNome(Nome: String!): Usuario
  }

  type Mutation {
    criarUsuario(nome: String!, email: String!, cpf: String!): Usuario
  }
`;

// Query = consultar; todas as funções que pegam dados do back end  
//Mutation = pega os dados enviados pelo back end e escrevem no banco de dados; Coloca todas as funções que escrevem dados no back end;

// Mock de dados de usuário (substitua por uma fonte de dados real)
const usuarios = [
  { id: "1", nome: "João", email: "joao@email.com", cpf: "123.456.789-00" },
  { id: "2", nome: "Maria", email: "maria@email.com", cpf: "987.654.321-00" },
];

// Resolvers (resoluções) para: Query(consultas) e Mutation(mutações) definidas no schema. Similar as functions passadas na Rest API

const resolvers = {
  //Similar ao Get da Rest API
  Query: {
    obterUsuario: (parent, args) => {
      // Busca por um usuário com base no ID fornecido
      let usuarioEncontrado = usuarios.find(
        (Usuario) => Usuario.id === args.id
      );

      // Imprime o resultado no console
      console.log(usuarioEncontrado);

      // Retorna o usuário encontrado para o "frontend ou backend"
      return usuarioEncontrado;
    },
    obterUsuarioNome: (parent, args) => {
      // Busca por um usuário com base no ID fornecido
      let usuarioEncontrado = usuarios.find(
        (Usuario) => Usuario.nome.toLowerCase() === args.nome.toLowerCase().trim()); //Busca pelo nome do usuário; transforma em minusculos; remove os espaços em branco

      // Imprime o resultado no console
      console.log(usuarioEncontrado);

      // Retorna o usuário encontrado para o "frontend ou backend"
      return usuarioEncontrado;
    }
  },

  

  //Similar ao Post/Put/Patch/Delete da Rest API
  Mutation: {
    criarUsuario: (parent, args) => {
      // Crie um novo usuário com base nos argumentos fornecidos
      const novoUsuario = {
        id: String(usuarios.length + 1), // Gere um novo ID simplesmente pegando o tamanho do array e somando 1.
        nome: args.nome,
        email: args.email,
        cpf: args.cpf,
      };

      // Adicione o novo usuário à lista de usuários
      usuarios.push(novoUsuario);

      // Imprime a nova lista de usuários no console
      console.log(usuarios);

      // Retorna o novo usuário criado
      return novoUsuario;
    },
  },
};

// Crie uma instância do Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Inicie o servidor rodando no localhost:4000 (padrão do Node.js)
server.listen(4000).then(({ url }) => {
  console.log(`Servidor GraphQL rodando em ${url}`);
});

/* Exemplos de Como consultar ou alterar os dados no frontend
# Consultar os dados
// Busca pelo usuário com id = 1 e retorna os campos id, nome, email e cpf
query Query {
  obterUsuario(id: 1) {
    id, nome, email ,cpf 
  }
}

 npm start  - inicia o servidor

 

# Criar um novo usuário
// Cria um novo usuário com base nos argumentos e retorna os campos id, nome, email e cpf
mutation {
  criarUsuario(nome: "Leo3", email: "leo@gmail.com", cpf: "123456789-00") {
    id,nome, email, cpf
  }
}
*/
