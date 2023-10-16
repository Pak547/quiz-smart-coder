const optionList = document.querySelector('optionsList');
const root = document.querySelector(".main");
const question = document.querySelector(".questionText");
const options = Array.from(document.querySelectorAll(".option"));
const scoreText = document.querySelector(".score");

let currentQuestion = {};
let answers = true;
let scoreCount = 0;
let count = 5;
let countdown;
let availableQuestions = [];

const questionArray = [
  {
    question:"CSS is an acronym for what?",
    options: [
      "A. Cascade Some Source",
      "B. Company Sample Style",
      "C. Cascading Style Sheets",
      "D. Cool Simplified Sauce",
    ],
    correct: "C. Cascading Style Sheets",
  },
  {
    question:"Which is an example of a 'Void' tag?",
    options:  [
      "A. <br>",
      "B. <body>",
      "C. <a>",
      "D. <header>",
    ],
    correct: "A. <br>"
  },
  {
    question:"What does Luigi (our instructor) preach we look for if  we don't know something?",
    options: [
      "A. ChatGPT",
      "B. Documentation",
      "C. Reddit",
      "D.Jesus",
    ],
    correct: "B. Documentation"
},
{
  question:"Where is the correct place to insert a Javascript",
  options:[
    "A. The <head> section",
    "B. Both the <head> section and the <body> section are correct",
    "C. The <body> section",
    "D. It automatically links"
  ],
  correct: "Both the <head> section and the <body> section are correct"
},
{
  question:"The 'external' Javascript file must contain the <script> tag",
  options:[
    "A. True",
    "B. False"
  ],
  correct: "B. False"
},
{
  question:"How do you call a function named 'callBackFunction'?",
  options:[
    "A. call function callBackFunction();",
    "B. callBackFunction();",
    "C. call callBackFunction();"
  ],
  correct:"B. callBackFunction();"
}
]




/*
const maxQuestions = 4;

startBtn.onclick = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questionArray];
  getNewQuestion();
}

getNewQuestion = () => {
  if(availableQuestions.length === 0) {
    localStorage.setItem('recentScore', score)

    return window.location.assign('/end.html')
  }

/*
  const questionsIndex = Math.floor(Math.random()* availableQuestions.length)
  currentQuestion = availableQuestions[questionsIndex]
  question.innerText = currentQuestion.question

  options.forEach(option => {
    const number = option.dataset['number'];
    option.innerText = currentQuestion['option' +number];
  })
  // Removes elements from array
  availableQuestions.splice(questionsIndex, 1)

  answers = true;
}

options.forEach (option => {
  option.addEventListener('click', e=> {
    if(!acceptingAnswers) return
    acceptingAnswers = false
    const selectedChoice =e.target
    const selectedAnswer = selectedChoice.dataset['number']
  // using ternary op toggle the option to be either correct or incorrect answer
    let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
  // if its right then we add a point
    if(classToApply ==='correct') {
      incrementScore(scorePoints)
    }
    selectedChoice.parentElement.classList.add(classToApply)
  // Gives time to transition to the next question
    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply)
      getNewQuestion()
    }, 1000)


  })
})

incrementScore = num => {
  score+= num 
  scoreText.innerText = score;
}
*/