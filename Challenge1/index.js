let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage1 = "imgs/dice" + randomNumber1 + ".png";
let img1 = document.getElementsByClassName("img1")[0];
img1.setAttribute("src", randomDiceImage1);

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let randomDiceImage2 = "imgs/dice" + randomNumber2 + ".png";
let img2 = document.getElementsByClassName("img2")[0];
img2.setAttribute("src", randomDiceImage2);

let titleText = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
    titleText.textContent = "Player 1 Win!";
} else if (randomNumber1 < randomNumber2) {
    titleText.textContent = "Player 2 Win!";
} else {
    titleText.textContent = "Draw!";
}
