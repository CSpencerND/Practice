const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if ((userInput === "rock") || 
        (userInput === "paper") || 
        (userInput === "scissors") ||
        (userInput === "bomb")) {
        return userInput;
    }
    else console.log("You fk'd up");
}

const getComputerCoice = () => {
    let n = Math.floor(Math.random() * 3);
    switch (n) {
        case 0:
          return "rock";
        case 1:
          return "paper";
        case 2:
          return "scissors";
        default:
          return "You fk'd up";
    }
}

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "Tie game";
    }
    else if (userChoice === "bomb") {
        return "You win!"
    }
    else if (userChoice === "rock") {
        if (computerChoice === "paper") {
            return "Computer wins";
        }
        else return "You win!";
    }
    else if (userChoice === "paper") {
        if (computerChoice === "scissors") {
            return "Computer wins";
        }
        else return "You win!";
    }
    else if (userChoice === "scissors") {
        if (computerChoice === "rock") {
            return "Computer wins";
        }
        else return "You win!";
    }
}

const playGame = () => {
    let userChoice = getUserChoice("bomb");
    let computerChoice = getComputerCoice();
    if (userChoice === "bomb") {
        console.log("You destroyed the entire universe!")
    }
    else {
        console.log("Player threw " + userChoice);
        console.log("Computer thew " + computerChoice);
        console.log(determineWinner(userChoice, computerChoice));
    }
}

playGame()
