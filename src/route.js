import { CreateBookHandler, GetBooksHandler } from './handler.js';

export const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: CreateBookHandler
  },
  {
    method: 'GET',
    path: '/books',
    handler: GetBooksHandler
  }
];
