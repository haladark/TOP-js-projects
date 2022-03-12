console.log("Start");


let computerSelection, playerSelection;
let result=1;


game();




function computerPlay(){
    let selectOption=["rock", "paper","scissors"];
    let arrayRandom= Math.floor(Math.random() * 3);
    computerSelection= selectOption[arrayRandom];
    return computerSelection;
    
}

function game(){
    for (let i=1;i<=5;i++) {
        document.write(`<br><br><br>Round ${i} .. <br>`);
        playerSelection=prompt("Enter your selection.", " ");
        playerSelection=playerSelection.toLowerCase();
        computerSelection=computerPlay();
        document.write("Player selection: "+playerSelection+"<br> ");
        document.write("Computer selection: "+computerSelection+"<br>");
        playRound();
        if (result ==1){
            document.write ("You win!! " + playerSelection +" beats " + computerSelection+"<br>");
        }else if (result ==2){ 
            document.write ("You lose!! "+computerSelection+" beats " +playerSelection+"<br>");
        } else if (i<5) {document.write("<br>Tie! play again.<br>");}
        else document.write("<br>Tie!");
    }
    document.write ("<br><br>End of Game!! <br>")
}

function playRound() {

    if (playerSelection === computerSelection)
       {result=0;}
    else if (playerSelection ==="rock" && computerSelection ==="paper")
        {result=2;}
    else if (playerSelection ==="rock" && computerSelection ==="scissors")
        {result=1;}
    else if (playerSelection ==="paper" && computerSelection ==="rock")
        {result=1;}
    else if (playerSelection ==="paper" && computerSelection ==="scissors")
        {result=2;}
    else if (playerSelection ==="scissors" && computerSelection ==="rock")
        {result=2;}
    else if (playerSelection ==="scissors" && computerSelection ==="paper")
        {result=1;}
    else
        document.write("<br>Something went wrong!<br>");
            
    return result;
    
}