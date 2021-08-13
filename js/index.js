import Book from './script_classes.js';

const containerDiv = document.querySelector('.container-div');
const addBook = document.querySelector('.add-book');
const contactInfo = document.querySelector('.contact');

const addBtn = document.querySelector('.add-btn');
const nav = document.querySelector('.nav');

const footer = document.querySelector('.footer');

function renderNavBar() {
  const brandDiv = document.createElement('div');
  const ul = document.createElement('ul');
  const listLi = document.createElement('li');
  const addNewLi = document.createElement('li');
  const contactLi = document.createElement('li');

  listLi.className = 'list';
  addNewLi.className = 'add-new-book';
  contactLi.className = 'contact-us';

  brandDiv.textContent = 'Awesome Books';
  listLi.textContent = 'List';
  addNewLi.textContent = 'Add new';
  contactLi.textContent = 'Contact';

  nav.style.height = '70px';
  nav.style.backgroundColor = '#495867';
  nav.style.color = '#fff';
  nav.style.padding = '20px';

  brandDiv.style.fontSize = '22px';

  ul.style.listStyle = 'none';
  ul.style.width = '250px';
  ul.style.display = 'flex';
  ul.style.justifyContent = 'space-between';
  ul.style.alignItems = 'center';
  ul.style.margin = '0';
  ul.style.cursor = 'pointer';

  nav.appendChild(brandDiv);
  ul.appendChild(listLi);
  ul.appendChild(addNewLi);
  ul.appendChild(contactLi);
  nav.appendChild(ul);
}

function renderContactInfo() {
  contactInfo.innerHTML = `
  <h2>Contact Information</h2>
  <p>Do you any information or you want to say "Hello"? <br> You can reach out to us.</p>
  <ul>
      <li>Our email: mail@mail.com</li>
      <li>Our phone number: 0004d465</li>
      <li>Our address: Streetname 42, new york city</li>
  </ul>
  `;
}

function renderFooter() {
  const p = document.createElement('p');
  p.textContent = 'Copyright \u00A9 2021';
  footer.appendChild(p);
  footer.style.height = '70px';
  footer.style.backgroundColor = '#495867';
  footer.style.color = '#fff';
  p.style.padding = '20px';
}

const newBook = new Book();
newBook.getBooks();
renderNavBar();
renderContactInfo();
renderFooter();
newBook.displayBooks();

addBtn.addEventListener('click', () => {
  const title = document.getElementById('title-input').value;
  const author = document.getElementById('author-input').value;

  newBook.addBook(title, author);
});

const listItems = document.querySelector('.list');
const addNewItem = document.querySelector('.add-new-book');
const contactUs = document.querySelector('.contact-us');

listItems.addEventListener('click', () => {
  addBook.classList.remove('d-block');
  addBook.classList.add('d-none');

  contactInfo.classList.remove('d-block');
  contactInfo.classList.add('d-none');

  containerDiv.classList.remove('d-none');
  containerDiv.classList.add('d-block');
});

addNewItem.addEventListener('click', () => {
  addBook.classList.remove('d-none');
  addBook.classList.add('d-block');

  contactInfo.classList.remove('d-block');
  contactInfo.classList.add('d-none');

  containerDiv.classList.remove('d-block');
  containerDiv.classList.add('d-none');
});

contactUs.addEventListener('click', () => {
  addBook.classList.remove('d-block');
  addBook.classList.add('d-none');

  contactInfo.classList.remove('d-none');
  contactInfo.classList.add('d-block');

  containerDiv.classList.remove('d-block');
  containerDiv.classList.add('d-none');
});
