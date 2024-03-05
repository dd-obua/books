'use strict';

const bookCollection = [];

const addNewBook = (author, title) => bookCollection.push({ author, title });

const removeBook = (id) => bookCollection.filter((book) => book.id !== id);
