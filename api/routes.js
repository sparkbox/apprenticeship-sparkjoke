import Hapi from '@hapi/hapi';

import getJokes from './jokes';

import getUpperBound from '../src/Utilities/upperBound.js';

const init = async () => {
  const server = Hapi.server({
    port: 8081,
    host: 'localhost',
  });

  server.route({
    method: 'GET',
    path: '/welcome',
    handler: () => 'Hello World!',
  });

  server.route({
    method: 'GET',
    path: '/jokes/{jokeIdx}',
    options: {
      cors: {
        origin: ['*'], // array of allowed origins
      },
    },
    handler: (request) => getJokes(request.params.jokeIdx),
  });

  server.route({
    method: 'GET',
    path: '/jokes/{any*}',
    handler: (request, h) => h.response({
      statusCode: 400,
      error: 'Bad Request',
      message: 'No joke index provided',
    }).code(400),
  });

  server.route({
    method: 'GET',
    path: '/jokesUpperBound',
    options: {
      cors: {
        origin: ['*'], // array of allowed origins
      },
    },
    handler: () => getUpperBound(),
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
