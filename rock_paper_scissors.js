
/*
Author: Nicholas Benjamin
Purpose: Demonstrate the use of 
Pseudocode --- 
#1:Begin with a function called getComputerChoice that will randomly return either 
‘Rock’, ‘Paper’ or ‘Scissors’.

#2:Write a function that plays a single round of Rock Paper Scissors. 
The function should take two parameters - the playerSelection and computerSelection - 
and then return a string that declares the winner of the round like so: "
You Lose! Paper beats Rock" tidbit - Make your function’s playerSelection parameter case-insensitive 
(so users can input rock, ROCK, RocK or any other variation).

#3: return the results of this function call, not console.log() them. 
You’re going to use what you return later on, 
so let’s test this function by using console.log to see the results:

#4: Write a NEW function called game(). 
Call the playRound function inside of this one to play a 5 round game 
that keeps score and reports a winner or loser at the end.

#5: At this point you should be using console.log() 
to display the results of each round and the winner at the end.

#6: Use prompt() to get input from the user.
*/
/*
let computer_decision  = getComputerChoice();
let player_decision = getPlayerChoice();


let result  = play(player_decision,computer_decision);
let boool = true;
console.log(computer_decision);
console.log(result);
*/

const bodyContainer = document.createElement('div');
bodyContainer.classList.add('bodyContainer');
document.body.appendChild(bodyContainer);

const container2 = document.createElement('div');
//container2.style.cssText = 'color: blue; background: green; width: 200px; height: 200px';
container2.classList.add('container2');
//container2.style.display = 'none'; //since the display property is set to none you cant see the container 
bodyContainer.appendChild(container2);

let p  = document.createElement('p');
container2.appendChild(p);

const container3 = document.createElement('div');
container3.classList.add('container3');
bodyContainer.appendChild(container3);


let win = 0;
let loss = 0;

let wins = document.createElement('p');
wins.classList.add('wins');

let losses = document.createElement('p');
losses.classList.add('losses');



container2.appendChild(wins); // User wins will be added to container 2
container3.appendChild(losses); // Computer wins will be added to conatiner 3 

console.log(container2);


function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3); //This generates random numbers from the range of 0 to 2 // increas number multipled to increase range  of options 
    let descision; // error missing initializers
    switch (choice) {
        case 2:
            descision = "Scisssors";
            break;
        case 1:
            descision = "Rock";
            break;
        case 0:
            descision = "Paper";
            break;
        }
        return descision;
    }

function getPlayerChoice(decison){
    let choice = decison;
    //choice = choice.toLowerCase();
    return choice;
}

function checkWinner(){
    if(win === 5 && loss < 5){
        p.textContent = "You won!";
        //This is a dom method to create a button called play again which should reset the game 
        const playAgain = document.createElement('button'); //here the play again button is created to restart the game 
        playAgain.textContent = "play agian";
        playAgain.classList.add('playAgain');
        container2.appendChild(playAgain);
        playAgain.addEventListener('click',function(){
            win = 0;
            loss = 0;
            p.textContent = "";
            wins.textContent = "wins:" + win;
            losses.textContent = "cpu wins:" + loss;
            playAgain.style.display = 'none';}
            );   
    }
    else if(loss == 5 && loss > win){
        p.textContent = "You lose!";
        const playAgain = document.createElement('button'); //here the play again button is created to restart the game 
        playAgain.textContent = "play agian";
        playAgain.classList.add('playAgain');
        container2.appendChild(playAgain);
        playAgain.addEventListener('click',function(){
            win = 0;
            loss = 0;
            p.textContent = "";
            wins.textContent = "wins:" + win;
            losses.textContent = "cpu wins:" + loss;
            playAgain.style.display = 'none';}
            );   
        
    }
    else if(loss == 5 && loss === win){
        p.textContent = "It's a tie!";
        const playAgain = document.createElement('button'); //here the play again button is created to restart the game 
        playAgain.textContent = "play agian";
        playAgain.classList.add('playAgain');
        container2.appendChild(playAgain);
        playAgain.addEventListener('click',function(){
            win = 0;
            loss = 0;
            p.textContent = "";
            wins.textContent = "wins:" + win;
            losses.textContent = "cpu wins:" + loss;
            playAgain.style.display = 'none';}
            );   
    }
}

/**Debug below: logic not working for rock*/
function play(player_choice, computer_choice){ 
    
    switch(computer_choice){ // the switch staement wikk compare the computer's choice to the cases
        case "Paper": // if paper  
            if(player_choice === "paper"){ // if player choise is paper out draw
                //console.log("Draw");
                p.textContent = "Draw";
            }
            else if(player_choice === "rock"){
                 //console.log("You lose Paper beats Rock");
                 p.textContent = "You lose Paper beats Rock";
                 loss+=1;
                 console.log(loss);
                 losses.textContent = "cpu wins:" + loss;
                 checkWinner();
                 return false;
            }
            else if(player_choice === "scissors"){
                 //console.log("You win Scissors beats Paper");
                 p.textContent = "You win Scissors beats Paper";
                 win+=1;
                 console.log(win);
                 wins.textContent = "wins:" + win;
                 checkWinner();
                 return true
            }
            else{
                 //console.log("Incorrect input");
                 p.textContent = "Incorrect input";
            }
            break;

          /**You must write a case for Rock */
        case "Rock": // if Rock  
            if(player_choice === "rock"){ // if player choise is paper out draw
                p.textContent = "Draw";
            }
            else if(player_choice === "paper"){
                 p.textContent ="You win Paper bears Rock";
                 win+=1;
                 console.log(win);
                 wins.textContent = "wins:" + win;
                 checkWinner();
                 return true;
            }
            else if(player_choice === "scissors"){
                 p.textContent = "you lose rock beats Scissors";
                 loss+=1;
                 console.log(loss);
                 losses.textContent = "cpu wins:" + loss;
                 checkWinner();
                 return false;
            }
            else{
                p.textContent = "Incorrect input";
            }
            break;

        case "Scisssors": // if Rock  
            if(player_choice === "rock"){ // if player choise is paper out draw
                p.textContent = "You win Rock beats Scissors";
                win+=1;
                console.log(win);
                wins.textContent = "wins:" + win;
                checkWinner();
                return true;
            }
            else if(player_choice === "paper"){
                 p.textContent = "You lose Scissors beats Paper";
                 loss+=1;
                 console.log(loss);
                 losses.textContent = "cpu wins:" + loss;
                 checkWinner();
                 return false;
            }
            else if(player_choice === "scissors"){
                p.textContent = "Draw";
            }
            else{
                p.textContent = "Incorrect input";
            }
            break;
          /**You must write a case for Scissors */
        }
    }

    function playRound(playerChoice, computerChoice){
        play(playerChoice,computerChoice);
    }

    //The section below shows the different choices between rock, paper and scissors 
        const rock = document.querySelector('#rock');
        rock.addEventListener('click',function(){
        let playerDecison = getPlayerChoice('rock'); // Here the player's choice is already set before round is played 
        let computerDecision = getComputerChoice(); 
        playRound(playerDecison,computerDecision);
        });

        const paper = document.querySelector('#paper');
        paper.addEventListener('click',function(){
        let playerDecison = getPlayerChoice('paper'); // Here the player's choice is already set before round is played 
        let computerDecision = getComputerChoice();
        playRound(playerDecison,computerDecision);
        });

        const scissors = document.querySelector('#scissors');
        scissors.addEventListener('click',function(){
        let playerDecison = getPlayerChoice('scissors'); // Here the player's choice is already set before round is played 
        let computerDecision = getComputerChoice();
        playRound(playerDecison,computerDecision);
        });
        
    
        
        



        

    


