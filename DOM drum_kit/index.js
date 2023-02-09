// Detecting button press
const numberOfDrumsButton = document.querySelectorAll(".drum").length;
for (let i = 0; i < numberOfDrumsButton; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        let buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// Detecting key press
document.addEventListener("keydown", (event) => {
    key = event.key;
    makeSound(key);
    buttonAnimation(key);
});

function makeSound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            let crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            let kickBase = new Audio("sounds/kick-bass.mp3");
            kickBase.play();
            break;
        case "l":
            let snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default:
            console.log(key);
    }
}

function buttonAnimation(key) {
    let activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 100);
}
