//Assignment code

var scoreCard = document.querySelector("#scorecard");
var yourScore = document.querySelector("#your-score");


var nameInput = document.querySelector("#name-input");
var submitButton = document.querySelector("#submit-button");
var score = 0
console.log(score)
submitButton.addEventListener("click", function(event) {
    event.preventDefault();
    // create user object from submission
    var nameAndScore = {
            name: nameInput.value.trim(),
            score: score
    };
  
    // set new submission to local storage 
    localStorage.setItem("name", JSON.stringify(nameAndScore));
    


  });

  function didYouGuess(event) {
    var chosenOption = event.target.innerHTML;
    if(correctAnswers.includes(chosenOption)) {
        score = score + 15;
    }
    else if(wrongAnswers.includes(chosenOption)) {
        score = score - 10;
      
    }
}