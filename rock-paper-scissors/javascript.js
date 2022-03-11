console.log("Hello World!");


let computerSelection="computer can't select!!!";

function computerPlay(){
    let selectOptions=["Rock", "Paper","Scissor"];
    computerSelection= Math.floor(Math.random() * 3);
    console.log(computerSelection);
    
}