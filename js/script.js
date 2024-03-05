'use strict';

const booksElem = document.getElementById('book-collection');
const btnAddBook = document.getElementById('btn-add-book');
const inputTitle = document.getElementById('input-title');
const inputAuthor = document.getElementById('input-author');

let bookCollection = [];

const clearInputs = () => {
  inputTitle.value = '';
  inputAuthor.value = '';
};

const addNewBook = (e) => {
  e.preventDefault();

  const title = inputTitle.value;
  const author = inputAuthor.value;

  if (!title) return;
  if (!author) return;

  bookCollection.push({ title, author });

  clearInputs();

  renderBook();
};

const removeBook = (id) => {
  bookCollection = bookCollection.filter((book, index) => index !== id);
  return bookCollection;
};

const clearListView = () => (booksElem.innerHTML = '');

const renderBook = () => {
  clearListView();

  return bookCollection.forEach((book, index) => {
    const bookMarkup = `
      <li data-id=${index}>
        <span class="title">${book.title}</span>
        <span class="author">${book.author}</span>
        <button id='remove-book'>Remove</button>
      </li>
    `;
    booksElem.insertAdjacentHTML('beforeend', bookMarkup);
  });
};

btnAddBook.addEventListener('click', addNewBook);

const removeBookElem = document.getElementById('remove-book');

booksElem.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  const { id } = li.dataset;
  removeBook(+id);
  renderBook();
});
