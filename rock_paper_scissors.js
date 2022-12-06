console.log("Hello World");
console.log("This javascript script is working ");

/*
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


function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3); //This generates random numbers from the range of 0 to 2
    switch (choice) {
        case 2:
            return "Scisssors";
            break;
        case 1:
            return "Paper";
            break;
        case 0:
            return "Rock";
            break;
        }
    }

