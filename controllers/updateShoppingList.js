const fs = require('fs');
const path = require('path');

const updateShoppingList = (req, res) => {
  const filename = req.params.filename
  const contents = JSON.stringify(req.body)
  console.log(filename, contents);
  fs.writeFile(path.join(__dirname, 'shoppingLists', filename), contents, (err) => {
    if (err) throw err;
    res.send({ filename: filename })
  });
};
module.exports = updateShoppingList;
