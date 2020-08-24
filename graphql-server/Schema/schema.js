const { gql } = require("apollo-server");

const typeDefs = gql`
  type Book {
    id: Int
    title: String!
    author: String!
  }
  type Query {
    books: [Book!]!
    book(id: Int!): Book!
  }

  input addBook {
    title: String!
    author: String!
  }

  type Mutation {
    createBook(bookDetail: addBook): Book
  }
`;

module.exports = typeDefs;
