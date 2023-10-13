/*
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
*/
const startBtn = document.querySelector(".start-btn");
const timer = document.querySelector(".timer");
const leaderBoard = document.querySelector(".leaderBoard");
const quiz = document.querySelector(".quizSection");
const homePage = document.querySelector(".home");

let secondsLeft = 80;

function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.innerHTML = "Time: " + secondsLeft;
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        alert("Failed");
      }
    }, 1000);
}

startBtn.onclick = () => {
  quiz.classList.add('active');
  timer.classList.add('active');
  homePage.classList.add('disabled');
  setTime();
}
