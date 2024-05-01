// Variables to store input and operator
let currentInput = "";
let previousInput = "";
let operator = "";

// Get the display input
const display = document.getElementById("display");

// Function to update the display
function updateDisplay(value) {
  display.value = value;
}

// Event listeners for number buttons
document.querySelectorAll(".number-btn").forEach(button => {
  button.addEventListener("click", () => {
    currentInput += button.dataset.value;
    updateDisplay(currentInput);
  });
});

// Event listeners for operator buttons
document.querySelectorAll(".operator-btn").forEach(button => {
  button.addEventListener("click", () => {
    if (currentInput !== "") {
      if (previousInput !== "") {
        calculate();
      }
      operator = button.dataset.value;
      previousInput = currentInput;
      currentInput = "";
    }
  });
});

// Function to perform calculations
function calculate() {
  let result = 0;
  switch (operator) {
    case "+":
      result = parseFloat(previousInput) + parseFloat(currentInput);
      break;
    case "-":
      result = parseFloat(previousInput) - parseFloat(currentInput);
      break;
    case "*":
      result = parseFloat(previousInput) * parseFloat(currentInput);
      break;
    case "/":
      if (parseFloat(currentInput) === 0) {
        updateDisplay("Error: Division by zero");
        return;
      }
      result = parseFloat(previousInput) / parseFloat(currentInput);
      break;
    default:
      break;
  }
  updateDisplay(result.toString());
  currentInput = result.toString();
  previousInput = "";
}

// Event listener for the "=" button
document.querySelector(".operator-btn[data-value=\"=\"]").addEventListener("click", () => {
  if (previousInput !== "" && currentInput !== "") {
    calculate();
  }
});

// Event listener for the clear button
document.getElementById("clear").addEventListener("click", () => {
  currentInput = "";
  previousInput = "";
  operator = "";
  updateDisplay("");
});