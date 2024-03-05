'use strict';

const bookCollection = [{ title: 'Power', author: 'Denis' }];

const addNewBook = (title, author) => bookCollection.push({ author, title });

const removeBook = (id) => bookCollection.filter((book) => book.id !== id);

const booksElem = document.getElementById('book-collection');

bookCollection.forEach((book) => {
  const bookMarkup = `
    <li>
      <span class="title">${book.title}</span>
      <span class="author">${book.author}</span>
      <button>Remove</button>
    </li>
  `;

  booksElem.insertAdjacentHTML('beforeend', bookMarkup);
});
