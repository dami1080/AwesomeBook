import Book from './script_classes.js';

const addBtn = document.querySelector('.add-btn');
const nav = document.querySelector('.nav');

function renderNavBar() {
  const brandDiv = document.createElement('div');
  const ul = document.createElement('ul');
  const listLi = document.createElement('li');
  const addNewLi = document.createElement('li');
  const contactLi = document.createElement('li');

  brandDiv.textContent = 'Awesome Books';
  listLi.textContent = 'List';
  addNewLi.textContent = 'Add new';
  contactLi.textContent = 'Contact';

  nav.style.height = '10vh';
  nav.style.backgroundColor = '#333';
  nav.style.color = '#fff';
  nav.style.padding = '20px';

  ul.style.listStyle = 'none';
  ul.style.width = '200px';
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

const newBook = new Book();
newBook.getBooks();
renderNavBar();
newBook.displayBooks();

addBtn.addEventListener('click', () => {
  const title = document.getElementById('title-input').value;
  const author = document.getElementById('author-input').value;

  newBook.addBook(title, author);
});

const contactInfo = document.querySelector('.contact');
contactInfo.innerHTML = 
`
<h2>Contact Information</h2>
<p>Do you any information or you want to say "Hello"? <br> You can reach out to us.</p>
<ul>
<li>Our email: mail@mail.com</li>
<li>Our phone number: 0004d465</li>
<li>Our address: Streetname 42, new york city</li>
</ul>
`
const footer = document.querySelector('.footer');
const p = document.createElement('p');
p.textContent = 'Copyright';
footer.appendChild(p);
footer.style.height = '10vh';
footer.style.backgroundColor = "#333";
footer.style.color = "#fff";
p.style.padding = "20px";