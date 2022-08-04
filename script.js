
// CONSTANTS
let questions = [
  {
    prompts: "1. Javascript is an _______ language.",
    alternative: ["Object-Oriented", "Object-Based", "Procedural", "None of the above"],
    correctAnswer: "Object-Oriented"
  },
  {
    prompts: "2. Which of the following methods is used to access HTML elements using Javascript?",
    alternative: ["GetElementById", "GetElementByClasName", "Both A and B", "None of the above"],
    correctAnswer: "Both A and B"
  },
  {
    prompts: "3. How can a datatype be declared to be a constant type?",
    alternative: ["const", "var", "let", "constant"],
    correctAnswer: "const"
  }
]

// GLOBAL VARIABLES
var score = 0;
var secondsLeft = 60;
var questionNb = 0;

// HTML GLOBAL VARIABLES
var openingContainerEl = document.getElementById("openingContainer");
var questionContainerEl = document.getElementById("questionContainer");
var scoreContainerEl = document.getElementById("scoreContainer");
var startEl = document.getElementById("StartBtn");

var answerBtn1 = document.getElementById("Option1");
var answerBtn2 = document.getElementById("Option2");
var answerBtn3 = document.getElementById("Option3");
var answerBtn4 = document.getElementById("Option4");
var timeEl = document.getElementById("time");
var mainEl = document.getElementById("main");
var prompts = document.getElementById("prompts");
var alternatives = document.getElementsByClassName("alternative");
var submitBtn = document.getElementById("submitBtn");

// SETUP EVENT LISTENERS
answerBtn1.addEventListener("click", onclickAnswerBtn);
answerBtn2.addEventListener("click", onclickAnswerBtn);
answerBtn3.addEventListener("click", onclickAnswerBtn);
answerBtn4.addEventListener("click", onclickAnswerBtn);
startEl.addEventListener("click", onclickStartButton);
submitBtn.addEventListener("click", onclickSubmitButton);

// INITIALIZE ELEMENT DISPLAY
openingContainerEl.style.display = "block";
questionContainerEl.style.display = "none";
scoreContainerEl.style.display = "none";

// FUNCTIONALITY 
function onclickStartButton(){
  setTime();
  nextQuestion();
  openingContainerEl.style.display = "none";
  questionContainerEl.style.display = "block";
  scoreContainerEl.style.display = "none";
  }
  
function setTime() {
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      gameOver();
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {
  timeEl.textContent = "";
  var timerUpEl = document.createElement("text");
  timerUpEl.textContent=" TIME'S UP!"
  mainEl.appendChild(timerUpEl);
}

function nextQuestion() {
  document.getElementById("prompts").innerHTML = questions[questionNb].prompts;
  document.getElementById("Option1").innerHTML=questions[questionNb].alternative[0];
  document.getElementById("Option2").innerHTML=questions[questionNb].alternative[1];
  document.getElementById("Option3").innerHTML=questions[questionNb].alternative[2];
  document.getElementById("Option4").innerHTML=questions[questionNb].alternative[3];
}

function onclickAnswerBtn(){
  addPointToTotalScore(this.innerHTML, questions[questionNb].correctAnswer);
  questionNb++;
  if (questionNb===questions.length){
    gameOver();
  } else {
    nextQuestion();
  }
}

function addPointToTotalScore(userAnswer, correctAnswer) {
  if (userAnswer === correctAnswer){
    score++;
  } else {
    secondsLeft = secondsLeft - 10;
  }
}

function gameOver(){
  // 1. Show game over screen
  openingContainerEl.style.display = "none";
  questionContainerEl.style.display = "none";
  scoreContainerEl.style.display = "block";
  timeEl.style.display = "none";
  mainEl.style.display = "none";
  
  // 3. Submit user data
}


function onclickSubmitButton() {
  var initialsInput = document.getElementById("initials").value;
  console.log(initialsInput, score);
  var user = {
    Initials: initialsInput.trim(),
    Score: score
  };

  var scores = JSON.parse(localStorage.getItem("scores")) || [];
  scores.push(user);
  localStorage.setItem("scores", JSON.stringify(scores));

  var hiscores = document.getElementById("hiscores");
  for(var i = 0; i < scores.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = scores[i].Initials + ": " + scores[i].Score;
    hiscores.appendChild(li);
  }
}
