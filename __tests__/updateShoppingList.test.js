/* eslint-env jest */

const fs = require('fs');
const path = require('path');
const httpMocks = require('node-mocks-http');
const updateShoppingList = require('../controllers/updateShoppingList');

it('updates an existing shopping list', (done) => {
  expect.assertions(1);

  const filename = Date.now().toString();
  console.log(typeof filename);
  const filePath = path.join(__dirname, '../controllers/shoppingLists', filename)
  const body = {
    items: ['carrots', 'crunchies', 'cornflakes']
  };

  fs.writeFile(filePath, JSON.stringify(body), (err) => {
    const request = httpMocks.createRequest({
      method: 'PUT',
      url: '/shopping-lists/:filename',
      params: {
        filename: filename 
              },
      body: body
    });
  
  const response = httpMocks.createResponse({
    eventEmitter: require('events').EventEmitter
  });
  
  updateShoppingList(request, response);

  response.on('end', () => {
    console.log("print");
    fs.readFile(filePath, 'utf-8', (error, data) => {
      if(error) {
        console.log(error);
      }
      console.log(filePath, data, 'Boooo')
      expect(data).toBe(JSON.stringify(request.body));
      done();    
    });
  });
  }); 
});

