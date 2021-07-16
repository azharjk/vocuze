import Hapi from '@hapi/hapi';

const PORT = 5000

const init = async () => {
  const server = Hapi.server({
    port: PORT,
    host: 'localhost'
  });

  await server.start();
  console.log(`Application running on port ${PORT}`);
}

init();
