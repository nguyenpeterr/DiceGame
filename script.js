'use strict';

// Selecting elements
const scoreElement0 = document.getElementById('score--0');
const scoreElement1 = document.getElementById('score--1');

const currentElement0 = document.getElementById('current--0');
const currentElement1 = document.getElementById('current--1');

const playerElement0 = document.querySelector('.player--0');
const playerElement1 = document.querySelector('.player--1');

const diceElement = document.querySelector('.dice');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, activeGame;

const init = function() {
    scoreElement0.textContent = 0;
    scoreElement1.textContent = 0;
    diceElement.classList.add('hidden');

    currentScore = 0;
    activePlayer = 0;
    activeGame = true;
    scores = [0, 0];

    playerElement0.classList.remove('player--winner');
    playerElement1.classList.remove('player--winner');
    playerElement0.classList.add('player--active');
    playerElement1.classList.remove('player--active');
    scoreElement0.textContent = 0;
    scoreElement1.textContent = 0;
    currentElement0.textContent = 0;
    currentElement1.textContent = 0;
};

init();

const endTurn = function() {
    // Reset current score
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    // End turn and switch layout view
    activePlayer = activePlayer === 0 ? 1 : 0;
    playerElement0.classList.toggle('player--active');
    playerElement1.classList.toggle('player--active');
}

// Rolling dice functionality
btnRoll.addEventListener('click', function() {
    if (activeGame) {
        // Generate a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // Display the dice
        diceElement.classList.remove('hidden');
        diceElement.src = `dice-${dice}.png`;

        // Check if the dice roll is 1
        if (dice !== 1) {
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // End turn
            endTurn();
        }
    }
});

btnHold.addEventListener('click', function() {
    if (activeGame) {
        // Add current score to an array to store scores and display it
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        //Check if the score is >= 100
        if (scores[activePlayer] >= 100) {
            activeGame = false;
            diceElement.classList.add('hidden');
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            // End turn
            endTurn();
        }
    }
});

btnNew.addEventListener('click', init);