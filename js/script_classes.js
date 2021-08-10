const containerDiv = document.querySelector('.container-div');
const mainBookContainer = document.createElement('div');
mainBookContainer.className = 'main-book-container';
const addBtn = document.querySelector('.add-btn');

class Book {
  constructor() {
    this.bookArray = [
      { title: 'The lord of the rings', author: 'Harry Potter' },
      { title: 'Things fall apart', author: 'Chinua Achebe' },
    ];
  }

  getBooks() {
    const books = JSON.parse(localStorage.getItem('Books'));
    if (this.bookArray !== null) {
      return this.bookArray;
    }
    return books;
  }

  addBook() {
    const titleInputValue = document.getElementById('title-input').value;
    const authorInputValue = document.getElementById('author-input').value;

    const newBook = { title: titleInputValue, author: authorInputValue };

    const bookArrLength = this.bookArray.push(newBook);

    this.createBookElement(titleInputValue, authorInputValue, bookArrLength);
    localStorage.setItem('Books', JSON.stringify(this.bookArray));
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

  displayBooks() {
    this.bookArray.forEach((element, index) => {
      this.createBookElement(element.title, element.author, index);
    });
    containerDiv.appendChild(mainBookContainer);
  }
}

const myBook = new Book();
myBook.getBooks();