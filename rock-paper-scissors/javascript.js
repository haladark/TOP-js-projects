console.log("Hello World!");


let computerSelection;
let playerSelection=prompt("Enter your selection.", " ");
playerSelection=playerSelection.toLowerCase();
computerSelection=computerPlay();
document.write("Player selection at the begining: "+playerSelection+"<br> ");
document.write("Computer selection at the begining: "+computerSelection+"<br> ");
playRound();

function computerPlay(){
    let selectOption=["rock", "paper","scissors"];
    let arrayRandom= Math.floor(Math.random() * 3);
    computerSelection= selectOption[arrayRandom];
    return computerSelection;
    
}

function playRound() {

    if (playerSelection === computerSelection) {
        alert ("Tie! Enter again.");

    } else 
        if
         (playerSelection ==="rock" && computerSelection ==="paper")
              {  document.write ("you Lose!! Paper beats Rock");}
        else if (playerSelection ==="rock" && computerSelection ==="scissors")
                {document.write ("you win!! Rock beats scissors");}
        else if (playerSelection ==="paper" && computerSelection ==="rock")
                {document.write("you win!! Paper beats Rock");}
        else if (playerSelection ==="paper" && computerSelection ==="scissors")
                {document.write ("you Lose!! Scissors beat Paper");}
        else if (playerSelection ==="scissors" && computerSelection ==="rock")
                {document.write ("you Lose!! Rock beats Scissors");}
        else if (playerSelection ==="scissors" && computerSelection ==="paper")
                {document.write("you win!! Scissors beats Paper");}
        else
        {document.write("is it here?");
            console.log ("Something went wrong");

            }
    
    
    
    
    /*{
        alert(" this is else");
            switch (playerSelection,computerSelection){
                case (playerSelection ==="rock" && computerSelection ==="paper"):
                    alert ("you Lose!! Paper beats Rock");
                break;
                case (playerSelection ==="rock" && computerSelection ==="scissors"):
                    alert ("you win!! Rock beats scissors");
                break;
                case (playerSelection ==="paper" && computerSelection ==="rock"):
                    alert ("you win!! Paper beats Rock");
                break;
                case (playerSelection ==="paper" && computerSelection ==="scissors"):
                    alert ("you Lose!! Scissors beat Paper");
                break;
                case (playerSelection ==="scissors" && computerSelection ==="rock"):
                    alert ("you Lose!! Rock beats Scissors");
                break;
                case (playerSelection ==="scissors" && computerSelection ==="paper"):
                    alert ("you win!! Scissors beats Paper");
                break;
                default: 
                console.log ("Something went wrong");

            }

            //return result;

            }
            */
}