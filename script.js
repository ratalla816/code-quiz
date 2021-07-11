// HTML elements //
var optionA = document.getElementById("a");
var optionB = document.getElementById("b");
var optionC = document.getElementById("c");
var optionD = document.getElementById("d");
var highScores = document.getElementById("highScores");
var startQuiz = document.getElementById("startQuiz");
var timer = document.getElementById("timer");


// Question array //
var questions = [{
    question: "To select a class attribute, which prefix needs to be added to the class name?",
    optionA: "()",
    optionB: "''",
    optionC: "!",
    optionD: ".",
    correctAnswer: "d"
},

{
    question: "Which is an anonymous function?",
    optionA: "addEventListener",
    optionB: "alert()",
    optionC: "function()",
    optionD: "Trolling social media using a fictitious name",
    correctAnswer: "b"
},

{
    question: "What method is used to append an item to a list?",
    optionA: "appendItem()",
    optionB: "appendChild()",
    optionC: "li",
    optionD: "textContent",
    correctAnswer: "b"
},

{
    question: "Which Web API does JavaScript have access to through the browser?",
    optionA: "Webkit",
    optionB: "Chrome DevTools",
    optionC: "DOM",
    optionD: "ERP",
    correctAnswer: "c"
},

{   question: "Which statement can be read as 'on a button click, create a task'?",
    optionA: "('click', createTaskHandler)",
    optionB: "On click",
    optionC: "createTaskHandler = function",
    optionD: "buttonEl.addEventListener",
    correctAnswer: "a"
},

{
    question: "In context of an application programming interface, What does DOM stand for?",
    optionA: "Distributed Output Management",
    optionB: "Declared Objective Material",
    optionC: "Document Object Model",
    optionD: "Dissolved Organic Matter",
    correctAnswer: "c"
},

{   question: "How can default browser behavior be overridden?",
    optionA: "Ctrl + Alt + Del",
    optionB: "event.preventDefault()",
    optionC: "git checkout -b",
    optionD: "querySelector()",
    correctAnswer: "b"
},

{    question: "What method can web developers use to inconspicuously test code?",
     optionA: "jQuery",
     optionB: "console.log",
     optionC: ".click(function()",
     optionD: "AJAX",
     correctAnswer: "b"
},
];

// click to start the quiz //
startQuizbtn.addEventListener("click", startQuiz);