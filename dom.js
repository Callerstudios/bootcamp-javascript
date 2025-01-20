// Classes in javascript
// to represent a dog, you need to account for its color, age, specie.....
// class Animal{
//     walk(){
//         console.log("I am walking");
//     }
//     eat(){

//     }
// }
// let dog = new Animal()
// let
// dog.walk()

// let firstName = 12.34462
// console.log(firstName)
// console.log(firstName.toFixed(3))

class Book {
  // Attributes => Number of pages, Title, Author, content, day released
  // Methods => buyBook, readPage, borrowBook, downloadBook
  constructor(_title, _author, _numOfPages){
    this.title = _title
    this.author = _author
    this.numOfPages = _numOfPages
  }
  buyBook() {
    console.log(`Title: ${this.title}, Pages: ${this.numOfPages}, Author: ${this.author}`);
  }
  borrowBook(returnDay){
    if(returnDay > 21){
        console.log(`You are not allowed to borrow this book for more than 21 days`);
        return
    }
    console.log(`I want to borrow '${this.title}', and I will return it in ${returnDay} days`);
  }
}
let thingsFallApart = new Book("Things fall apart", "Mr Divine", 1000);
let richDadPoorDad = new Book("Rich Dad Poor Dad", "Mr Mustapha", 800);
richDadPoorDad.borrowBook(30)