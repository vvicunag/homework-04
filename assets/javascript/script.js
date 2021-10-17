//Assignment code
var startButton = document.querySelector("#start-game");
var timeLeftEl = document.querySelector("#time-left");
var scoreCard = document.querySelector("#scorecard");
var lastPlayer = document.querySelector("#last-player");
var yourScore = document.querySelector("#your-score");
var quizQuestion = document.querySelector("#quiz-question");
var correctWrong = document.querySelector("#correct-wrong");
var quizOption1 = document.querySelector("#o1");
var quizOption2 = document.querySelector("#o2");
var quizOption3 = document.querySelector("#o3");
var quizOption4 = document.querySelector("#o4");
var nameInput = document.querySelector("#name-input");
var submitButton = document.querySelector("#submit-button");
// tunable variables
var duration = 60;
var totalNumberOfQuestions = 5
var questionNumber = 0;
var answerNumber = 0;
var count = 0
var score = 0


timeLeftEl.textContent = "Seconds to complete quiz: " + duration;
scoreCard.textContent = "Current score: " + score;
yourScore.textContent = "YOUR SCORE:" + score
lastPlayer.textContent = "Last player: "

// Question and answer pool
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

// FUNCTIONS___________________________________________________________________________________________

// function will start timer, and allow for player to choose answer to first question
function startGame() {
    startButton.removeEventListener("click", startGame);
    timeLeftEl.textContent = "Seconds LEFT: " + duration;
    //Enables the click for the answer cards
    document.addEventListener("click", didYouGuess);
    //start timer
    var timer = setInterval(function() {
        count++;
        timeLeftEl.textContent = "Seconds LEFT: " + (duration - count);
        if(count >= duration) {
            clearInterval(timer)
        }
        //Clears timer when all questions are answered.
        else if (questionNumber >= totalNumberOfQuestions) {
            clearInterval(timer);
            yourScore.textContent = "YOUR SCORE:" + score;
            userName = prompt ("Congratulations on finishing the quiz! Enter your name to enter the Wordly World Hall of Fame!");
            savedGame = userName + ". Score: " + score;
            localStorage.setItem("userInfo", savedGame);
            var displayLast = localStorage.getItem("userInfo");
            lastPlayer.textContent = "Last player: " + displayLast;
            questionNumber = 0;
            answerNumber = 0;
            answerNumber = 0;
            answerNumber = 0;
            answerNumber = 0;
            duration = 60;
            count = 0
            score = 0
            quizQuestion.textContent = questionPool[questionNumber];
            quizOption1.textContent = answerPool[answerNumber];
            quizOption2.textContent = answerPool[answerNumber+1];
            quizOption3.textContent = answerPool[answerNumber+2];
            quizOption4.textContent = answerPool[answerNumber+3];
            timeLeftEl.textContent = "Seconds LEFT: " + (duration - count);
            scoreCard.textContent = "Current score: " + score;
            correctWrong.textContent = null;
            document.removeEventListener("click", didYouGuess);
            startButton.addEventListener("click", startGame);
            
        }
    }, 1000); 
}

// when  answer is selected message is displayed. Function also adds score.
function didYouGuess(event) {
    var chosenOption = event.target.innerHTML;
    if(correctAnswers.includes(chosenOption)) {
        correctWrong.textContent = "Correct!";
        score = score + 15;
        scoreCard.textContent = "Current score: " + score;
        nextQuestion() 
    }
    else if(wrongAnswers.includes(chosenOption)) {
        correctWrong.textContent = "Wrong! 5 second penalty!";
        count = count +5;
        timeLeftEl.textContent = "Seconds LEFT: " + (duration - count);
        score = score - 10;
        scoreCard.textContent = "Current score: " + score;
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


startButton.addEventListener("click", startGame);
