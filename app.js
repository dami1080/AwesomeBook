const bookArray = [
    {title: "the lord of the rings", author: "Harry poter"},
    {title: "go", author: "dare"},
];

const addBook = function() {
  const titleInputValue = document.getElementById('title').value;
  const authorInputValue = document.getElementById('author').value;

  const newBook = {title: titleInputValue, author: authorInputValue};

  bookArray.push(newBook);
}

