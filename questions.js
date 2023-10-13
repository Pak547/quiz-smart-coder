const quiz = querySelector('.quizSection');
const goNext = querySelector('.next');

let questionCount;
let scoreCount = 0;
let count = 5;
let countdown;

const questionArray = [
  {
    num:"0",
    question:"CSS is an acronym for what?",
    options: [
      "Cascade Some Source",
      "Company Sample Style",
      "Cascading Style Sheets",
      "Cool Simplified Sauce",
    ],
    correct: "Cascading Style Sheets",
  },
  {
    num:"1",
    question:"Which is an example of a 'Void' tag?",
    options:  [
      "<br>",
      "<body>",
      "<a>",
      "<header>",
    ],
    correct: "<br>"
  },
  {
    num:"2",
    question:"What does Luigi (our instructor) preach we look for if  we don't know something?",
    options: [
      "ChatGPT",
      "Documentation",
      "Reddit",
      "Jesus",
    ],
    correct: "Documentation"
},
{
  num:"3",
  question:"Where is the correct place to insert a Javascript",
  options:[
    "The <head> section",
    "Both the <head> section and the <body> section are correct",
    "The <body> section",
    "It automatically links"
  ],
  correct: "Both the <head> section and the <body> section are correct"
},
{
  num:"4",
  question:"The 'external' Javascript file must contain the <script> tag",
  options:[
    "True",
    "False"
  ],
  correct: "False"
},
{
  num:"5",
  question:"How do you call a function named 'callBackFunction'?",
  options:[
    "call function callBackFunction();",
    "callBackFunction();",
    "call callBackFunction();"
  ],
  correct:"callBackFunction();"
}
]

goNext.on("click",)