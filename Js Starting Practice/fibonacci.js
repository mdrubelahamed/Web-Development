// Fibonacci Seris using JavaScript for loop, lenght, and push
let output = [];

function fibonacciGenerator(n) {
  if (n === 1) {
    output.push(0);
    return output;
  }
  else if (n === 2) {
    output.push(0);
    output.push(1);
    return output;
  }
  else {
    output.push(0);
    output.push(1);

    for (let i=2; i < n; i++) {
    lastValuePosition = output.length -1
    lastValue = output[lastValuePosition]

    secondLastValuePosition = output.length -2
    secondLastValue = output[secondLastValuePosition]
    finalValue = (lastValue + secondLastValue)
    output.push(finalValue)
  }
  return output;
  }
}

fibonacciGenerator(10);