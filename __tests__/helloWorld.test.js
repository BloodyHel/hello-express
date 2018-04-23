const httpMocks = require('node-mocks-http');

const helloWorld = require('../controllers/helloWorld');

it('returns a Hello World object', () => {
  const request = httpMocks.createRequest({
    method: 'GET',
    url: '/',
  });

  const response = httpMocks.createRequest();

  helloWorld(request, response);

  expect(response._getData().message).toBe('Hello World!');
});

