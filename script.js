// 'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correctly Number!';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random() * 20 + 1);

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number ⛔';
    displayMessage('No Number ⛔');
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if(score > 1){
    document.querySelector('.message').textContent =
      guess > secretNumber ? 'To high!' : 'To low!';
    score--;
    document.querySelector('.score').textContent = score;
   } else {
    // document.querySelector('.message').textContent = 'You lost the game!';
    displayMessage('You lost the game!');
    document.querySelector('.score').textContent = 0;
    } 
  }
  
  // } else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'To high!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = 'You lost the game! 😪';
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = 'To low!';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.score').textContent = 'You lost the game! 😪';
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20 + 1);

  document.querySelector('.number').textContent = '?';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
