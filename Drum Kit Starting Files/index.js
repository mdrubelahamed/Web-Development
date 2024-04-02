//Add event listner to every button
// we are using dynamic way to get the drum no so further if we add drum we don't need specify after how many drum we have to stop
  
  for (let i = 0; i < document.querySelectorAll(".drum").length; i++) { 
    document.querySelectorAll("button")[i].addEventListener("click", function () {
      var buttonTextContent = this.textContent;
      switch (buttonTextContent) {
        case "w":
          var crash = new Audio("sounds/crash.mp3")
          crash.play();
          break;

        case "a":
          var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
          break;

        case "s":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
          break;

        case "d":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
          break;

        case "j":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
          break;

        case "k":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          break;
          
        case "l":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
          break;

        default: console.log(buttonTextContent); 
          break;
      }
  });
}


// Extra things in comment for understandin how i did it then


// var numberOfButtons = document.querySelectorAll(".drum").length, we can also create an var and use it in the for loop


// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();

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

// Using if else
// 
// 
// if (this.textContent === "w") {
//   var audio = new Audio("sounds/crash.mp3");
//   audio.play();
// }
// else if (this.textContent === "a") {
//   var audio = new Audio("sounds/kick-bass.mp3");
//   audio.play();
// }
// else if (this.textContent === "s") {
//   var audio = new Audio("sounds/snare.mp3")
//   audio.play();
// }
// else if (this.textContent === "d") {
//   var audio = new Audio("sounds/tom-1.mp3");
//   audio.play();
// }
// else if (this.textContent === "j") {
//   var audio = new Audio("sounds/tom-2.mp3");
//   audio.play();
// }
// else if (this.textContent === "k") {
//   var audio = new Audio("sounds/tom-3.mp3");
//   audio.play();
// }
// else if (this.textContent === "l") {
//   var audio = new Audio("sounds/tom-4.mp3");
//   audio.play();
// }
// else {
//   console.log("Wrong Drum Kit Button Pressed");
// }