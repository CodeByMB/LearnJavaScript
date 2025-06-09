'use strict';
//TODO
//BUG
//FIXME
//TEST

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number!';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// console.log(document.querySelector('.guess').value);

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
//TEST Shows secret number on the screen, remove before launch.
//document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'You guessed it!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.highscore').textContent = score;
  } else if (guess > secretNumber) {
    if (score > 0){
      document.querySelector('.message').textContent = 'To high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You lost the game!';
    }
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'To low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
