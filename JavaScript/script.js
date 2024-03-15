// /**
//  * Welcome to the Stanford Karel IDE.
//  * This is a free space for you to 
//  * write any Karel program you want.
//  **/
function main(){
  beepersRight();
  goUpTurnLeft();
  beepersLeft();
  goUpTurnRight();
  beepersRight();
  goUpTurnLeft();
  beepersLeft();
  goUpTurnRight();
  beepersRight();
}


function beepersRight() {
  putBeeper();
  move();
  move();
  putBeeper();
  move();
  move();
  putBeeper();
}

function goUpTurnLeft() {
  turnLeft();
  move();
  turnLeft();
}

function beepersLeft() {
  move();
  putBeeper();
  move();
  move();
  putBeeper();
  move();
}

function goUpTurnRight() {
  turnRight();
  move();
  turnRight();
}


// // sample code 
function getMilk() {   
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}



// Life in days, weeks, months, 
// You have 12410 days, 1768 weeks, and 408 months left.
function lifeInWeeks(age) {
  var leftAge = 90 - age;
  var leftDays = leftAge * 365
  var leftWeeks = leftAge * 52
  var leftMonths = leftAge * 12
  console.log("You have " + leftDays + " days, " + leftWeeks + " weeks, and " + leftMonths + " months left.")
}

lifeInWeeks(56);
  




//Love Calculator
var partner1 = prompt("What is your name?").toUpperCase();
var partner2 = prompt("What is your partner name?").toUpperCase();

var love = (Math.random() * 100)
love = Math.floor(love) + 1

console.log(partner1 + "❤️" + partner2 + " = " + love + " %")





// update love calculator
var partner1 = prompt("What is your name?").toUpperCase();
var partner2 = prompt("What is your partner name?").toUpperCase();

var love = Math.floor((Math.random() * 101))

if (love >= 90) {
    console.log(partner1 + "❤️" + partner2 + " = " + love + " % You both are soulmate.");
}
else if (love >= 50 && love < 90 ) {
    console.log(partner1 + "❤️" + partner2 + " = " + love + " % You both can become good company for each other.");
}
else if (love < 50 && love >=30) {
console.log(partner1 + "❤️" + partner2 + " = " + love + " % Your's love can be good and bad.")
}
else if (love < 30) {
    console.log(partner1 + "❤️" + partner2 + " = " + love + " % You both go oil and water.");
}


// leap year calculator
function isLeap(year) {
    if (year % 400 === 0) {
      return year + "is a leap year"
    }
    else if (year % 4 === 0) {
      if (year % 100 === 0) {
        return year + " is not a leap year"
      }
      else {
        return year + " is a leap year"
      }
    }
    else {
      return year + " is not a leap year"
    }
  }
  
  isLeap(2024)



// Array
var guests = ['rubel', 'robert', 'rohan', 'jojo', 'johan', 'sneha', 'sepali']

var guestName = prompt('what is your name ?')

if (guests.includes(guestName)) {
    alert('Welcome ' + guestName + '! we are delighted to have you.')
}
else {
    alert(guestName + ' You are not invited to this party.')
}


// fizzBuzz Game
function range(start, end) {
  for (let num = start; num < end; num++) {
      if (num % 3 === 0 && num % 5 === 0) {
          console.log("FizzBuzz");
      }
      else if (num % 3 === 0) {
          console.log("Fizz");
      }
      else if (num % 5 === 0) {
          console.log("Buzz");
      }
      else {
          console.log(num);
      }
  }
}

range(1, 101);



// FizzBuzz game 2
var output = [];

function fizzBuzz() {
    for (let num = 1; num <= 100; num++) {
        if (num % 3 === 0 && num % 5 === 0) {
            output.push("FizzBuzz");
        }
        else if (num % 3 === 0) {
            output.push("Fizz");
        }
        else if (num % 5 === 0) {
            output.push("Buzz");
        }
        else {
            output.push(num)
        }
    }
    console.log(output);
}

fizzBuzz();

// Fizz Buzz game mind jugling
var output = [];
var num = 1;

function fizzBuzz() {
    output.push(num)
    num++;
    
    console.log(output);
}

fizzBuzz();