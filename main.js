 class Book {
     constructor (){
         bookArray = [
            { title: 'The lord of the rings', author: 'Harry Potter' },
            { title: 'Things fall apart', author: 'Chinua Achebe' },
         ]
    }
   addBook() {
    const titleInputValue = document.getElementById('title-input').value;
    const authorInputValue = document.getElementById('author-input').value;
  
    const newBook = { title: titleInputValue, author: authorInputValue };
  
    const bookArrLength = bookArray.push(newBook);
  
    createBookElement(titleInputValue, authorInputValue, bookArrLength);
    localStorage.setItem('Books', JSON.stringify(bookArray)); 
   } 
}
