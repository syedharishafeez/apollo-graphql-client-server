const books = [
  {
    id: 1,
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling",
  },
  {
    id: 2,
    title: "Jurassic Park",
    author: "Michael Crichton",
  },
];

const resolvers = {
  Query: {
    books: () => {
      return books;
    },
    book: (_, { id }) => {
      console.log("id = ", typeof id);
      let book = books.find((item) => parseInt(item.id) === parseInt(id));
      console.log("book = ", book);
      return book;
    },
  },
  Mutation: {
    createBook: (_, { bookDetail }) => {
      // books.push;
      books.push({
        id: books.length + 1,
        title: bookDetail.title,
        author: bookDetail.author,
      });
      console.log("books = ", books);
      console.log("books[books.length - 1] = ", books[books.length - 1]);

      return books[books.length - 1];
    },
  },
};

module.exports = resolvers;
