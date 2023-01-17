function diceRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

function updateImage(queryName, randomNumber) {
  document
    .querySelector(queryName)
    .setAttribute("src", "images/dice" + randomNumber + ".png");
}

function update() {
  var randomNumber1 = diceRoll();
  var randomNumber2 = diceRoll();

  updateImage(".img1", randomNumber1);
  updateImage(".img2", randomNumber2);

//   if (randomNumber2 > randomNumber1) {
//     document.querySelector("h1").innerHTML = "Player 2 Wins!";
//   } else if (randomNumber1 > randomNumber2) {
//     document.querySelector("h1").innerHTML = "Player 1 Wins!";
//   } else {
//     document.querySelector("h1").innerHTML = "Draw!";
//   }

  var result = "";
  if (randomNumber2 > randomNumber1) {
    result = "Player 2 wins!";
  } else if (randomNumber1 > randomNumber2) {
    result = "Player 1 Wins!";
  } else {
    result = "Draw!";
  }
  document.querySelector("h1").innerHTML = result;
}
