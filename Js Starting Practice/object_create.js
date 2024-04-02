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
