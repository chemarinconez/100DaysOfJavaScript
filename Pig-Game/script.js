'use strict';

// Selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1'); //Another and a faster way to select id elements
const diceEl = document.querySelector('.dice');

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

// const number = () => Math.trunc(Math.random() * 6) + 1;

// console.log(number());