
//get the questions to populate
//get elements to hide
//get score to tally
// question wrong take away a second from timer
//question right gives next question
// if time runs out or questions done, submit info
//bootstrap

//DEFAULT WEBPAGE SETTINGS
document.getElementById("openingContainer").style.display = "block";
document.getElementById("questionContainer").style.display = "none";
document.getElementById("scoreContainer").style.display = "none";

  var openingContainerEl = document.getElementsByClassName("openingContainer");
  var questionContainerEl = document.getElementsByClassName("questionContainer");
  var scoreContainerEl = document.getElementsByClassName("scoreContainer");
  
//I NEED THE TIMER TO START WHEN WE PRESS THE START BUTTON

  var startEl = document.getElementById("StartBtn");

  function onclickStartButton(){
    setTime();
    nextQuestion();
    document.getElementById("openingContainer").style.display = "none";
    document.getElementById("questionContainer").style.display = "block";
    document.getElementById("scoreContainer").style.display = "none";
  }
  startEl.addEventListener("click", onclickStartButton);

console.log("my page has loaded")


// I NEED A TIMER

  var timeEl = document.getElementById("time");
  var mainEl = document.getElementById("main");
  var secondsLeft = 10;

 function setTime() {
 
 console.log("ladies and gents, the timer has been begun!")

  var timerInterval = setInterval(function() {
   
    secondsLeft--;
    timeEl.textContent = secondsLeft;

    if(secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

function sendMessage() {

    console.log("their time is up, y'all!")
    
  timeEl.textContent = "";
  var timerUpEl = document.createElement("text");
  timerUpEl.textContent=" TIME'S UP!"
  mainEl.appendChild(timerUpEl);
}

//I NEED A START BUTTON TO START THE TIMER & QUIZ



//I NEED QUESTIONS
var prompts=document.getElementById("prompts");

var alternatives=document.getElementsByClassName("alternative");
var questionNb=0;

let questions = [
  {

    //I NEED MULIPLE CHOICES 

          prompts: "is javascript real",
          alternative: ["yes", "no", "no", "no"],
          correctAnswer: "yes"
  },
  {
          prompts: "are dogs worth it?",
          alternative: ["no", "yes", "yes", "yes"],
          correctAnswer: "yes"
  },
  {
          prompts: "who is the president?",
          alternative: ["me", "you", "us", "IDK"],
          correctAnswer: "IDK"

  }
]

function nextQuestion() {
  document.getElementById("prompts").innerHTML = questions[questionNb].prompts;
  document.getElementById("Option1").innerHTML=questions[questionNb].alternative[0];
  document.getElementById("Option2").innerHTML=questions[questionNb].alternative[1];
  document.getElementById("Option3").innerHTML=questions[questionNb].alternative[2];
  document.getElementById("Option4").innerHTML=questions[questionNb].alternative[3];
}
var answerBtn = document.getElementsByClassName("answerButton");
answerBtn.addEventListener("click", onclickAnswerBtn);
function onclickAnswerBtn(){
  questionNb++;
  nextQuestion();
}


//I NEED AN ALERT/SUBTRACTED TIME WHEN THEY GET IT WRONG
//function wrongAnswer () {

//I NEED THE NEXT QUESTION IF THEY GET IT RIGHT
//function rightAnswer (){


//I NEED A GAME OVER WHEN THE TIME RUNS OUT OR WHEN ALL THE QUESTIONS ARE DONE

//I NEED A BUTTON TO SUBMIT THE SCORES

var initialsInput = document.querySelector(".scoreContainer");
var score= document.querySelector(".userscore"); 
var submitBtn= document.querySelector("#SubmitBtn");

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();
  
  // create user object from submission
  var user = {
    Initials: initialsInput.value.trim(),
    Score: score.value.trim(),
  };

  // set new submission to local storage 
  localStorage.setItem("user", JSON.stringify(user));
  
});
