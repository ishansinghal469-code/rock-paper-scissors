let boxes = document.querySelectorAll(".box");
let you = document.querySelector("#you");
let comp = document.querySelector("#comp");
let reset=document.querySelector('#reset');

let yourScore = 0;
let compScore = 0;

boxes.forEach(box => {
    box.addEventListener('click', () => {
        let yours = box.innerText;
        let compChoice = getComputerChoice();

        console.log("You:", yours);
        console.log("Computer:", compChoice);

        if (
            (yours === "ROCK" && compChoice === "PAPER") ||
            (yours === "PAPER" && compChoice === "SCISSORS") ||
            (yours === "SCISSORS" && compChoice === "ROCK")
        ) {
            compScore++;
        }
        else if (yours === compChoice) {
            // draw → do nothing
        }
        else {
            yourScore++;
        }

        // update UI
        you.innerText = yourScore;
        comp.innerText = compScore;
    });
});

function getComputerChoice(){
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    return choices[Math.floor(Math.random() * choices.length)];
}
reset.addEventListener('click', () => {
    yourScore = 0;
    compScore = 0;

    console.log(yourScore, compScore); // should print 0 0

    you.innerText = "0";
    comp.innerText = "0";
});