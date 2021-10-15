var startButton = document.querySelector("#start-game");
var timeLeftEl = document.querySelector("#time-left");
var quizQuestion = document.querySelector("#quiz-question");
var correctWrong = document.querySelector("#correct-wrong");
var quizOption1 = document.querySelector("#o1");
var quizOption2 = document.querySelector("#o2");
var quizOption3 = document.querySelector("#o3");
var quizOption4 = document.querySelector("#o4");
var duration = 40;
var questionNumber = 0;
var answerNumber = 0;
var count = 0
var score = 0

timeLeftEl.textContent = "Seconds to complete quiz: " + duration;

var questionPool = ["Country with the highest GDP?", "What is the city with biggest population?", "Excluding the Caspian Sea, what is the lake with the largest surface area?", "Tallest buidling in the world?", "Which language boasts of having the largest amount of total speakers (native and non-native)?"];
var answerPool = ["Germany","USA", "China", "Japan", "New York City", "Shanghai", "Tokyo", "Delhi", "Lake Michigan", "Lake Titicaca", "Lake Superior", "Lake Tanganyika", "Burj Khalifa", "One World Trade Center", "Merdeka 118", "Shangai Tower", "Mandarin Chinese", "English", "Spanish", "Hindi"];
var correctAnswers = ["USA", "Tokyo", "Lake Superior", "Burj Khalifa", "English"];
var wrongAnswers = ["Germany", "China", "Japan", "New York City", "Shanghai", "Delhi", "Lake Michigan", "Lake Titicaca", "Lake Tanganyika", "One World Trade Center", "Merdeka 118", "Shangai Tower", "Mandarin Chinese", "Spanish", "Hindi"];


// question and answer display
quizQuestion.textContent = questionPool[questionNumber];
quizOption1.textContent = answerPool[answerNumber];
quizOption2.textContent = answerPool[answerNumber+1];
quizOption3.textContent = answerPool[answerNumber+2];
quizOption4.textContent = answerPool[answerNumber+3];

// when correct anser is selected - message is displayed
function didYouGuess(event) {
    var chosenOption = event.target.innerHTML;
    if(correctAnswers.includes(chosenOption)) {
        correctWrong.textContent = "Correct!";
        nextQuestion() 
    }
    else if(wrongAnswers.includes(chosenOption)) {
        correctWrong.textContent = "Wrong! 5 second penalty!";
        count = count +5;
        timeLeftEl.textContent = duration - count;
        nextQuestion();
    }
}

// function automates next question display
function nextQuestion() {
    questionNumber = questionNumber +1;
    answerNumber = answerNumber + 4;
    quizQuestion.textContent = questionPool[questionNumber];
    quizOption1.textContent = answerPool[answerNumber];
    quizOption2.textContent = answerPool[answerNumber+1];
    quizOption3.textContent = answerPool[answerNumber+2];
    quizOption4.textContent = answerPool[answerNumber+3];
}

// function will start timer, and allow for player to choose answer to first question
function startGame() {
    timeLeftEl.textContent = "Seconds LEFT: " + duration;
    document.addEventListener("click", didYouGuess)
    //start timer
    var timer = setInterval(function() {
        count++;
        timeLeftEl.textContent = "Seconds LEFT: " + (duration - count);
        if(count >= duration) {
            clearInterval(timer)
        }
    }, 1000); 
}


startButton.addEventListener("click", startGame);
