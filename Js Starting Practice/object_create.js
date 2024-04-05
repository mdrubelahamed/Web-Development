/*
// House Keeper Object
let houseKeeper1 = {
  name: "Sanaya",
  age: 30,
  yearsOfExperience: 3,
  chargePerMonth: 5000,
  criminalRecord: false,
  noOfWorksDo: ["Cleaning Rooms", "Washing Clothes", "Cooking Food", "Give Head Message", "Organize Bed"],
}
*/

// House Keeper Constructor Function
function HouseKeeper(name, age, yearsOfExperience, chargePerMonth, criminalRecord, noOfWorksDo) {
  this.name = name;
  this.age = age;
  this.yearsOfExperience = yearsOfExperience;
  this.chargePerMonth = chargePerMonth;
  this.criminalRecord = criminalRecord;
  this.noOfWorksDo = noOfWorksDo;
  this.clean = function() {
    alert("🪣👩‍🦯Cleaning is Progrees....")
  }
}


// Creating Object from constructor function
let houseKeeper1 = new HouseKeeper("Riya", 31, 5, 6000, false, ["Cleaning", "Cooking"])
let houseKeeper2 = new HouseKeeper("Raj", 36, 10, 8000, false, ["Cleaning", "Cooking", "Wahing Clothes", "Organize Bed"])

let houseKeeper3 = new HouseKeeper("Sayni", 21, 1, 2000, false, ["Cleaning Everything"])




/*

// House Keeper Method using inside an Object(startWork method)
let houseKeeper0 = {
  name: "Sanaya",
  age: 30,
  yearsOfExperience: 3,
  chargePerMonth: 5000,
  criminalRecord: false,
  noOfWorksDo: ["Cleaning Rooms", "Washing Clothes", "Cooking Food", "Give Head Message", "Organize Bed"],
  startWork: function() {
    alert("Should I start Work!");
    firstWorkDone();
  }
}
  function firstWorkDone() {
    alert("First Work is done, ready for the second😀")
  }
*/


// Create JS Constructor function 

function Friend(name, age, background, currentWork) {
  this.name = name;
  this.age = age;
  this.background = background;
  this.currentWork = currentWork;
}

// Object from the function
let friend1 = new Friend("Rubel", 21, "Science", "Computer Science");
let friend2 = new Friend("Nasim", 22, "Science", "Computer Application");
let friend3 = new Friend("Surjya", 22, "Science", "Computer Application");
let friend4 = new Friend("Anant", 23, "Science", "Computer Application");
let friend5 = new Friend("Vishal", 22, "Science", "Doing great in Sales Job");
let friend6 = new Friend("Priyabrato", 22, "Science", "Computer Application");
let friend7 = new Friend("Suparna", 22, "Science", "Makeup Specialist");


// Create Constructor Function
function EmployeeRecord(eId, name, jobTitle, age, country) {
  this.eId = eId;
  this.name = name;
  this.jobTitle = jobTitle;
  this.age = age;
  this.country = country;
}


// Object from the function
let employee1 = new EmployeeRecord("E01", "Emily Dvais", "Sr. Manage", 35, "USA");
let employee2 = new EmployeeRecord("E02", "Theodoe Dinh", "Technical Architect", 25, "India");
let employee3 = new EmployeeRecord("E03", "Luna Sanders", "Director", 40, "Bangladesh");
let employee4 = new EmployeeRecord("E04", "Penelope Jordan", "Computer Systems Mnageer", 25, "India");
let employee5 = new EmployeeRecord("E05", "Austin Vo", "Sr. Analyst", 41, "USA");
let employee6 = new EmployeeRecord("E06", "Joshua Gupta", "Account Represntative", 22, "India");
let employee7 = new EmployeeRecord("E07", "Luke Martain", "Analyst", 25, "Srilanka");



// Book Constructor
function Book(title, author, genre, ISBN) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.ISBN = ISBN;
  this.workDone = function() {
    let bookName = prompt("What is your Book name?");
    alert(bookName + " book object is created");

  }
}

let atomicHabits = new Book("Atomic Habits", "James Clear", "Self-help", "ISBN001");
let richDadPoorDad = new Book("Rich Dad Poor Dad", "Robert Kiyosaki", "Personal Finance", "ISBN002");
let thinkAndGrowRich = new Book("Think And Grow Rich", "Neoplian Hill", "Personal Finance", "ISBN002");
let theWarrenBuffetWay = new Book("The Warren Buffet Waffet", "Robert Hagstrom", "Stock Market", "ISBN003");



function RevealFavouriteColor(name, color) {
  this.name = name;
  this.color = color;
  this.reveal = function() {
    alert(name + "'s favourite color is " + color);
  }
}

let rubel = new RevealFavouriteColor("Rubel", "Red");



function Greet(name) {
  this.name = name;
  this.greetMe = function() {
    alert("Welcome " + name + " We are really greatful to have you with us.");
  }
}

let nasim = new Greet("Nasim");
let vishal = new Greet("Vishal");