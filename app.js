const containerDiv = document.querySelector('.container-div');

const mainBookContainer = document.createElement('div');
mainBookContainer.className = 'main-book-container';

const bookArray = [
    {title: "The lord of the rings", author: "Harry poter"},
    {title: "Things fall apart", author: "Chinua Achebe"},
];


const createBookElement = function(title, author) {
    const bookContainer = document.createElement('div');
    bookContainer.className = 'book-container';

    const titleDesc = document.createElement('div');
    titleDesc.className = 'title';
    titleDesc.textContent = title;

    const authorDesc = document.createElement('div');
    authorDesc.className = 'author';
    authorDesc.textContent = author;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    removeBtn.textContent = 'Remove';

    const hrElement = document.createElement('hr');

    bookContainer.appendChild(titleDesc);
    bookContainer.appendChild(authorDesc);
    bookContainer.appendChild(removeBtn);
    bookContainer.appendChild(hrElement);
    mainBookContainer.appendChild(bookContainer);
    containerDiv.appendChild(mainBookContainer);
}

const addBook = function() {
  const titleInputValue = document.getElementById('title-input').value;
  const authorInputValue = document.getElementById('author-input').value;

  const newBook = {title: titleInputValue, author: authorInputValue};

  bookArray.push(newBook);

  createBookElement(titleInputValue, authorInputValue);
}

const displayBooks = function(arr) {
    bookArray.forEach((e) => {
        createBookElement(e.title, e.author);
    })
}

displayBooks(bookArray);