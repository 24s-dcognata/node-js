const fs = require('fs');

const start = Date.now();

console.log('== start ==');

fs.readFileSync('./test-file.txt', 'utf-8');
console.log('File readed');

fs.readFile('./test-file.txt', 'utf-8', (err, value) => {
  console.log('File 2 readed');
});
fs.readFile('./test-file.txt', 'utf-8', (err, value) => {
  console.log('File 3 readed');
});

console.log('== end :', Date.now() - start, '==');
