// Log out into the console a string that says "Hello World!"
// console.log("Hello World!");

//day2 - variables and Console.log
// var myName = "Anthony";
// var myAge = 18;
const myName = "Anthony";
let myAge = 18;
// log out into the console myName and myAge the ES5 way
// console.log("Hello, " + myName + "! You are " + myAge + " years old.");
// console.Log(myAge);

//log out into the conosole myName and myAge the ES6 way
console.log(`Hello, ${myName}! You are ${myAge} years old.`)

//day 2 - Date
const today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1;
let year = today.getFullYear();
let hour = today.getHours();
// console.log(today);
// console.log(day, month, year, hour);
console.log(`${month}/${day}/${year}`);

//day 2 - math
//Gets random number between 0 and 1
// const rand = Math.random();

//give us a random number, then multiply it by ten.
//Next add 1 so we cannot get 0. Finally round down the number.
const rand = Math.floor((Math.random() * 10) + 1);
// console.log(rand);

//Simple popup
// alert(rand);

//User clicks cancel or ok
// confirm(rand);

//Accepts a users input then alerts the name
let name = prompt("Please enter your name:");
