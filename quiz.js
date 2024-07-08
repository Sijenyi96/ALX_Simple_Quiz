function checkAnswer() {
    //Function body
let correctAnswer = 4;
//use document.querySelector to select the input elements
let selectedOption = document.querySelector('input[name="quiz"] :checked');
if (selectedOption) {
    let userAnswer = selectedOption.value;
    console.log('user selected:',userAnswer);
    if (userAnswer === correctAnswer){
        console.log("corect! Well done.");
    }
    else {
        console.log("That's incorrect. Try again!");
    } 
}
    else {
        console.log("Please select an answer.");
    }
}

let submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);







