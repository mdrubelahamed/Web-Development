// Display date and time
function showDateTime() {
  const date = new Date();
  document.querySelector(".show-date-time").innerHTML = date;
}

// Toggle class using button
function darkMode() {
  const htmlBody = document.body;
  htmlBody.classList.toggle("dark-mode");
}

// change html content using getElementByID
document.getElementById("greet").innerHTML = "Hello JavaScript!"


// Trun on light
function TurnOnAndOff() {
  let turnOnBtn = document.getElementById("turn-on");
  turnOnBtn.addEventListener("click", function() {
  document.getElementById("myBulb").src="/images/pic_bulbon.gif";
});
let turnOffBtn = document.getElementById("turn-off");
turnOffBtn.addEventListener("click", function() {
  document.getElementById("myBulb").src="/images/pic_bulboff.gif";
});
}

TurnOnAndOff();

// sum, subtract, divide, multiply, remainder

function sum(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function remainder(num1, num2) {
  return num1 % num2;
}

function division(num1, num2) {
  if (num2 === 0) {
    alert("Divide by Zero is not Allowed");
    return; // Return early to avoid further execution
  }
  else {
    let result = num1 / num2;
    if (result % 1 !== 0) {
      // Round to two decimal places if it's a float
      return result.toFixed(2);
    }
    else {
      // Return the integer result as is
      return result;
    }
  }
}

let num1Input = document.querySelector("#num1");
let num2Input = document.querySelector("#num2");

function gotNumbers() {
  return {
    num1 : parseInt(num1Input.value),
    num2 : parseInt(num2Input.value),
  }
}

document.querySelector(".sum-btn").addEventListener("click", function() {
  let {num1, num2} = gotNumbers();
  const result = sum(parseInt(num1), parseInt(num2));
  document.querySelector(".calculate-result").innerHTML = `${num1} + ${num2} = ${result}`;
})
document.querySelector(".subtract-btn").addEventListener("click", function() {
  let {num1, num2} = gotNumbers();
  const result = subtract(parseInt(num1), parseInt(num2));
  document.querySelector(".calculate-result").innerHTML = `${num1} - ${num2} = ${result}`;
})
document.querySelector(".multiply-btn").addEventListener("click", function() {
  let {num1, num2} = gotNumbers();
  const result = multiply(parseInt(num1), parseInt(num2));
  document.querySelector(".calculate-result").innerHTML = `${num1} * ${num2} = ${result}`;
})
document.querySelector(".divide-btn").addEventListener("click", function() {
  let {num1, num2} = gotNumbers();
  const result = division(parseInt(num1), parseInt(num2));
  document.querySelector(".calculate-result").innerHTML = `${num1} / ${num2} = ${result}`;
})

document.querySelector(".remainder-btn").addEventListener("click", function() {
  let {num1, num2} = gotNumbers();
  const result = remainder(parseInt(num1), parseInt(num2));
  document.querySelector(".calculate-result").innerHTML = `${num1} % ${num2} = ${result}`;
})