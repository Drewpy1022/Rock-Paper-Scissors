// Variables for choices / win or lose quotes
let playerSelection = prompt("Rock, Paper or Scissors?");
let win = "You win!";
let lose = "You lost, try again by refreshing your page.";
let tie = "It's a tie, try again.";

// Select a random choice from the array
let choices = ['Rock','rock', 'ROCK', 'paper', 'Paper', 'PAPER', 'Scissors','scissors', 'SCISSORS'];
let randChoice = choices[Math.floor(Math.random()*choices.length)];
let computerSelection = randChoice
// Show the random choice
console.log(randChoice);
// Checks to see what you selected and runs it against the computerChoice which is a random choice from the array 'choices'
function game(){
    //rock
    if ((playerSelection === 'rock' && computerSelection === 'paper') || (playerSelection === 'rock' && computerSelection === 'Paper')||(playerSelection === 'rock' && computerSelection === 'PAPER')){
        alert(lose);
    } else if ((playerSelection === 'rock' && computerSelection ==='rock')||(playerSelection === 'rock' && computerSelection === 'ROCK')||(playerSelection === 'rock' && computerSelection === 'Rock')){
        alert(tie);
    } else if ((playerSelection == 'rock' && computerSelection === 'scissors')||(playerSelection === 'rock' && computerSelection === 'Scissors')||(playerSelection === 'rock' && computerSelection === 'SCISSORS')){
        alert(win);
    } 
    //scissors
    if ((playerSelection === 'scissors' && computerSelection === 'paper') || (playerSelection === 'scissors' && computerSelection === 'Paper')||(playerSelection === 'scissors' && computerSelection === 'PAPER')){
        alert(win);
    } else if ((playerSelection === 'scissors' && computerSelection ==='rock')||(playerSelection === 'scissors' && computerSelection === 'ROCK')||(playerSelection === 'scissors' && computerSelection === 'Rock')){
        alert(lose);
    } else if ((playerSelection == 'scissors' && computerSelection === 'scissors')||(playerSelection === 'scissors' && computerSelection === 'Scissors')||(playerSelection === 'scissors' && computerSelection === 'SCISSORS')){
        alert(tie);
    } 
    //paper
    if ((playerSelection === 'paper' && computerSelection === 'paper') || (playerSelection === 'paper' && computerSelection === 'Paper')||(playerSelection === 'paper' && computerSelection === 'PAPER')){
        alert(tie);
    } else if ((playerSelection === 'paper' && computerSelection ==='rock')||(playerSelection === 'paper' && computerSelection === 'ROCK')||(playerSelection === 'paper' && computerSelection === 'Rock')){
        alert(win);
    } else if ((playerSelection == 'paper' && computerSelection === 'scissors')||(playerSelection === 'paper' && computerSelection === 'Scissors')||(playerSelection === 'paper' && computerSelection === 'SCISSORS')){
        alert(lose);
    } 
    
}

game();