//Add event listner to every button
// we are using dynamic way to get the drum no so further if we add drum we don't need specify after how many drum we have to stop

// Detecting button press in my html content
  for (let i = 0; i < document.querySelectorAll(".drum").length; i++) { 
    document.querySelectorAll("button")[i].addEventListener("click", function () {
      let buttonTextContent = this.textContent;
      makeSound(buttonTextContent);
      addAnnimation(buttonTextContent);
  });
}

// Detecting Key press in my html
document.addEventListener("keydown", function(event) {
 makeSound(event.key);
  addAnnimation(event.key);
});


function addAnnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  // Adding pressed class in to our html buttons
  activeButton.classList.add("pressed");

  // add delay in code
  setTimeout(function() {
    activeButton.classList.remove("pressed"); //my code to be executed after 100 millisecond
  }, 100);
}

// Play the sound based on which key get pressed
function makeSound(key) {
  switch (key) {
    case "w":
      let crash = new Audio("sounds/tom-1.mp3")
      crash.play();
      break;

    case "a":
      let kick = new Audio("sounds/tom-2.mp3");
      kick.play();
      break;

    case "s":
      let snare = new Audio("sounds/tom-3.mp3");
      snare.play();
      break;

    case "d":
      let tom1 = new Audio("sounds/tom-4.mp3");
      tom1.play();
      break;

    case "j":
      let tom2 = new Audio("sounds/crash.mp3");
      tom2.play();
      break;

    case "k":
      let tom3 = new Audio("sounds/kick-bass.mp3");
      tom3.play();
      break;
      
    case "l":
      let tom4 = new Audio("sounds/snare.mp3");
      tom4.play();
      break;

    default: console.log(key); 
      break;
  }
}