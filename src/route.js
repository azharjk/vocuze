import { CreateBookHandler } from './handler.js';

export const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: CreateBookHandler
  }
];
