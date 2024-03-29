function greet(nm) {
  document.getElementById('greetPeople').innerHTML = 'Hello ' + nm
}
var inputValue = document.getElementById("myName").value;

document.getElementById("myName").addEventListener("input", function() {
  inputValue = this.value;
  greet(inputValue);
});

greet(inputValue);