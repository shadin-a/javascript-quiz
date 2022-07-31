

//I NEED THE TIMER TO START WHEN WE PRESS THE START BUTTON
  var startEl = document.getElementById("StartBtn");

  startEl.addEventListener("click", setTime);

console.log('start button was pressed');

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
//BUTTONS!!


//I NEED QUESTIONS

let question = [
  {

    //I NEED MULIPLE CHOICES 

          prompt: "is javascript real",
          alternatives: ["yes", "no", "no", "no"],
          correctAnswer: "yes"
  },
  {
          prompt: "are dogs worth it?",
          alternatives: ["no", "yes", "yes", "yes"],
          correctAnswer: "yes"
  },
  {
          prompt: "who is the president?",
          alternatives: ["me", "you", "us", "IDK"],
          correctAnswer: "IDK"

  }
]



function showQuestion(q) {

console.log('this function works')
  let questionDiv = document.getElementById('prompts');
  questionDiv.textContent = q.questionDiv;
 
  let alts = document.querySelectorAll('.alternative');
  console.log('multiplechoices');
  alts.forEach(function(element, index){
    element.textContent = q.alternatives[index];
  });
}
showQuestion(question);

//I NEED MULIPLE CHOICES 


//I NEED AN ALERT/SUBTRACTED TIME WHEN THEY GET IT WRONG
function wrongAnswer () {

}
//I NEED THE NEXT QUESTION IF THEY GET IT RIGHT
function rightAnswer (){

}
//I NEED A GAME OVER WHEN THE TIME RUNS OUT OR WHEN ALL THE QUESTIONS ARE DONE

//I NEED A FORM TO SUBMIT THE SCORES

//I NEED THE SCORES TO BE STORED IN LOCAL STORAGE 