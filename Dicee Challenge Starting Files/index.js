// random dice challenge
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var imageSource1 = 'images/dice' + randomNumber1 + '.png';
var imageSource2 = 'images/dice' + randomNumber2 + '.png';

var image1 = document.querySelectorAll('img')[0];
image1.setAttribute('src', imageSource1);
var image2 = document.querySelectorAll('img')[1];
image2.setAttribute('src', imageSource2);


function winnerDecider() {
  if (randomNumber1 > randomNumber2) {
    document.querySelector('h1').textContent = '🚩 Player 1 Wins'
  }
  else if (randomNumber2 > randomNumber1) {
    document.querySelector('h1').textContent = 'Player 2 Wins 🚩'
  }
  else {
    document.querySelector('h1').textContent = "≜ Draw ≜"
  }
}

winnerDecider();