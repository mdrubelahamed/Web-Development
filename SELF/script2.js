function printPage() {
  window.print();
}

const printButton = document.querySelector(".print-page");
printButton.addEventListener("click", printPage);

function sumOfNaturalNumbers(firstNum, lastNum) {
  if (firstNum > lastNum) {
    return `${firstNum} > ${lastNum}. Your last number must be greater than or equal to first number.`;
  }
  else {
    const beforeFirstNum = firstNum - 1;
    const beforeFirstNumSum = ((beforeFirstNum * (beforeFirstNum + 1)) / 2);
    const upToLastNumSum = ((lastNum * (lastNum + 1)) / 2);
    const finalSumOfFirstNumToLastNum = (upToLastNumSum - beforeFirstNumSum);
    return finalSumOfFirstNumToLastNum;
  }
}


let firstNum = document.querySelector("#num1");
let lastNum = document.querySelector("#num2");


const value = document.getElementById("calculate-sum").addEventListener("click", function() {
  const result = sumOfNaturalNumbers(parseInt(firstNum.value), parseInt(lastNum.value))

  if (typeof result == "string"){
    document.querySelector(".sum-output").textContent = result; }
    else {
  document.querySelector(".sum-output").innerHTML = ` ${result}`; }
});


// showing url
function showURL() {
  return document.URL;
}
const pageURL = showURL();

document.querySelector(".show-url").textContent = `Current page url is "${pageURL}"`;


// arrow key

// let myFunc = function(a, b) {
//   return a + b;
// }

const myFunc = (a, b) => a + b;

console.log(myFunc(2,5));



