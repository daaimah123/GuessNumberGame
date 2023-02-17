'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}
const setNumber = function(number){
    document.querySelector('.number').textContent = number;
}
const setNumberStyleWidth = function(width){
    document.querySelector('.number').style.width = width;
}
const setBackgroundColor = function(color){
    document.querySelector('body').style.backgroundColor = color;
}
// reset game from again button
document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    setBackgroundColor('black');
    displayMessage('Start guessing...');
    setNumber('?');
    setNumberStyleWidth('15rem');
})

//check number against secret number
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
    // if no number
    if (!guess){
        displayMessage('⛔️ No Number!');
    // number is same as secret number
    } else if (guess === secretNumber){
        displayMessage('🎉 Correct Number!');
        setBackgroundColor('green');
        setNumber(secretNumber);
        setNumberStyleWidth('30rem');
        if (score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    // number is not secretNumber
    } else if (guess !== secretNumber){
        if (score > 1){
            displayMessage(guess > secretNumber ? '📈Too High' : '📉Too Low');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('💥 You lose');
            document.querySelector('.score').textContent = 0;
        }
    }
})