import books from './books.js';

export default (request, h) => {
  const {
    name,
    reading,
    finished,
  } = request.query;

  let filteredBooks = books;

  if (name) {
    filteredBooks = books.filter((b) => b.name.toLowerCase().includes(name.toLowerCase()));
  }

  if (reading === '1') {
    filteredBooks = books.filter((b) => b.reading);
  } else if (reading === '0') {
    filteredBooks = books.filter((b) => !b.reading);
  }

  if (finished === '1') {
    filteredBooks = books.filter((b) => b.finished);
  } else if (finished === '0') {
    filteredBooks = books.filter((b) => !b.finished);
  }

  const response = h.response({
    status: 'success',
    data: {
      books: filteredBooks.map((b) => ({ id: b.id, name: b.name, publisher: b.publisher })),
    },
  });
  response.code(200);
  return response;
};
