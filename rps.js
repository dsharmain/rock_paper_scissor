console.log("Hello");
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
function getComputerChoice() {
    return Math.floor(Math.random() * 3);
}
const player = document.querySelector("#player");
const computer = document.querySelector("#computer");
const ties = document.querySelector("#ties");

//console.log(getComputerChoice());

//console.log(playerSelection);

function playRound(playerSelection) {
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
    // let rounds = 0;
    rock.addEventListener('click', () => {
        console.log("You selected "+rock.id.toUpperCase());
        switch(playRound(rock.id.toUpperCase())) {
            case "tie":
                tie++;
                ties.textContent = "Number of ties "+tie;
                break;
            case "lose":
                lose++;
                computer.textContent = "Computer Score "+lose;
                break;
            case "win":
                win++;
                player.textContent = "Player Score "+win;
                break;
        }
        // rounds++;
        if (win > 4 || lose > 4){
            setTimeout(() => {
                if (win > lose) {
                    alert("You are the winner!");
                } else {
                    alert("Computer won.");
                }
            win = 0;
            lose = 0;
            tie = 0;
            ties.textContent = "Number of ties "+tie; 
            computer.textContent = "Computer Score "+lose;
            player.textContent = "Player Score "+win;
            }, 0);
        }

        // console.log("Rock rounds :"+rounds);
    });
    
    paper.addEventListener('click', () => {
        console.log("You selected "+paper.id.toUpperCase());
        switch(playRound(paper.id.toUpperCase())) {
            case "tie":
                tie++;
                ties.textContent = "Number of ties "+tie;
                break;
            case "lose":
                lose++;
                computer.textContent = "Computer Score "+lose;
                break;
            case "win":
                win++;
                player.textContent = "Player Score "+win;
                break;
        }
        // rounds++;
        if (win > 4 || lose > 4){
            setTimeout(() => {
                if (win > lose) {
                    alert("You are the winner!");
                } else {
                    alert("Computer won.");
                }
            win = 0;
            lose = 0;
            tie = 0;
            ties.textContent = "Number of ties "+tie; 
            computer.textContent = "Computer Score "+lose;
            player.textContent = "Player Score "+win;
            }, 0);
        }
    });
    
    scissors.addEventListener('click', () => {
        console.log("You selected "+scissors.id.toUpperCase());
        switch(playRound(scissors.id.toUpperCase())) {
            case "tie":
                tie++;
                ties.textContent = "Number of ties "+tie;
                break;
            case "lose":
                lose++;
                computer.textContent = "Computer Score "+lose;
                break;
            case "win":
                win++;
                player.textContent = "Player Score "+win;
                break;
        }
        // rounds++;
        if (win > 4 || lose > 4){
            setTimeout(() => {
                if (win > lose) {
                    alert("You are the winner!");
                } else {
                    alert("Computer won.");
                }
            win = 0;
            lose = 0;
            tie = 0;
            ties.textContent = "Number of ties "+tie; 
            computer.textContent = "Computer Score "+lose;
            player.textContent = "Player Score "+win;
            }, 0);
        }
    });
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
    
    // console.log("rounds :" + rounds);
    
}
game();