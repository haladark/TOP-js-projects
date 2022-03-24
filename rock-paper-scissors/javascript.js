const selectionButtons = document.querySelectorAll('[data-selection]');
const finalColumn = document.querySelector('[data-final-column]');
const computerScoreSpan = document.querySelector('[data-computer-score]');
const yourScoreSpan = document.querySelector('[data-your-score]');

const SELECTIONS = [  //all possible selections
    {
        name: 'rock',
        emoji: '✊',
        beats: 'scissors',
    },
    {
        name: 'paper',
        emoji: '🤚',
        beats: 'rock',
    },
    {
        name: 'scissors',
        emoji: '✌️',
        beats: 'paper',
    }

]



selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e =>{
        const selectionName = selectionButton.dataset.selection;
        const selection = SELECTIONS.find(selection => selection.name ===selectionName);
        makeSelection(selection)
    })
})

function makeSelection(selection){
    computerSelection=randomSelection();
    const yourWinner = isWinner(selection, computerSelection);
    const computerWinner = isWinner(computerSelection, selection);
    
    addSelectionResult(computerSelection, computerWinner);
    addSelectionResult(selection, yourWinner);

    if  (yourWinner) incrementScore(yourScoreSpan);
    if (computerWinner) incrementScore(computerScoreSpan);
    var gameWinner = "";//
    if(yourScoreSpan.innerText ==='5') {
        gameWinner = "YOU WON!!"
    };
    if (computerScoreSpan.innerText === '5') {
        gameWinner = "YOU LOST!!"
    };
    gameResult(gameWinner);
    /*gameWinner='';
    yourScoreSpan=0;
    console.log(yourScoreSpan);*/
}


function incrementScore(scoreSpan){
    scoreSpan.innerText = parseInt(scoreSpan.innerText)+1;

}

function gameResult(resultStr){
    const finalResult = document.querySelector('[data-game-result]');
    const div = document.createElement('div');
    div.classList.add('game-result');
    div.innerText = (resultStr);
    finalResult.appendChild(div);
    

}

function addSelectionResult(selection,winner){
    const div = document.createElement('div');
    div.innerText = (selection.emoji);
    div.classList.add('result-selection');
    if(winner) div.classList.add('winner');
    finalColumn.after(div);

}


function isWinner(selection,opponentSelection){
    return selection.beats === opponentSelection.name;

}

function randomSelection () {

    const randomIndex = Math.floor(Math.random()* SELECTIONS.length);
    return SELECTIONS[randomIndex];
}