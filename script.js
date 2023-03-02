'use strict';

// Selecting elements
const scoreElement0 = document.getElementById('score--0');
const scoreElement1 = document.getElementById('score--1');
const currentElement0 = document.getElementById('current--0');
const currentElement1 = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Startup Conditions
scoreElement0.textContent = 0;
scoreElement1.textContent = 0;
diceElement.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling dice functionality
btnRoll.addEventListener('click', function() {
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
        // Reset current score
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        // End turn
        activePlayer = activePlayer === 0 ? 1 : 0;
        
    }
})