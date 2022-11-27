function diceRoll() {
    var randomNumber = Math.random();
    
    randomNumber = randomNumber * 6;
    
    
    randomNumber = Math.floor(randomNumber) + 1;

    return randomNumber;
}

var randomNumber1 = diceRoll();
document
  .querySelector(".img1")
  .setAttribute("src", "images/dice" + randomNumber1 + ".png");

var randomNumber2 = diceRoll();

document
  .querySelector(".img2")
  .setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Dostluk Wins!";
}
