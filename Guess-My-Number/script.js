'use strict';

/*
// Selecting Elements With Javascript and the DOM
// document.querySelector('.message'); // Selecting a class from HTML
let message = document.querySelector('.message');
console.log(message); // This will log in the console the entire HTML element including the tag: <p class="message">Start guessing...</p>

//If I only want to get the content I have to:
console.log(document.querySelector('.message').textContent); // Start guessing...

// We can also set the content of the element
// document.querySelector('.message').textContent = '🎉 Correct Number!;'
message.textContent = '🎉 Correct Number!';
console.log(message.textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// *

// ***** Inputs elements ***** (.value instead of the .textContent)
document.querySelector('.guess').value = 23; // setting the value
console.log(document.querySelector('.guess').value); // getting the value

// Note that the value brought from any input element will be type 'string', even though it's a number value, its type is 'string'. So if we want to operate number we have to convert from 'string' to number.


*/

// ******************** HANDLING CLICK EVENTS *********************
// .addEventListener('typeOfEvent', reaction) method;  the reaction parameter is a functin called event Handler

// const number = Math.random(); // Random decimal number between 0 and 1
// const number = Math.random()*20; // " "  " "   " "   " "   0 and 20 
// Math.trunc(decimalNumber); // Remove the decimal part
// const number = Math.trunc(Math.random() * 20); // Maximun will be 19

// secretNumber is a state variable
let secretNumber = Math.trunc(Math.random() * 20) + 1; // Max 20

let score = 20; // state variable = part of application state (no DOM)
//document.querySelector('.score').textContent;

let highscore = 0;

const displayMessage = message => {
    document.querySelector('.message').textContent = message;
}

const displayScore = score => {
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // When there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔ No number!';
        displayMessage('⛔ No number!');

    // When player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        // document.querySelector('.message').textContent = '🎉 Correct Number!'

        document.querySelector('.number').textContent = secretNumber;

        document.querySelector("body").style.backgroundColor = '#60b347';

        document.querySelector(".number").style.width = '30rem';

        document.querySelector('main').style.color = '#C9373E';

        document.querySelector(".guess").style.display = 'none';
        
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        // highscore = score > highscore ? score : highscore;
        // document.querySelector('.highscore').textContent = highscore;

        // When the guess is wrong
    } else if (guess !== secretNumber)  {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too High!': '📉 Too Low!');
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High!': '📉 Too Low!';
            score --;
            displayScore(score);
            // document.querySelector('.score').textContent = score;
        } else {
            document.querySelector("body").style.backgroundColor = '#C9373E';
            document.querySelector('main').style.color = '#60b347';
            document.querySelector(".guess").style.display = 'none';

            displayMessage('💥You Lose the Game!');
            // document.querySelector('.message').textContent = '💥You Lose the Game!';
            displayScore(0);
            // document.querySelector('.score').textContent = 0;
        }
    }
    //     // When guess is too high
    // } else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📈 Too High!';
    //         score --;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥You Lose the Game!';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // // When guess is too low
    // } else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too Low!';
    //         score --;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥You Lose the Game';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
})
// We do not call the function() later, JavaScript will do it by itself as soon as the even ('click') happens

document.querySelector('.again').addEventListener('click', () => {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    displayMessage('Start guessing...');
    // document.querySelector('.message').textContent = 'Start guessing...';
    displayScore(score);
    // document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').style.display = 'block';
    document.querySelector('main').style.color = '#eee';
});