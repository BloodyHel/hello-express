const express = require('express');
const bodyParser = require('body-parser');
const helloWorld = require('./controllers/helloWorld');
const createShoppingList = require('./controllers/createShoppingList')

app.post('/shopping-lists', createShoppingList)

const app = express();
app.use(bodyParser.json());

app.get('/', helloWorld);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
