const containerDiv = document.querySelector('.container-div');
const mainBookContainer = document.createElement('div');
mainBookContainer.className = 'main-book-container';
const addBtn = document.querySelector('.add-btn');

class Book {
  constructor() {
    this.bookArray = [];
  }

  getBooks() {
    this.bookArray = JSON.parse(localStorage.getItem('Books'));
    if (this.bookArray === null) {
      this.bookArray = [];
    }
  }

  displayBooks() {
    this.bookArray.forEach((element, index) => {
      this.createBookElement(element.title, element.author, index);
    });
    containerDiv.appendChild(mainBookContainer);
  }

  removeBook(index) {
    const books = this.bookArray.filter((book, i) => i !== index);
    localStorage.setItem('Books', JSON.stringify(books));
    const parent = document.getElementById(index);
    parent.parentNode.removeChild(parent);
  }

  createBookElement(title, author, index) {
    const bookContainer = document.createElement('div');
    bookContainer.className = 'book-container';
    bookContainer.id = index;

    const titleDesc = document.createElement('div');
    titleDesc.className = 'title mb-2';
    titleDesc.textContent = title;

    const authorDesc = document.createElement('div');
    authorDesc.className = 'author mb-2';
    authorDesc.textContent = author;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', this.removeBook.bind(null, index));
    removeBtn.className = 'remove-btn btn btn-secondary';
    const removeBtnId = `remove-btn${index}`;
    removeBtn.id = removeBtnId;

    const hrElement = document.createElement('hr');
    hrElement.className = 'w-50';

    bookContainer.appendChild(titleDesc);
    bookContainer.appendChild(authorDesc);
    bookContainer.appendChild(removeBtn);
    bookContainer.appendChild(hrElement);
    mainBookContainer.appendChild(bookContainer);
  }

  addBook(title, author) {
    const newBook = { title, author };
    const bookArrLength = this.bookArray.push(newBook);

    this.createBookElement(title, author, bookArrLength);
    localStorage.setItem('Books', JSON.stringify(this.bookArray));
  }
}

const newBook = new Book();
newBook.getBooks();
newBook.displayBooks();

addBtn.addEventListener('click', () => {
  const title = document.getElementById('title-input').value;
  const author = document.getElementById('author-input').value;

  newBook.addBook(title, author);
});