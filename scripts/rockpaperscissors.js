let score = JSON.parse(localStorage.getItem('Score'));

if (score === null) {
    score = {
        win: 0,
        lose: 0,
        tie: 0
    }
}

updateScores();

document.querySelector('.js-rock-button').addEventListener('click', () => { makeMove('Rock') });
document.querySelector('.js-paper-button').addEventListener('click', () => { makeMove('Paper') });
document.querySelector('.js-scissors-button').addEventListener('click', () => { makeMove('Scissors') });

document.querySelector('.js-reset-button').addEventListener('click', () => {
    resetScore();
    updateScores();
    document.querySelector('.display-moves').innerHTML = '';
    document.querySelector('.result').innerHTML = '';
});

function makeMove(YourMoveResult) {
    const moves = ['Rock', 'Paper', 'Scissors'];
    const computerMoveResult = moves[Math.floor(Math.random() * 3)];

    const results = {
        'RockScissors': 'win',
        'RockPaper': 'lose',
        'PaperRock': 'win',
        'PaperScissors': 'lose',
        'ScissorsPaper': 'win',
        'ScissorsRock': 'lose',
    };

    const result = results[YourMoveResult + computerMoveResult] || 'tie';


    if (result === 'win') {
        score.win += 1;
        confetti();
    } else if (result === 'lose') {
        score.lose += 1;
    } else {
        score.tie += 1;
    }

    document.querySelector('.result').innerHTML = result === 'win'
        ? `<div id="scroll-container"><div id="scroll-text">You ${result.toUpperCase()}!<div></div>`
        : `${result.charAt(0).toUpperCase() + result.slice(1)}!`;

    document.querySelector('.display-moves').innerHTML = `Your pick <img class="move-icon-result" src="images/${YourMoveResult}.svg"> <img class="move-icon-result2" src="images/${computerMoveResult}.svg"> Computer pick`;

    localStorage.setItem('Score', JSON.stringify(score));
    updateScores();
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


function myMove() {
    const moves = ['Rock', 'Paper', 'Scissors'];
    return moves[Math.floor(Math.random() * moves.length)];
}

let isAutoPlaying = false;
let intervalId = null;
function autoPlay() {
    const autoplayButton = document.querySelector('.autoplay-button');

    if (!isAutoPlaying) {
        intervalId = setInterval(() => makeMove(myMove()), 1000);
        autoplayButton.classList.add('autoplay-on');
    } else {
        clearInterval(intervalId);
        autoplayButton.classList.remove('autoplay-on');
    }

    isAutoPlaying = !isAutoPlaying;
}
document.querySelector('.autoplay-button').addEventListener('click', () => {
    autoPlay()
})
