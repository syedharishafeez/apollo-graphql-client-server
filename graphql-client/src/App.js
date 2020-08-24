import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import gqlConfig from "./GQLConfig/gqlConfig";
import { useMutation, useQuery } from "@apollo/client";
import {
  getAllBooks,
  getSingleBook,
  createBookMutation,
} from "./GQLSchema/gqlSchema";

function App() {
  const getAllBooksDetail = useQuery(getAllBooks);
  const getSingleBookDetail = useQuery(getSingleBook, {
    variables: { id: 2 },
  });
  const [bookDetails] = useMutation(createBookMutation);
  const titleRef = useRef("my-title");
  const authorRef = useRef("unknown");
  const iRef = useRef(1);
  console.log(titleRef.current);
  let i = 1;
  if (iRef.current === 1) {
    bookDetails({
      variables: {
        data: { title: titleRef.current, author: authorRef.current },
      },
    })
      .then((data) => {
        console.log("data in mutation = ", data);
      })
      .catch((error) => {
        console.log("error in mutation = ", error);
      });
  }
  iRef.current = 2;

  if (iRef.current === 2) {
    console.log(
      "loading = ",
      getAllBooksDetail.loading,
      " data = ",
      getAllBooksDetail.data,
      " error = ",
      getAllBooksDetail.error
    );
    console.log(
      "loading2 = ",
      getSingleBookDetail.loading,
      " data2 = ",
      getSingleBookDetail.data,
      " error2 = ",
      getSingleBookDetail.error
    );
  }

  iRef.current = 3;

  return <div>Hello World</div>;
}

export default App;
