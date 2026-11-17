import { books } from "./books.js";

const sommaDueNumeri =(a, b) => a + b ;

console.log(sommaDueNumeri(3, 4));

const longBooks= books.filter(book => book.pages > 300)
console.log(longBooks);

const longBooksTitles = longBooks.map(book => book.title)
console.log(longBooksTitles);

longBooksTitles.forEach(title => console.log(title));