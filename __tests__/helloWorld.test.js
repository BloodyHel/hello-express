/* eslint-env jest */

const httpMocks = require('node-mocks-http');
const helloWorld = require('../controllers/helloWorld');

it('returns a Hello World object', () => {
  const request = httpMocks.createRequest({
    method: 'GET',
    url: '/',
  });

  const response = httpMocks.createResponse();

  helloWorld(request, response);

  expect(response._getData().message).toBe('Hello World');
});

