function sumOfNaturalNumbers(num) {
  let output = ((num * (num + 1)) / 2);
  return output;
}

const value = sumOfNaturalNumbers(5);
console.log(value)


function sumOfNaturalNumbers2(firstNum, lastNum) {
  const beforeFirstNum = firstNum - 1;
  const beforeFirstNumSum = ((beforeFirstNum * (beforeFirstNum + 1)) / 2);
  const upToLastNumSum = ((lastNum * (lastNum + 1)) / 2);
  const finalSumOfFirstNumToLastNum = (upToLastNumSum - beforeFirstNumSum);
  return finalSumOfFirstNumToLastNum;
}

const value2 = sumOfNaturalNumbers2(6, 10);
console.log(value2);
