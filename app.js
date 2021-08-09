const bookArray = [
    {title: "the lord of the rings", author: "Harry poter"},
    {title: "go", author: "dare"},
];

const createBookElement = function(title, author) {
    const containerDiv = document.querySelector('.container-div');
    const mainBookContainer = document.createElement('div');
    mainBookContainer.className = 'main-book-container';

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

    mainBookContainer.appendChild(titleDesc);
    mainBookContainer.appendChild(authorDesc);
    mainBookContainer.appendChild(removeBtn);
    mainBookContainer.appendChild(hrElement);
    containerDiv.appendChild(mainBookContainer);
}

const addBook = function() {
  const titleInputValue = document.getElementById('title-input').value;
  const authorInputValue = document.getElementById('author-input').value;

  const newBook = {title: titleInputValue, author: authorInputValue};

  bookArray.push(newBook);
}

