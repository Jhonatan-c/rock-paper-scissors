const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

const TIE = 0;
const WIN = 1;
const LOST = 2;

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultText = document.getElementById("start-text");
const userImg = document.getElementById("user-img");
const machineImg = document.getElementById("machine-img");

rockBtn.addEventListener("click", ()=>{
    play(ROCK);
});
paperBtn.addEventListener("click", ()=>{
    play(PAPER);
});
scissorsBtn.addEventListener("click", ()=>{
    play(SCISSORS);
});

function play(userOption){

    resultText.innerHTML = "Chossing!";

    setTimeout(function(){
        const machineOption = calcMachineOption();
        const result = calcResul(userOption, machineOption);

        switch(result){
            case TIE:
                resultText.innerHTML = "You have tied! 😲";
                break;
            case WIN:
                resultText.innerHTML = "You win! 🥳";
                break;
            case LOST:
                resultText.innerHTML = "You lost! 😢";
                break;
        }
    }, 1000);
}

function calcMachineOption(){
    const number = Math.floor(Math.random() * 3);
    switch (number) {
        case 0:
            return ROCK;
        case 1:
            return PAPER;
        case 2: 
            return SCISSORS;
    }
}

function calcResul(userOption, machineOption){
    if(userOption === machineOption){
        return TIE;

    }else if(userOption === ROCK){

        if(machineOption === PAPER) return LOST;
        if(machineOption === SCISSORS) return WIN;

    }else if(userOption === PAPER){

        if(machineOption === PAPER) return LOST;
        if(machineOption === ROCK) return WIN;

    }else if(userOption === SCISSORS){

        if(machineOption === ROCK) return LOST;
        if(machineOption === PAPER) return WIN;
    }
}