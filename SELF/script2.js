function sumOfNaturalNumbers(firstNum, lastNum) {
  const beforeFirstNum = firstNum - 1;
  const beforeFirstNumSum = ((beforeFirstNum * (beforeFirstNum + 1)) / 2);
  const upToLastNumSum = ((lastNum * (lastNum + 1)) / 2);
  const finalSumOfFirstNumToLastNum = (upToLastNumSum - beforeFirstNumSum);
  return finalSumOfFirstNumToLastNum;
}


let firstNum = document.querySelector("#num1");
let lastNum = document.querySelector("#num2");


const value = document.getElementById("calculate-sum").addEventListener("click", function() {
  const result = sumOfNaturalNumbers(parseInt(firstNum.value), parseInt(lastNum.value))
  document.querySelector(".sum-output").textContent = `Your Output is ${result}`;
});
