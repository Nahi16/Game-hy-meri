let secretNumber = Math.trunc( Math.random() *20) + 1;
let score = 20;
let = highscore = 0;
document.querySelector('.check_btn').addEventListener('.click',function (){
const guess = document.querySelector('.guess').value;
if (!guess) {
    document.querySelector('.message').textContent = '!No number';
}else if (guess > secretNumber) {
    if (score > 1) {
        document.querySelector('.message').textContent = 'Too high';
        score--;
        document.querySelector('.score').textContent = score;
    }else {
        document.querySelector('.message').textContent = 'you lost the game';
    }
}else if (guess < secretNumber) {
    if (score > 1) {
        document.querySelector('.message').textContent = 'Too low';
        score--;
        document.querySelector('.score').textContent = score;
    }else {
        document.querySelector('.message').textContent = 'You lost the Game'
    }
} else if (guess == secretNumber) { 
    document.querySelector('.message').textContent = 'Correct Answer';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '20rem';
    if (highscore > score) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
}
});
document.querySelector('.again_btn').addEventListener ('.click',function(){
    const score = 20;
let guess = Math.trunc(Math.randum() *20) + 1;
    document.querySelector('.message').textContent = 'Start Guessing';
    document.querySelector('score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});
