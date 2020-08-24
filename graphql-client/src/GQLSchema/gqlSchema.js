import { gql } from "@apollo/client";

const createBookMutation = gql`
  mutation createBook($data: addBook) {
    createBook(bookDetail: $data) {
      id
      title
      author
    }
  }
`;

const getAllBooks = gql`
  query books {
    books {
      id
      title
      author
    }
  }
`;

const getSingleBook = gql`
  query getBook($id: Int!) {
    book(id: $id) {
      id
      title
      author
    }
  }
`;

export { createBookMutation, getAllBooks, getSingleBook };
