const fs = require('fs');
const data = fs.readFileSync('db.json');
const books = JSON.parse(data);

console.log(books);