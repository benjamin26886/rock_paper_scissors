
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


const container = document.createElement('div');
container.style.cssText = 'color: blue; background: green; width: 200px; height: 200px';
document.body.appendChild(container);

let p  = document.createElement('p');
container.appendChild(p);



console.log(container);



function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3); //This generates random numbers from the range of 0 to 2 // increas number multipled to increase range  of options 
    let descision; // error missing initializers
    switch (choice) {
        case 2:
            descision = "Scisssors";
            break;
        case 1:
            descision= "Rock";
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
                 return false;
            }
            else if(player_choice === "scissors"){
                 //console.log("You win Scissors beats Paper");
                 p.textContent = "You win Scissors beats Paper";
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
                 return true;
            }
            else if(player_choice === "scissors"){
                 p.textContent = "you lose rock beats Scissors";
                 return false;
            }
            else{
                p.textContent = "Incorrect input";
            }
            break;

        case "Scisssors": // if Rock  
            if(player_choice === "rock"){ // if player choise is paper out draw
                p.textContent = "You win Rock beats Scissors";
                return true;
            }
            else if(player_choice === "paper"){
                 p.textContent = "You lose Scissors beats Paper";
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

/*
    function game(player_decision){
        let win = 0;
        let loss = 0;
        let round = 0;
        
        for(let round = 1; round < 5; round++){
            //let player_decision = getPlayerChoice();
            let computer_decision  = getComputerChoice();
            let result = play(player_decision,computer_decision);
            if(result === true){
                win+=1;
                //console.log("Round: " + round + " Player 1 wins")
            }
            else if(result === false){
                loss+=1;
                //console.log("Round: " + round + " Computer wins")
            }
            //console.log(round);
        }  
        //console.log('You have won ' + win + ' times');
        //console.log('You have lost ' + loss + ' times');
        const message = document.createElement('p');
        if(round >=5 && win > loss){
            message.textContent = 'You have won ' + win + ' times';
        }
        else if(round >=5&& loss > win){
            messgae.textContent = 'You have lost ' + loss + ' times';
        }
        else if(round === 5 && loss === win){
            message.textContent = "Draw"
        }
        
        container.appendChild(message);
        const lostMessgae  = document.createElement('p');
    }
    */


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
        
        //
        
        



        

    


