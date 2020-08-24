If you are using apollo server playground  


mutation createBook{  
  createBook(bookDetail:{title:"third", author:"three"}){  
    id  
    title  
    author  
  }  
}  
  
query getBooks{  
  books{  
    id  
    title  
    author  
  }  
}  
  
query getBook{  
  book(id:1){  
    id  
    title  
    author  
  }  
}  

