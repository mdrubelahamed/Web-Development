```
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropdownFunction() {
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

// WAP in JavaScript to get current date

function showDate() {
  let format1 = document.querySelector(".dd-mm-yyyy");
  let format2 = document.querySelector(".dd/mm/yyyy");
  let format3 = document.querySelector(".mm-dd-yyyy");
  let format4 = document.querySelector(".mm/dd/yyyy");

  format1.addEventListener("click", function () {
    let date = `${dd}-${mm}-${yy}`;
    document.querySelector(".show-date").textContent = `Current date: ${date}`;
  });

  format2.addEventListener("click", function () {
    let date = `${dd}/${mm}/${yy}`;
    document.querySelector(".show-date").textContent = `Current date: ${date}`;
  });

  format3.addEventListener("click", function () {
    let date = `${mm}-${dd}-${yy}`;
    document.querySelector(".show-date").textContent = `Current date: ${date}`;
  });

  format4.addEventListener("click", function () {
    let date = `${mm}/${dd}-${yy}`;
    document.querySelector(".show-date").textContent = `Current date: ${date}`;
  });
}

function getCurrentDate() {
  let today = new Date();
  console.log(today);

  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yy = today.getFullYear();

  if (dd < 10) {
    dd = "0" + dd;
  }

  if (mm < 10) {
    mm = "0" + mm;
  }

  showDate();
}

getCurrentDate();```


```
  <!-- Get Current Date -->

  <div class="dropdown">
    <button onclick="dropdownFunction()" type="button" class="dropbtn">Date Fromat</button>
    <div id="myDropdown" class="dropdownContent">
      <a href="#" class= "dd-mm-yyyy">dd-mm-yyyy</a>
      <a href="#" class= "dd/mm/yyyy">dd/mm/yyyy</a>
      <a href="#" class= "mm-dd-yyyy">mm-dd-yyyy</a>
      <a href="#" class= "mm/dd/yyyy">mm/dd/yyyy</a>
    </div>
  </div>

  <p class="show-date">Current date ...</p>```