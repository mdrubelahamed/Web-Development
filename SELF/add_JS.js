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




const value = document.getElementById("calculate-sum").addEventListener("click", function() {
  let firstNum = document.querySelector("#num1");
  let lastNum = document.querySelector("#num2");
  const result = sumOfNaturalNumbers(parseInt(firstNum.value), parseInt(lastNum.value))

  if (typeof result == "string"){
    document.querySelector(".sum-output").innerHTML = `${result}`; }
    else {
  document.querySelector(".sum-output").innerHTML = `Sum = ${result}`; }
});


// showing url
function showURL() {
  return document.URL;
}
const pageURL = showURL();

document.querySelector(".show-url").textContent = `Current page url is "${pageURL}"`;


// greet

const greet = function() {
  const name = prompt("What is your name ");
  if (name === null || name === "") {
    document.querySelector(".p-greet").innerHTML = `🙏Please enter your name`;
  }
  else {
    document.querySelector(".p-greet").innerHTML = `${name} I am really thankful to you, for visiting my page💗`;
  }
}

greetButton = document.querySelector(".greet").addEventListener("click", greet);


// Multiply and devide

const multiplication = (a, b) => a * b;
const division = (a, b) => a / b;

const multiply = document.querySelector(".mutiply").addEventListener("click", function() {
  const a = parseFloat(document.querySelector("#num1").value);
  const b = parseFloat(document.querySelector("#num2").value);
  const result = multiplication(a, b);
  document.querySelector(".sum-output").innerHTML = `${a} × ${b} = ${result}`;
});

const divide = document.querySelector(".divide").addEventListener("click", function() {
  const a = parseFloat(document.querySelector("#num1").value);
  const b = parseFloat(document.querySelector("#num2").value);
  const result = division(a, b).toFixed(2);
  document.querySelector(".sum-output").innerHTML = `${a} ÷ ${b} = ${result}`;
});


