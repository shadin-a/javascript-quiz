// I NEED A TIMER
var timeEl = document.querySelector("time");
var mainEl = document.getElementById("main");
var secondsLeft = 5;

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
    
  timeEl.textContent = " ";
  var timerUpEl = document.createElement("text");
  timerUpEl.textContent=" TIME'S UP!"
  mainEl.appendChild(timerUpEl);
}
setTime();

//I NEED A START BUTTON TO START THE TIMER & QUIZ

//I NEED QUESTIONS

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