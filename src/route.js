import { CreateBookHandler, GetBooksHandler, GetBookHandler } from './handler.js';

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
