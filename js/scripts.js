// Log out into the console a string that says "Hello World!"
// console.log("Hello World!");
//
// //day2 - variables and Console.log
// // var myName = "Anthony";
// // var myAge = 18;
// const myName = "Anthony";
// let myAge = 18;
// // log out into the console myName and myAge the ES5 way
// // console.log("Hello, " + myName + "! You are " + myAge + " years old.");
// // console.Log(myAge);
//
// //log out into the conosole myName and myAge the ES6 way
// console.log(`Hello, ${myName}! You are ${myAge} years old.`)
//
// //day 2 - Date
// const today = new Date();
// let day = today.getDate();
// let month = today.getMonth() + 1;
// let year = today.getFullYear();
// let hour = today.getHours();
// // console.log(today);
// // console.log(day, month, year, hour);
// console.log(`${month}/${day}/${year}`);
//
// //day 2 - math
// //Gets random number between 0 and 1
// // const rand = Math.random();
//
// //give us a random number, then multiply it by ten.
// //Next add 1 so we cannot get 0. Finally round down the number.
// const rand = Math.floor((Math.random() * 10) + 1);
// console.log(rand);

//Simple popup
// alert(rand);

//User clicks cancel or ok
// confirm(rand);

//Accepts a users input then alerts the name



//day3
//--- strict comparison
//--- loose comparison
// ! Not
// !--strict not comparison
// !- loose not comparison
// > greater than
// < less than
// >= greater than or equal to
// < less than or equal to
// const userInput = prompt('please enter a number');
// if (1 ==  userInput) {
//   console.log("i am here");
//   // console.log(!true);
// } else {
//   console.log("in the else");
// }

//Day 3 - logical operators
// const userInput = prompt('please enter a number');
// if (userInput == 1 || userInput == ) {
//   console.log('i am here');
// } else {
//   console.log('in the else');
// }
// if (userInput > 5 && userInput < 10) {
//   console.log('i am here');
// } else {
//   console.log('in the else');
//
// }

//day 3 else if
// if (userInput > 5) {
//   console.log('number is greater than five');
// } else if (userInput < 5) {
//   console.log('number is less than five');
// } else if (userInput === '5') {
//   console.log('user entered five');
// } else if (userInput === '' || userInput === null) {
//   console.log('user input nothing');
// } else {
//   console.log('user did not enter a number');
// }


// day 3 switch
// const today = new Date().getDay();
// // console.log(today);
// switch (today) {
//   case 0:
//   console.log('Sunday');
//   break;
//   case 1:
//   console.log('Monday');
//   break;
//   case 2:
//   console.log('Tuesday');
//   break;
//   case 3:
//   console.log('Wednesday');
//   break;
//   case 4:
//   console.log('Thursday');
//   break;
//   case 5:
//   console.log('Friday');
//   break;
//   case 6:
//   console.log('Saturday');
// }
//

// day 3 math
// const addition = 1+1;
// const subtraction = 2-1;
// const multiplication = 2 * 2;
// const division = 10 / 2;
// const remainder = 11 % 3;

// let myNum = 1;
//increment
//myNum++
//decrement
//myNum--
//myNum = myNum + 3; WRONG WAY
// myNum += 3;
// myNum -= 10;
// myNum *= 5;
// myNUm /= 12;
// console.log(myNum);


//day4 - Arrays and loops
// let myArray = ['Red', 'Blue', 'Green', 'Purple', 'Black', 'Gray', 'White'];
// let red = myArray{0};
// console.log(myArray{1});
// console.log(myArray.length);
// let about = ['Anthony', 18, 'The sky is blue', true];
// console.log(about);
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(Array.isArray(nums));

//adds new item to the end of the array
// nums.push(10);
//adds new item to the beginning of the array
// nums.unshift(0);
//removes the last item at the enf of the array
// nums.pop();
//removes the first item in the array
// nums.shift();
// cuts out section of the array
// nums.splice(1, 4);
//makes a copy of the array then cuts the array
// let slice = nums.slice(3, 5);
// gives the index of an item in the array
// let color = myArray.indexOf('Green');
// console.log(myArray[color]);
// myArray.splice(color, 1);
// let lastIndex = myArray.lastIndexOf('Red');
// console.log(lastIndex);
// console.log(myArray.sort());
// console.log(myArray);
// console.log(nums);
// console.log(slice);



//Day4 - loops
// let num = 0;
// while (num < 10) {
  // console.log(num);
  // num++;
  // console.log(num);
// }
// for (let i = 0; i < 10; i++) {
// console.log('I have ran');
// }
// do {
  // num++;
  // console.log(num);
// } while (num < 10);
// for (let i = 0; i < myArray.length; i++) {
  // console.log(myArray[i]);
// }
// for
// console.log(num);



// let myFavoriteMovies = [];
// let firstFavorite = ['Alien', '1979'];
// let secondFavorite = ['Predator', '1987'];
// let thirdFavorite = ['A clockwork Orange', '1971'];
// myFavoriteMovies.push(firstFavorite, secondFavorite, thirdFavorite);
// // console.log(myFavoriteMovies[2][1]);
// let movieYears = []
// // movieYears.push(myFavoriteMovies[0][1], myFavoriteMovies[1][1], myFavoriteMovies[2][1]);
// for (let i = 0; i < myFavoriteMovies.length; i++) {
//   movieYears.push(myFavoriteMovies[i][1])
// }
// console.log(movieYears);
//


// // TODO Takehome day 4
// let todos = [];
// let todo1 = prompt("Hey there, what you doing?" , "Eat cheese.");
// let timeframeOne = prompt("How long should this take you? (in days)" , "1")
// let todo2 = prompt("Hey there, what you doing?" , "Eat cheese.");
// let timeframeTwo = prompt("How long should this take you? (in days)" , "1")
// let todo3 = prompt("Hey there, what you doing?" , "Eat cheese.");
// let timeframeThree = prompt("How long should this take you? (in days)" , "1")
//
// let todoOneArray = [todo1];
// let todoOneArray = [todo2];
// let todoOneArray = [todo3];
//
// todos.push(todoOneArray, todoTwoArray, todoThreeArray);
// for (var i = 0; i < todos.length; i++) {
//   let timeframe = prompt (`how long should ${todos[i][0]} take? (please provide in days)` , "1");
//
//   if (!isNaN(transformed) {
//     if (! isNaN) {
//
//     }
//     todos[i].push(transformed)
//   };
// }
//
// let n = 0;
// let max = 0;
// while(n <todos.length) {
//   if(max < todos[n][1]) {
//     max = todos[n][1];
//   }
//   n++;
// };
//
// let m = 0;
// do {
//   if(todos[m][1] === max) {
//     console.log(todos[m]);
//   } else {
//     todos[m].push("easy-peasy");
//
//   }
//   m++;
// } while(m < todos.length);
// //
// //
// console.log(parseInt("Hello World"));
// isNan(); //How you evaluate if something is NOT a number.
//
//
//
// //DAY 5 HOISTING
// console.log(name);
// var name = "Maurice"

// DAY 5 FUNCTIONS

//ANONYMOUS FUNCTIONS
// function(name, age) {
//   return `My name is ${name} and i am ${age} years old`;
// };// Function DEFINITION

//NAMED FUNCTIONS
// function getTodos(question) {
//   todos.push(prompt(question));
// };
//
// getTodos("whats the first thing you want to do?");
// //function call site
// getTodos("whats the next thing you want to do?");
// getTodos("whats the last thing you want to do?")

//
// nameThatBand("coldplay")
//
// function nameThatBand(bandName){//FUNCTION DECLARATION
//   return alert(`${bandName} is overrated`);
// };
// let sayHello = function() {// FUNCTION EXPRESSION
//   alert("Hello")
// };
// sayHello();
//
// let incrementor = 0;
// let sayGoodbye = function() {
//   if(incrementor > 5) {
//     alert("hello");
//     incrementor++;
//     sayGoodbye();
//   }
// }
//
//
// //"FAT" Arrow FUNCTIONS
// () => (); //POINTLESS but basic form
//
// () => {//Arrow function that takes 0 arguments and performs data manipulation
//   incrementor++;
//   if(incrementor < 5) {
//     sayGoodbye();
//   }
// };
//
// pasta => {//takes 1 argument (can have parentheses or not) and alerts a string
//   alert(`My favorite pasta is ${pasta}!`);
// };
//
// pasta => (pasta.toUpperCase());
//
// (car, house) => {
//   //call an API to save this data...
//   return `The returned info is ${data}`;
// };
//
// function calculateDogYears(age) {
//   let parsed = parseInt(age)
//   if (!isNaN(parseInt(age))) {
//     return age * 7;
//   } else{
//     let newAnswer = prompt("come on! i said a NUMBER of years!" , "1")
//     calculateDogYears(newAnswer);
//   }
// };
//
// // let dogAge = prompt()
//
//
// parseInt();
//
// "ryeker".toUpperCase();

// //Takehome3
// function parseString(string) {
//   let parsedLetter = string.charAt(0).toUpperCase();
//   let stringArr = string.split('');
//   stringArr.splice(0, 1, parsedLetter);
//   string = stringArr.join('');
//   if(string.charAt(string.length - 1) !== '.') string = string + '.';
//   return string;
// }

//Takehome4

// function reverseHalves(string) {
//   let halfIndex = Math.cell(string.length / 2);
//   let firstHalf = string.substring(0, halfIndex);
//   let secondHalf = string.substring(halfIndex, string.length);
//   alert(`${secondHalf}${firstHalf}`);
// }
//




// let pTags = document.getElementsByTagName("p");//returns an array
// console.log(pTags);
//
// let specialPTag = document.getElementsByClassName("my-special-p-tag");//returns an array
// console.log(specialPTag);
//
// let thisPTag = document.getElementById("this_p_tag");
// //returns 1 DOM node
// console.log(specialPTag[0]);
//
// let h1Tags = document.querySelectorAll("h1");
// let queryPTags =
// document.querySelectorAll(".my-special-p-tag");
// let idPTags = document.querySelectorAll("#this_p_tag");
//
// document.querySelector(".text-danger");
//
// function queryMyDOM(method, element) {
//   let vresult;
//   switch (method) {
//     case "getElementsByTagName";
//       result = document.getElementsByTagName(element);
//       break;
//     case "querySelector";
//     result = document.querySelector(element);
//     break;
//   default;
//     result = "sorry, that's not valid";
//
//   }
// }

//
// let redDiv = document.querySelector(".red-background");
//
// let count = 0;
//
// redDiv.addEventListener(
//   "mouseover",  //Valid DOM Event
//   e => {//2. A callback function
//     if(count < 10) {
//       count++;
//       } else{
//     redDiv.style.backgroundColor = "#0000FF";
//     redDiv.addEventListener("mouseleave", e =>{
//       redDiv.style.backgroundColor = "#E40007";
//     });
//     count = 0;
//   }
// );

//
// let redDiv = document.querySelector(".red-background");
//
// let count = 0; //This will keep track of how many times the user has moused over the div.
//
// redDiv.addEventListener( //Event Listener Takes TWO arguments
//   "mouseover", //1. Valid DOM event
//   e => { //2. A callback function, which takes 1 argument (e) which refers to the event itself when this callback is called by JavaScript
//     if(count < 10) { //Check if the count is less than 10 and increment if it is.
//       count++;
//     } else { //If the count has reached 10, change the backgroun color and reset the count to 0
//       redDiv.style.backgroundColor = "#0000FF";
//       redDiv.addEventListener("mouseleave", e => {
//         redDiv.style.backgroundColor = "#E40007";
//       });
//       count = 0;
//     }
//   }
// );
//
// let input = document.querySelector("#my_input");
//
// input.addEventListener("keydown", e => {
//   console.log(e.keycode);
// });



// document.getElementById("para").textContact = "This is some other text.";


// let text = document.getElementById("para").innerHTML;
// console.log(text);

//
// let content = document.getElementById("content");
//
//
//
// let myPTag = document.createElement("p");
// myPTag.textContent = "This is a paragraph added from the Javascript!";
// content.append(myPTag);
//
//
// let myBtn = document.createElement("button");
// myBtn.className = "btn";
// myBtn.id = "someId";
// myBtn.textContent = "Click me";
//
// myBtn.classList.add("btn-primary")
// myBtn.classList.remove("bten-primary");
//
// content.appendChild(myBtn);
//
//
// //using setAttribute
// let myImg = document.createElement("img");
// myImg.setAttribute('alt', "Add attribute from JS");
// myImg.setAttribute("src", "");
// content.appenChild(myImg);
//
// console.log(myImg.getAttribute("src"));


// console.log(document.getElementById("someId").classList);



// const script = document.querySelector("script");
// const body = document.querySelector("body");

// let newP = document.createElement("p");
// let newH1 = document.createElement("h1")
// let newFooter = document.createElement("footer");
// let newHeader = document.createElement("header");
// let newUl = document.createElement("ul");
// let newDiv = document.createElement("div");
//
// function createLi(classArray, LinkText) {
//   let newLink = document.createElement("li");
//   let newA = document.createElement("a");
//   newA.setAttribute("href", "#");
//   newA.textContent = LinkText;
//   newLink.appendChild(newA);
//   for (let i = 0; i < classArray.length; i++) {
//     newLink.classList.add(classArray[i]);
//   }
//   newUl.appendChild(newLink);
// }
// createLi(["pull-left"], "Home");
// createLi(["pull-right"], "contact");
// createLi(["pull-right"], "About");
//
// newUl.classList.add("nav", "nav-pills");
// newHeader.appendChild(newUl);
// body.insertBefore(newHeader, script);
//
// function createTextElement(elementType, text) {
//   let newElement = document.createElement(elementType);
//   newElement.textContent = text;
//   return newElement;
// }

// newDiv.classList.add("text-center");

// let h1 = createTextElement("h1", "Hello World");
// let p = createTextElement("p", "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")
// newDiv.appendChild(h1);
// newDiv.appendChild(p);
// body.insertBefore(newDiv, script);
//
// let newFooterLink = document.createElement("a");
// newFooterLink.textContent = "Check me out.";
// newFooterLink.setAttribute("href", "https://www.google.com/");
// newFooterLink.setAttribute("target", "_blank");
// newFooterLink.classList.add("text-center", "footer");
// newFooter.appendChild(newFooterLink);
// body.insertBefore(newFooter, script);
//

//
// function fizzBuzz(count, val1, val2) {
//   const val3 = val1 + val2;
//   let list = document.createElement("ol");
//   for (let i = 1; i <= count; i++) {
//     if(i % val3 == 0) {
//       let res = document.createElement("li");
//       res.textContent = "FizzBuzz";
//       list.appendChild(res);
//     } else if(i % val1 == 0) {
//       res.textContent = "Fizz";
//       list.appendChild(res);
//     } else if(i % val2 == 0) {
//       res.textContent = "Buzz";
//       list.appendChild(res);4
//     } else{
//       res.textContent = i;
//       list.appendChild(res);
//      }
//   }
//   body.insertbefore(list, script);
// }
//
//
// // fizzBuzz(50, 2, 5);
//
//
// let messageForm = document.forms.messageForm;
// let message = messageForm["msg"];
// // console.log(messageForm);
// // console.log(message )
//
// messageForm.addEventListener("submit", e => {
//   e.preventDefault();
//   let list = document.getElementById("list");
//   let newMessage = document.createElement("li");
//   let message = e.target["msg"].value;
//   newMessage.textContent = message;
//   list.appendChild(newMessage);
//   messageForm.reset();
// })
//
//
// function generateList() {
//   let fullList = [
//     'First',
//     'Second',
//     'Third',
//     'Fourth'
//   ];
//   let list = document.getElementById("list");
//   for (var i = 0; i < fullList.length; i++) {
//     let msg = document.createElement("li");
//     msg.textContent = fullList[i];
//     msg.id = `item-${i + 1}`;
//     list.appendChild(msg);
//   }
// }
// generateList();


// function submitForm() {
  // console.log(document.getElementById("message").value);
// }


// let name = "jordan";
// let age = 22;
// let currentClass = "Javascript";
// console.log(this.name);
//
// function aboutMe() {
//   let me = {
//     firstName: "jordan",
//     lastName: "mavrogeorge",
//     age: 22,
//     currentClass: "Javascript",
//     fullName: function  () {
//       return `${this.firstName} ${this.lastName}`
//     }
// }
//   console.log(me.fullName());
// }
// aboutMe();



//
//
// let string = new String('String'),
// arrObj = new Array(['String', 'SecondString']),
// newOgj = new Object({name: "fuck"});
// // console.log(object.getPrototypeOf(string));
//
//
// const myObj = {
//   first_name: "fuck",
//   last_name: "it",
//   some_other_obj: {
//     something_else: "Else"
//   }
// };
// console.log(myObj.last_name, myObj['last_name'], myObj.some_other_obj.something_else);


// const user = {
//   email: "aschaffer614@gmail.com",
//   user_name: "root",
//   password: "FuckIT"
// };
//
// function User(email, userName, password) {
//   this.email = email;
//   this.user_name = userName;
//   this.password = password;
//   this.getUSerName = function() {
//     console.log(this.user_name);
//   };
// }
//
// let email,
// userName,
// password;
//
// email = prompt('What is your email address?');
// userName = prompt('What is your username?');
// password = prompt('What is your password');
//
// const newUser = new User(email, userName, password);
//
// newUser.getUSerName();


// day10 - Timers / localStorage / sessionStorage / strict / iife
// var timer;
// var interval;
//
//
// function delayAlert(duration){
//   duration = duration * 1000;
//   timer = setTimeout(triggerAlert, duration);
// }
//
// function triggerAlert() {
//   alert("Timer Complete");
// }
//
// function cancelAlert() {
//   clearTimeout(timer);
// }
//
// function intervalAlert(duration) {
//   duration = duration * 1000
//   interval = setInterval(triggerAlert, duration);
// }
//
// function cancelInterval() {
//   clearInterval(interval);
// }
//
//
//
// document.getElementById("timer-start").addEventListener("click", function () {
//   var time = prompt("How long would you like to wait?");
//   delayAlert(time);
// })
//
// document.getElementById("cancel-timer").addEventListener("click", function() {
// cancelAlert();
// })
//
// document.getElementById("interval-start").addEventListener("click", function() {
// var time = prompt("how often would you like this to occur?");
// intervalAlert(time);
// })
//
// document.getElementById("cancel-interval").addEventListener("click", function() {
// cancelInterval();
// })

// function checkTime(i) {
//   if (i < 10) {i = "0" + i};
//   return i;
// }
//
// function displayClock() {
//   const clock = document.getElementById("clock");
//
//   setInterval(function() {
//     var today = new Date();
//     var hour = today.getHours();
//     var min = today.getMinutes();
//     var sec  = today.getSeconds();
//     min = checkTime(min);
//     sec = checkTime(sec);
//     clock.textContent = `${hour}:${min}:${sec}`;
//   }, 1000)
// }
// displayClock();
//
// function storeUser(username) {
//   window.localStorage.setItem('user', username);
// }
//
// function getUser() {
//   return window.localStorage.getItem('user');
// }
//
// document.getElementById("get-username").addEventListener("click", function() {
//   var usr = prompt("What is your username?");
//   storeUser(usr);
// })
//
// document.getElementById("displayUsername").addEventListener("click", function() {
//   let user = document.getElementById("currentUser");
//   user.textContent = getUser();
// });
//
// var number = 1;
// var getNumber = (function(x) {
//   return function() {
//     alert(x);
//   };
// }(number));
// number = 2;
// getNumber();



//Day 11 fetch objects (advanced) / js classes
function getRepos() {
  return fetch('https://api.github.com/users/anthony61016/repos').then(data => { return data.json();
  }).then(repos => {
    let repoList = document.getElementById("myRepos");
    console.log(repos[0]);
    repos.forEach(repo => {
      if (repo.name === "anthony61016.github.io") {return; }
      let temp = document.createElement("li");
      let paragraph = document.createElement("p");
      let link = document.createElement("a");
      temp.setAttribute("class", "list-group-item");
      paragraph.textContent = repo.name;
      link.textContent = "View";
      link.setAttribute("href", repo.html_url);
      link.setAttribute("target", "_blank");
      temp.appendChild(paragraph);
      temp.appendChild(link);
      repoList.appendChild(temp);
    });

  });
}

getRepos();

class User {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    alert(this.name);
  }
}
let user = new User("jordan");
user.sayHello();





//End
