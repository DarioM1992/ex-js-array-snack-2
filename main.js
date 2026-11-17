import { books } from "./books.js";


// SNACK-1
const sommaDueNumeri =(a, b) => a + b ;
console.log(sommaDueNumeri(3, 4));

const longBooks= books.filter(book => book.pages > 300);
console.log(longBooks);

const longBooksTitles = longBooks.map(book => book.title);
console.log(longBooksTitles);

longBooksTitles.forEach(title => console.log(title));


// SNACK-2


const availableBooks = books.filter(book => book.available === true);
console.log(availableBooks);

const discountedBooks = availableBooks.map(book => ({...book , price: Number((parseFloat(book.price)* 0.8).toFixed(2))}));
console.log(discountedBooks);

const fullPricedBook = books.find( book => book.price === Number.isInteger);
console.log(fullPricedBook);


// SNACK-3

const authors = books.map(book => book.author);
console.log(authors);

const areAuthorsAdults = authors.every(author => author.age >= 18);
console.log(areAuthorsAdults);

authors.sort ((a ,b ) => (b.age  - a.age));
console.log(authors);