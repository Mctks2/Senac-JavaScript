
const { ApolloServer, gql } = require("apollo-server"); // Importa o ApolloServer e o gql

const typeDefs = gql`
    type Produto {
        id: ID
        nome: String
        preco: Float
    }
        
    type Query {
        obterProduto(id: ID!): Produto
    }

    type Mutation {
        criarProduto(nome: String!, preco: Float!): Produto
    }
    `;

    const produtos = [
        { id: "1", nome: "Notebook", preco: 5.000 },
        { id: "2", nome: "Mouse", preco: 100 },
    ];

    const resolvers = {
        Query : {
            obterProduto: (parent, args) => {
                let produtoEncontrado = produtos.find(
                    (Produto) => Produto.id === args.id
                );

                console.log(produtoEncontrado);

                return produtoEncontrado;
            }
        },

        Mutation : {
            criarProduto: (parent, args) => {
                
                const novoProduto ={
                    id: String(produtos.length + 1),
                    nome: args.nome,
                    Preco: args.preco,
                };

                produtos.push(novoProduto);

                console.log(produtos);

                return novoProduto;
            }
        }
    };

    const server = new ApolloServer({ typeDefs, resolvers });

    server.listen(4000).then(({ url }) => {
        console.log(`Servidor GraphQL rodando em ${url}`);
    });



// Criar um produto

//{ id: "3", nome: "Teclado", preco: 150 },