'use strict';

const booksElem = document.getElementById('book-collection');
const btnAddBook = document.getElementById('btn-add-book');
const inputTitle = document.getElementById('input-title');
const inputAuthor = document.getElementById('input-author');

const bookCollection = [];

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

const removeBook = (id) => bookCollection.filter((book) => book.id !== id);

const clearListView = () => (booksElem.innerHTML = '');

const renderBook = () => {
  clearListView();

  return bookCollection.forEach((book) => {
    const bookMarkup = `
      <li>
        <span class="title">${book.title}</span>
        <span class="author">${book.author}</span>
        <button>Remove</button>
      </li>
    `;
    booksElem.insertAdjacentHTML('beforeend', bookMarkup);
  });
};

btnAddBook.addEventListener('click', addNewBook);
