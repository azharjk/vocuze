import Hapi from '@hapi/hapi';
import routes from './route.js';

const PORT = 5000;

const init = async () => {
  const server = Hapi.server({
    port: PORT,
    host: 'localhost',
    routes: {
      cors: true,
    },
  });

  server.route(routes);

  await server.start();
};

init();
