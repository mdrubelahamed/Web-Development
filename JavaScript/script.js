// /**
//  * Welcome to the Stanford Karel IDE.
//  * This is a free space for you to 
//  * write any Karel program you want.
//  **/
// function main(){
//   beepersRight();
//   goUpTurnLeft();
//   beepersLeft();
//   goUpTurnRight();
//   beepersRight();
//   goUpTurnLeft();
//   beepersLeft();
//   goUpTurnRight();
//   beepersRight();
// }


// function beepersRight() {
//   putBeeper();
//   move();
//   move();
//   putBeeper();
//   move();
//   move();
//   putBeeper();
// }

// function goUpTurnLeft() {
//   turnLeft();
//   move();
//   turnLeft();
// }

// function beepersLeft() {
//   move();
//   putBeeper();
//   move();
//   move();
//   putBeeper();
//   move();
// }

// function goUpTurnRight() {
//   turnRight();
//   move();
//   turnRight();
// }


// // sample code 
// function getMilk() {   
//   console.log("leaveHouse");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveUp");
//   console.log("moveRight");
//   console.log("moveRight");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveDown");
//   console.log("moveLeft");
//   console.log("moveLeft");
//   console.log("enterHouse");
// }



// Life in days, weeks, months, 
function lifeInWeeks(age) {
  var leftAge = 90 - age;
  var leftDays = leftAge * 365
  var leftWeeks = leftAge * 52
  var leftMonths = leftAge * 12
  console.log("You have " + leftDays + " days, " + leftWeeks + " weeks, and " + leftMonths + " months left.")
}

lifeInWeeks(56);
  
// You have 12410 days, 1768 weeks, and 408 months left.




//Love Calculator
var partner1 = prompt("What is your name?").toUpperCase();
var partner2 = prompt("What is your partner name?").toUpperCase();

var love = (Math.random() * 100)
love = Math.floor(love) + 1

console.log(partner1 + "❤️" + partner2 + " = " + love + " %")


