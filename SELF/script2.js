function printPage() {
  window.print();
}

const printButton = document.querySelector(".print-page");
printButton.addEventListener("click", printPage);

function sumOfNaturalNumbers(firstNum, lastNum) {
  if (firstNum > lastNum) {
    return `${firstNum} > ${lastNum}. Your first number must be less than or equal to last number.`;
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
  document.querySelector(".sum-output").textContent = `Your Output is ${result}`; }
});