function displayUSDateTime() {
  const now = new Date();
  document.getElementById('dateAndTime').innerHTML = now;
}
// Dark and light mode
function dayMode() {
  const dayBtn = document.body;
  dayBtn.classList.toggle("day-mode");
}