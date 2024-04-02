// Select the element you want to add the event listener to
const element = document.querySelector(".mw-page-title-main");

// Declear two array with full of strings from where we generate random names and colors
let colors = ["red", "blue", "green", "violet", "brown", "yellow", "orange", "pink", "turquoise", "magenta", "cyan", "purple", "lime", "teal", "gold", "silver", "indigo", "fuchsia", "coral", "lavender"];
let names = ["server", "workstation", "laptop", "router", "firewall", "switch", "hub", "access point", "mainframe", "desktop"];

// Add the event listener to the selected element
element.addEventListener("click", function() {
  console.log("JavaScript got clicked");
  let namesLength = names.length
  let name = names[Math.floor(Math.random() * namesLength)];
  element.textContent = name;
  let colorsLength = colors.length
  let colour = colors[Math.floor(Math.random() * colorsLength)];
  element.style.color = colour;
}); 