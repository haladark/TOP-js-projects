console.log("Start");
let computerSelection, playerSelection='0';
let result=1;
let  player=0, computer=0;
var winner = "it's a tie!";

const container = document.querySelector('.container');


var rock= document.querySelector('#rock');
var paper= document.querySelector('#paper');
var scissors= document.querySelector('#scissors');


var gameResult= document.createElement('div');


//for(let i=0;i<10;i++){
    game();


    //}

gameResult.classList.add('gameResult');
gameResult.textContent=`In this round ${winner}`;
container.appendChild(gameResult);


function computerPlay(){
    let selectOption=["rock", "paper","scissors"];
    let arrayRandom= Math.floor(Math.random() * 3);
    computerSelection= selectOption[arrayRandom];
    return computerSelection;
    
}

function game(){


    rock.addEventListener('click',function(){playerSelection='rock'; playRound()});
    paper.addEventListener('click',function(){playerSelection='paper';playRound()});
    scissors.addEventListener('click',function(){playerSelection='scissors';playRound()});
}

function playRound() {
    computerSelection=computerPlay();

    var computerChoice= document.createElement('div');
    computerChoice.classList.add('computerChoice');
    computerChoice.textContent = `Computer Selected: ${computerSelection}`;
    container.appendChild(computerChoice);

    var playerChoice = document.createElement('div');
    playerChoice.classList.add('playerChoice');
    playerChoice.textContent = `You selected: ${playerSelection}`;
    container.appendChild(playerChoice);

    if (playerSelection === computerSelection)
       {result=0; console.log('tie!!');}
    else if (playerSelection ==="rock" && computerSelection ==="paper")
        {result=2; computer++;}
    else if (playerSelection ==="rock" && computerSelection ==="scissors")
        {result=1; player++;}
    else if (playerSelection ==="paper" && computerSelection ==="rock")
        {result=1;player++;}
    else if (playerSelection ==="paper" && computerSelection ==="scissors")
        {result=2; computer++;}
    else if (playerSelection ==="scissors" && computerSelection ==="rock")
        {result=2; computer++;}
    else if (playerSelection ==="scissors" && computerSelection ==="paper")
        {result=1; player++;}
    else
    console.log('some thing is wrong');
    console.log(player);
    console.log(computer);
    if(player>=5||computer>=5){

    if (player>computer){
        winner='you won the game!';
        console.log("you won the game!!!!");
    }else {
        winner='you lost the game!';
        console.log("you lost the game!");}
    }else return;
}