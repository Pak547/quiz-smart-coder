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
const quizContainer = document.querySelector('.quizContainer')

const question = document.querySelector(".questionText");
const options = document.querySelectorAll(".option");
const scoreText = document.querySelector(".score");
const nextBtn = document.querySelector(".next");
const putQuestionsHere = document.querySelector(".emptyDiv");

let secondsLeft = 80;
let questionCount = 0;
let answers = true;
let userScore = 0;
let countdown;

var questionArray = [
  {
    num: 1,
    question:"CSS is an acronym for what?",
    options:[ 
      "A. Cascade Some Source",
      "B. Company Sample Style",
      "C. Cascading Style Sheets",
      "D. Cool Simplified Sauce"
    ],
    answer: "C. Cascading Style Sheets"
  },
  {
    num: 2,
    question:"What does Luigi (our instructor) preach we look for if  we don't know something?",
    options:[
      "A. ChatGPT",
      "B. Documentation",
      "C. Reddit",
      "D. Jesus"
    ],
    answer: "B. Documentation"
},
{
  num: 3,
  question:"Where is the correct place to insert a Javascript",
  options:[
    "A. The <head> section",
    "B. Both the <head> section and the <body> section are correct",
    "C. The <body> section",
    "D. It automatically links"
  ],
  answer: "B. Both the <head> section and the <body> section are correct"
},
{
  num: 4,
  question:"The 'external' Javascript file must contain the <script> tag",
  options:[
    "A. True",
    "B. False",
    "C. Sometimes",
    "D. Only in Python"
  ],
  answer: "B. False"
},
{
  num: 5,
  question:"How do you call a function named 'callBackFunction'?",
  options:[
    "A. call function callBackFunction();",
    "B. callBackFunction();",
    "C. call callBackFunction();",
    "D. Function(callBack);"
  ],
  answer:"B .callBackFunction();"
}
]

// function for decrementing timer 
function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timer.innerHTML = "Time: " + secondsLeft;
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        return leaderBoard;
      }
    }, 1000);
}

// function to show each question and potential answers
function showQuestions(index,) {
  let questionCount = 0;
  questionCount++; // Move the increment statement here
  const questionText = document.querySelector('.questionText');
  // changes the question number and question with each click
  questionText.textContent = `${questionArray[index].num}. ${questionArray[index].question}`;
  let optionTag = '';
// makes sure every since option is the questionarray is being properly input
  for (let i = 0; i < questionArray[index].options.length; i++) {
    optionTag += `<div class="option"><span data-number="${i+1}">${questionArray[index].options[i]}</span></div>`;
  }
  putQuestionsHere.innerHTML = optionTag;
}


function optionSelected(answer) {
  let userAnswer = answer.textContent;
  let correctAnswer = questionArray[questionCount].answer;
  let allOptions = optionList.children.length;

  if(userAnswer == correctAnswer) {
    answer.classList.add('correct');
    userScore++;
    headerScore();
  }
  else {
    answer.classList.add('wrong')
    secondsLeft -= 5;

    // if answer incorrect auto select correct answer
    for(let i=0; i< allOptions; i++) {
      if (optionList.children[i].textContent == correctAnswer){
        optionList.children[i].setAttribute('class','option correct');
      }
    }
  }
  for (let i = 0; i < options.length; i++) {
    options[i].classList.add('disabled');
  }
  nextBtn.classList.add('active');

  // Move to the next question after a delay
  setTimeout(() => {
    questionCount++;
    if (questionCount < questionArray.length) {
      showQuestions(questionCount);
      // Reset option styles
      for (let i = 0; i < options.length; i++) {
        options[i].classList.remove('correct', 'wrong', 'disabled');
      }
    } else {
      // Quiz is finished, handle end of quiz logic
      return leaderBoard;
    }
  }, 1000);
}


/*
function optionSelected(selectedOption) {
  // Get the selected option's data-number attribute
  const selectedOptionNumber = selectedOption.getAttribute('data-number');

  // Compare the selected option with the correct answer
  if (selectedOptionNumber === questionArray[questionCount].answer) {
    // The user selected the correct answer
    // increase score if correct and add class correct
    selectedOption.classList.add('correct');
    scoreCount++;
    scoreText.textContent = `Score: ${scoreCount}`;
    console.log("correct");
  } else {
    // The user selected the wrong answer
    // assign 5 second penalty
    selectedOption.classList.add('wrong');
    secondsLeft -= 5;
    console.log("wrong");
  }
  for (let i=0; i <allOptions; i++) {
    if (putQuestionsHere.children[i].textContent == correctAnswer){
      putQuestionsHere.children[i].setAttribute('class', 'option correct');
    }
  }
  // Disable selecting options after selection temporarily
  for (let i = 0; i < options.length; i++) {
    options[i].classList.add('disabled');
  }

  // Move to the next question after a delay
  setTimeout(() => {
    questionCount++;
    if (questionCount < questionArray.length) {
      showQuestions(questionCount);
      // Reset option styles
      for (let i = 0; i < options.length; i++) {
        options[i].classList.remove('correct', 'wrong', 'disabled');
      }
    } else {
      // Quiz is finished, handle end of quiz logic
      return leaderBoard;
    }
  }, 1000);
}
*/
function selectOption() {
  for (let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', function() {
      optionSelected(this);
    });
  }
}

function headerScore () {
  const headerScoreText = document.querySelector(".score");
  headerScoreText.textContent =`Score: ${userScore}/ ${questionArray.length}`;
}


startBtn.onclick = () => {
  quiz.classList.add('active');
  timer.classList.add('active');
  homePage.classList.add('disabled');
  quizContainer.classList.add('active');

  setTime();
  showQuestions(0);
  selectOption();
  headerScore();
}

nextBtn.onclick = () => {
  if (questionCount < questionArray.length) {
    questionCount++;
    showQuestions(questionCount);
  } else {
    
  }
}
