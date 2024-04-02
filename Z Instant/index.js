/*
// Checks is a given string palindrome or not
// retun a boolean value is the string palindrome or not
function isPalindrome(inputString) {
  let lowercaseString = inputString.toLowerCase();
  let stringLength = lowercaseString.length;
  let reverseText = "";
  
  // Iterate from the end of the string to the beginning
  for (let i = stringLength - 1; i >= 0; i--) {
    let lastChar = lowercaseString.charAt(i);
    reverseText += lastChar
  }

  // Compare string with the reverse string
  return lowercaseString === reverseText;
}

// Example use
const inputString = 'Radar'
const isPalindromicString = isPalindrome(inputString);

// Update the DOM element with the result
if (isPalindromicString) {
  let textMessage = `<u>${inputString}</u> is a Palindrome`;
  document.getElementsByClassName("pal")[0].innerHTML = textMessage;
}
else {
  let textMessage = `<u>${inputString}</u> is not a Palindrome`;
  document.getElementsByClassName("pal")[0].innerHTML = textMessage;
}
*/

/*
// Object Create
let callGirl1 = {
  name: "Raima",
  age: 35,
  withoutForcedWorking: true,
  language: ["bengali", "hindi"],
}

console.log(callGirl1.language[0]);
*/


// House Keeper Object
let houseKeeper1 = {
  name: "Sanaya",
  age: 30,
  yearsOfExperience: 3,
  noOfWorksDo: ["Cleaning Rooms", "Washing Clothes", "Cooking Food", "Give Head Message", "Organize Bed"],
  chargePerMonth: 5000,
  criminalRecord: false,
}