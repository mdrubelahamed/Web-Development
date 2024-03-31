// Checks is a given string palindrome or not
// retun a boolean value is the string palindrome or not
function isPalindrome(inputString) {
  var lowercaseString = inputString.toLowerCase();
  var stringLength = lowercaseString.length;
  var reverseText = "";
  
  // Iterate from the end of the string to the beginning
  for (var i = stringLength - 1; i >= 0; i--) {
    var lastChar = lowercaseString.charAt(i);
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