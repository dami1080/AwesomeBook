const containerDiv = document.querySelector('.container-div');
const mainBookContainer = document.createElement('div');
mainBookContainer.className = 'main-book-container border border-secondary w-50 mx-auto';

export default class Book {
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
    bookContainer.className = 'book-container d-flex justify-content-between p-2';
    bookContainer.id = index;

    const bookDesc = document.createElement('div');
    bookDesc.className = 'title mb-2';
    bookDesc.textContent = `"${title}" by ${author}`;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.addEventListener('click', this.removeBook.bind(this, index));
    removeBtn.className = 'remove-btn btn';

    const removeBtnId = `remove-btn${index}`;
    removeBtn.id = removeBtnId;

    bookContainer.appendChild(bookDesc);
    bookContainer.appendChild(removeBtn);
    mainBookContainer.appendChild(bookContainer);
  }

  addBook(title, author) {
    const createNewBook = { title, author };
    const bookArrLength = this.bookArray.push(createNewBook);

    this.createBookElement(title, author, bookArrLength);
    localStorage.setItem('Books', JSON.stringify(this.bookArray));
  }
}
