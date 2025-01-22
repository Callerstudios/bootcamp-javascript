import PromptSync from "prompt-sync";
const prompt = PromptSync();
function talker(param) {
  console.log(param);
}

// let firstName = "Divine"
// let lastName = "John"

// console.log("My firstname is " + firstName + ", and my lastname is " + lastName)
// console.log("My firstname is", firstName , ", and my lastname is" , lastName)
// console.log(`My firstname is ${firstName}, and my lastname is ${lastName}`)
// console.log("My first name is ");
// console.log(firstName);
// console.log("and my last name is");
// console.log(lastName);

// let firstName = prompt("Enter your first name>>>")
// let lastName = prompt("Enter your last name>>>")
// console.log(`First Name: ${firstName}, Last Name: ${lastName}`);

// Operators
// Types of Operators => Arithemetic Operators, Logical Operators, Comparison Operators
// Arithemetic Operators => +, -, *, /, **(Exponent), %(Modulus)

// let num1 = 15
// let num2 = 3
// let answer = num1 % num2
// console.log(`Answer is ${answer}`);
//num1 ** num2 => num1 raised to power num2
//  5/3 => 1 r 2
// 10/4 => 2 r 2
// 20/3 => 6 r 2
// 20/5 => 4 r 0

// Comparison Operators
// Operators used to compare variables(eg=> >, <, ==(Not strict), ===(Strict), !=, !==, >=, <=)
// let var1 = 20
// let var2 = 10
// let var3 = 30

// console.log(var1 < var3); // is 20 less than 30? => true
// console.log(var2 < var3); // is 10 less than 30? => true
// console.log(var3 >= var3-10);//false, true, Or operator=> is true when at leat one of the variables is true

// let name1 = "Abdullateef"
// let name2 = "AbdullateeF"
// let num3 = 50 // Data type=> Number
// let num4 = "50" //Data type=> String
// let num5 = '50' //Data type=> String

// console.log(num4 === num5); // is Divine equal to Naheemah

// Logical Operators => &&, ||, !

// And operator is only true when all variables are true
// Or operator is only false when all variables are false
// Not Operator negates the current boolean
// let num1 = 5
// let num2 = 10
// console.log(!(num1 == 5));

// Control Structures
// Used to control the flow of your code(if else, switch, loop)

// let name = "divine"

// if(name == "Divine"){
//     console.log("Name is Divine");
// }else{
//     console.log("Name is not Divine");
// }

// String attributes
// 1> Length - returns the length of the string
// 2> charAt(c) - returns the character at specified index (c)
// 3> charCodeAt(c) - returns ASCII code for character at index (c)
// 4> toUpperCase() - returns the variable in upper case
// 4> toLowerCase() - returns the variable in lower case
// 5> includes(s) - returns if the string contains s

// let var1 = "bB"
// console.log(var1.charCodeAt(1));

// let name = "Asmau"
// ASCII American Standard Code for Information Interchange
// if(name.charAt(0) === "A" || name.charAt(0) === "a"){
// let name = prompt("Enter your name, (Name must start with 'A')>>>")
// if(name.toUpperCase().charAt(0) === "A"){
//     console.log("Access Granted");
// }else{
//     console.log("Access Denied");
// }

// let name = "aBdUlLaTeEf"
// console.log(name.toLowerCase());

// let name = "divine";
// if (
//   name.toUpperCase().charAt(0) === "B" ||
//   name.toUpperCase().charAt(0) === "C" ||
//   name.toUpperCase().charAt(0) === "D" ||
//   name.toUpperCase().charAt(0) === "E" ||
//   name.toUpperCase().charAt(0) === "F" ||
//   name.toUpperCase().charAt(0) === "G" ||
//   name.toUpperCase().charAt(0) === "H" ||
//   name.toUpperCase().charAt(0) === "I"
// ) {
//   console.log("Access Granted");
// } else {
//   console.log("Access Denied");
// }
// name = "Divine";
// let name = "A";
// if("A"){
//     console.log("Name");
// }
// else{
//     console.log("No name", name);
// }

// b charCode is 98, j charCode is 106
// let name = "Divine"
// if(name.toLowerCase().charCodeAt(0) >= 98 && name.toLowerCase().charCodeAt(0) <= 110){
//     console.log('Access Granted');
// }else{
//     console.log('Access Denied');
// }

// INCLUDES
// let s = "hello there, this is my third javascript class hello"

// console.log(s.includes("there hello"));

// List Attributes
// characters -> abcdefgh
// let names = ["Divine", "Abdullateef", "Mustapha", "Sodiq", "Asmau"]
// let score = prompt("Enter your score>>>");
// if (score >= 70 && score <= 100) {
//   console.log("A");
// } else if (score >= 60 && score <= 69) {
//   console.log("B");
// } else if (score >= 50 && score <= 59) {
//   console.log("C");
// } else if (score >= 45 && score <= 49) {
//   console.log("D");
// } else if (score >= 40 && score <= 44) {
//   console.log("E");
// } else if (score >= 0 && score <= 39) {
//   console.log("F");
// }else{
//     console.log("There was an error");
// }

// let score = prompt("Enter your score>>>");
// if (score <= 100 && score >= 0) {
//   if (score >= 70 && score <= 100) {
//     console.log("A");
//   } else if (score >= 60) {
//     console.log("B");
//   } else if (score >= 50) {
//     console.log("C");
//   } else if (score >= 45) {
//     console.log("D");
//   } else if (score >= 40) {
//     console.log("E");
//   } else {
//     console.log("F");
//   }
// } else {
//   console.log("There was an error");
// }

// Switch statement
// if(dayNum === 1)
// let dayNum = prompt("Enter day number. (Monday->1, Sunday->7)>>>")
// let dayNum = 1
// switch (dayNum){
//     case '1':
//         console.log("Monday");
//         break
//     case '2':
//         console.log("Tuesday");
//         break
//     default:
//         console.log("Error checking input");
// }

// Loops -> Starting point, Condition, increment/decrement
// Types Loop, (For loop, while loop, do while)
// console.log(1);
// console.log(2);
// console.log(3);
// container = 2
// container = container + 1
// var = 2
// var++ = 3
// var-- = 1
// var += 2

// Assignment Operators => =, +=, -+, /=, *=, %=, **=

// for(let startPoint = 2; startPoint < 10; startPoint += 3){
//     // Code block
//     console.log(startPoint);
// }

// Factorial => 3! = 3*2*1 = 6
// 5! = 120 => 5*4*3*2*1
// 10! => 9*8*7*6*5...

let variableName = "Divine";

// Functions -
// function functionName() {
//   //   content of function
//   console.log("Hello there, I am a boy and I am 12 years old");
//   console.log("I work at nsexpress..., and I am very");
//   console.log("Today is Friday\n");
// }
// Types of functions- functions that requires parameters and functions functions that don't require parameters
// What is a parameter? - A parameter is a value that will be needed in the function

// function sayHello(name = "Asmau", favoriteColor) {
//   console.log(
//     `${name} is saying hello, and ${name} favorite color is ${favoriteColor}`
//   );
// }
// sayHello("Divine", "Blue");

// let studentList = ["Divine", "Kenny", "Mustapha", "Asmau", "Abdullateef"];

// function studentIntro(name, studentNum) {
//   console.log(`My name is ${name} and I am student ${studentNum}`);
// }
// for(let i = 1; i <= studentList.length; i++){
//     studentIntro(studentList[i-1], i)
// }
// studentIntro("Asmau", 2)
// studentIntro("Mustapha", 3)
// studentIntro("Kenny", 4)
// studentIntro("Abdullateef", 5)

// let index = 6;
// do {
//     talker(index);
//     index++;
// } while (index < 5);

// Do while loop

// Arrow function
// const sayHi = () => {
//     talker("Hi there")
// }

// const greet = () => {
//     talker("I am greeting you")
// }
// greet()
// 1 * 1 * 2 * 3 * 4 * 5
// 5! = 5*4*3*2*1
// 6! = 6 * 5!
// 1000! = 1000 * 999!

const factorial = (num) => {
  if (num > 0) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result = result * i;
      if (i % 100 === 0) {
        talker(i);
      }
    }
    talker(result);
  } else {
    talker("Your input must be a non negative integer");
  }
};
factorial(125);


// try catch block
function divider() {
  let number = prompt("Enter a number>>>");
  //   console.log(typeof number);

  if (parseInt(number) === 0) {
    throw new Error("Cannot divide by zero");
  }
  let answer = 20 / number;
  console.log(answer);
  console.log("a")
  console.log("b")
  console.log("c")
}
try {
    divider();
} catch (error) {
  console.log(error.message);
}finally{
    console.log("Finished");
    try{
        divider();
    }catch(err){
        console.log(err.message);
    }
}
