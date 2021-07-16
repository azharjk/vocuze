import books from './books.js';

export default (request, h) => {
  const response = h.response({
    status: 'success',
    data: {
      books: books.map((b) => ({ id: b.id, name: b.name, publisher: b.publisher })),
    },
  });
  response.code(200);
  return response;
};
