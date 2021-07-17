import books from './books.js';

export default (request, h) => {
  const { bookId } = request.params;

  const index = books.findIndex((b) => b.id === bookId);

  if (index >= 0) {
    books.splice(index, 1);
    const response = h.response({
      status: 'success',
      message: 'Buku berhasil dihapus',
    });
    response.code(200);
    return response;
  }

  const response = h.response({
    status: 'fail',
    message: 'Buku gagal dihapus. Id tidak ditemukan',
  });
  response.code(404);
  return response;
};
