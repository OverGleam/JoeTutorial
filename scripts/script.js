const gameMaster = {
    firstName: 'Joseph',
    lastName: 'Alforque',
    age: 21,
    gender: 'Male',
    Hey() {
        console.log("Hello its me!");
    }
}
localStorage.setItem('gameMaster', JSON.stringify(gameMaster));


let score = JSON.parse(localStorage.getItem('Score'));

if (score === null) {
    score = {
        win: 0,
        lose: 0,
        tie: 0
    }
}

function makeMove(YourMoveResult) {
    let computerMoveResult = '';

    computerMove = Math.random();

    result = '';

    if (computerMove >= 0 && computerMove <= 1 / 3) {
        computerMoveResult = 'Rock'
    }
    else if (computerMove > 1 / 3 && computerMove <= 2 / 3) {
        computerMoveResult = 'Paper'
    }
    else {
        computerMoveResult = 'Scissors'
    }

    if (YourMoveResult === 'Rock' && computerMoveResult === 'Scissors') {
        result = 'win';
        displayResult()
    }
    else if (YourMoveResult === 'Rock' && computerMoveResult === 'Paper') {
        result = 'lose';
        displayResult()
    }
    else if (YourMoveResult === 'Paper' && computerMoveResult === 'Rock') {
        result = 'win';
        displayResult()
    }
    else if (YourMoveResult === 'Paper' && computerMoveResult === 'Scissors') {
        result = 'lose';
        displayResult()
    }
    else if (YourMoveResult === 'Scissors' && computerMoveResult === 'Paper') {
        result = 'win';
        displayResult()
    }
    else if (YourMoveResult === 'Scissors' && computerMoveResult === 'Rock') {
        result = 'lose';
        displayResult()

    }
    else {
        result = 'tie';
        score.tie += 1;
        alert('Tie\n' + `Win: ${score.win} Lose: ${score.lose} Tie: ${score.tie}`);
    }

    function displayResult() {
        if (result === 'win') {
            score.win += 1;
            alert('You win, Computer Loses!\n' + `Win: ${score.win} Lose: ${score.lose} Tie: ${score.tie}`);
            confetti();
        } else {
            score.lose += 1;
            alert('You Lose, Computer Wins!\n' + `Win: ${score.win} Lose: ${score.lose} Tie: ${score.tie}`);
        }
    }

    function displayMoves() {
        if (result === 'win') {
            document.querySelector('.result').innerHTML = `<div id="scroll-container">
            <div id="scroll-text">You ${result.toUpperCase()}!<div>
            </div>`
        }
        else {
            document.querySelector('.result').innerHTML = `${result.charAt(0).toUpperCase() + result.slice(1)}!`
        }

        document.querySelector('.display-moves').innerHTML = `Your pick <img class="move-icon-result" src="images/${YourMoveResult}.svg"> <img class="move-icon-result2" src="images/${computerMoveResult}.svg"> Computer pick`
    }

    localStorage.setItem('Score', JSON.stringify(score));
    updateScores();
    displayMoves();
}

function updateScores() {
    document.querySelector('.js-scores').innerHTML = `Win: ${score.win} Lose: ${score.lose} Tie: ${score.tie}`;
}

function resetScore() {
    localStorage.removeItem('Score');
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
}