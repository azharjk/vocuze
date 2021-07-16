import CreateBookHandler from './handler/create-book-handler.js';
import GetBookHandler from './handler/get-book-handler.js';
import GetBooksHandler from './handler/get-books-handler.js';

export default [
  {
    method: 'POST',
    path: '/books',
    handler: CreateBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: GetBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{bookId}',
    handler: GetBookHandler,
  },
];
