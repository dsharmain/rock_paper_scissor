console.log("Hello");
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}
//console.log(getComputerChoice());

//console.log(playerSelection);

function playRound() {
    let playerSelection = (prompt("Choose from Rock Paper or Scissors")).toUpperCase();
    let computerSelection = getComputerChoice();
    let playerSelected;
    let computerSelected;
    switch(playerSelection) {
        case "ROCK":
            playerSelected = 0;
            break;
        case "PAPER":
            playerSelected = 2;
            break;
        case "SCISSORS":
            playerSelected = 1;
            break;
    }
    switch(computerSelection) {
        case 0:
            computerSelected = "ROCK";
            break;
        case 2:
            computerSelected = "PAPER";
            break;
        case 1:
            computerSelected = "SCISSORS";
            break;
    }
    if (playerSelected === computerSelection) {
        console.log("It's a Tie");
        return "tie";
    } else if(playerSelected === 0 && computerSelection === 2){
        console.log("You Lose! Paper beats Rock");
        return "lose";
    } else if (playerSelected === 1 && computerSelection === 0){
        console.log("You Lose! Rock beats Scissors");
        return "lose";
    } else if (playerSelected === 2 && computerSelection === 1) {
        console.log("You Lose! Scissors beats Paper");
        return "lose";
    } else {
        console.log("You Win!!! " + playerSelection + " beats " + computerSelected);
        return "win";
    }
}

function game() {
    let tie = 0;
    let lose = 0;
    let win = 0;
    // for(let i = 0; i < 5; i++) {
    //     switch(playRound()) {
    //         case "tie":
    //             tie++;
    //             break;
    //         case "lose":
    //             lose++;
    //             break;
    //         case "win":
    //             win++;
    //             break;
    //     }
    //     //console.log("win :" + win);
    //     //console.log("lose :" + lose);
    // }
    if (win > lose) {
        console.log("You are the winner after 5 rounds of the game!");
    } else if (lose > win) {
        console.log("Computer won after the 5 rounds.")
    } else {
        console.log("Its a tie after 5 rounds.")
    }
}
game();