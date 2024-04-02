```
<!--basic code -->
  <div class="image">
    <img src="./images/profile_img.jpg" alt="profile image" height="150" width="150">
  </div>
  <div class="my-links">
    Build in Public <a href="https://www.twitter.com/mdrubelahamed01" target="_blank">Twitter</a> Account
  </div>
  <hr>
```

```
// This is a html and js Code block
// where i write a dynamic code when some input a text the dom manipulation happens 
  <h1>Greetings</h1>

  Name <input type="text" id="myName" value="">

  <p id="greetPeople">Hello </p>

//js
function greet(nm) {
  document.getElementById('greetPeople').innerHTML = 'Hello ' + nm
}
var inputValue = document.getElementById("myName").value;

document.getElementById("myName").addEventListener("input", function() {
  inputValue = this.value;
  greet(inputValue);
});

greet(inputValue);
```