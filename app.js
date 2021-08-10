const containerDiv = document.querySelector('.container-div');

const mainBookContainer = document.createElement('div');
mainBookContainer.className = 'main-book-container';

const bookArray = JSON.parse(localStorage.getItem('book')) || [
    {title: "The lord of the rings", author: "Harry poter"},
    {title: "Things fall apart", author: "Chinua Achebe"},
];


const createBookElement = function(title, author, index) {
    const bookContainer = document.createElement('div');
    bookContainer.className = 'book-container';
    bookContainer.id = index;

    const titleDesc = document.createElement('div');
    titleDesc.className = 'title';
    titleDesc.textContent = title;

    const authorDesc = document.createElement('div');
    authorDesc.className = 'author';
    authorDesc.textContent = author;

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove-btn';
    const removeBtnId = `remove-btn${index}`;
    removeBtn.id = removeBtnId;
    removeBtn.textContent = 'Remove';

    const hrElement = document.createElement('hr');

    bookContainer.appendChild(titleDesc);
    bookContainer.appendChild(authorDesc);
    bookContainer.appendChild(removeBtn);
    bookContainer.appendChild(hrElement);
    mainBookContainer.appendChild(bookContainer);
    
}

const addBook = function() {
  const titleInputValue = document.getElementById('title-input').value;
  const authorInputValue = document.getElementById('author-input').value;

  const newBook = {title: titleInputValue, author: authorInputValue};

  const bookArrLength = bookArray.push(newBook);

  createBookElement(titleInputValue, authorInputValue, bookArrLength);
  localStorage.setItem('book', JSON.stringify(bookArray));
}

const addBtn = document.querySelector('.add-btn');
addBtn.addEventListener('click', addBook);

const displayBooks = function(arr) {
    bookArray.forEach((element, index) => {
        createBookElement(element.title, element.author, index);
    })
    containerDiv.appendChild(mainBookContainer);
}

displayBooks(bookArray);

const removeBook = function(index) {
  const books = bookArray.filter((book, i) => i !== index);
  
  const parent = document.getElementById('index');
  parent.remove();
}
