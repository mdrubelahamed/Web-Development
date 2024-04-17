function printPage() {
  window.print();
}

const button = document.querySelector(".print-page");
button.addEventListener("click", printPage);