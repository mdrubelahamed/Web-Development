
//Add event listner to every button
// we are using dynamic way to get the drum no so further if we add drum we don't need specify after how many drum we have to stop
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    alert("I got clicking")
  });
}



/* 
//Annoymous Function
//This function
```function handleClick() {
  alert("I got Clicked");
}```

//to this function
```function() {
  alert("I got Clicked");
}```
*/

