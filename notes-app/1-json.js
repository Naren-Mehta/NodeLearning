const fs= require('fs');

// const book= {
//     title:'Ego is the Enemy',
//     author:'Ryan Holiday'
// }

// const bookJson= JSON.stringify(book);

// fs.writeFileSync('1-json.json',bookJson);


const bookFromFile = fs.readFileSync('1-json.json');
const bookJSON= bookFromFile.toString();
const book = JSON.parse(bookJSON);
console.log(book.author);
