// write interval 
// prmpt
// for loop
// function incorrectly -5
// reach 0 = game over
// when game is over then you can log score local storage
//
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
const startBtn = document.querySelector('start-btn')
const timer = document.querySelector(".time");
const main = document.getElementById("main");
let secondsLeft = 120;

startBtn.onclick = () => {
    quizSection.classList.add('active');
}
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + "Time: ";
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        sendMessage("Time's Up");
      }
  
    }, 1000);
}
    // Function to create and append colorsplosion image
function sendMessage() {
    timer.textContent = " ";
    const  = document.createElement("");
    .setAttribute("", "");
    .appendChild();
  
  }

  setTime()