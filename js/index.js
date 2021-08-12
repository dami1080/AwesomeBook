const nav = document.querySelector('.nav');
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