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


// WAP in JavaScript to get current date
function getCurrentDate() {
  let today = new Date();
  console.log(today);

  let dd = today.getDate();
  let mm = today.getMonth();
  let yy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

}

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdownContent");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}