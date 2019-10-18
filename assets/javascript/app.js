
var guesses = ["click"];
var answerwrong = "X";
// var answerright = "O";
// var quizText = document.getElementById("quiz")

// document.onkeyup = function (event) {

//     var userGuess = event.key;

//     guesses.push(userGuess);


//     if ((UserGuess === "click")) {
//         answerright++;

//     }

//     else {
//         answerwrong--;
//     }

//     quizText.textContent = "";

$("button").on("click", function () {
    var count = 30;
    var interval = setInterval(function () {
        document.getElementById('count').innerHTML = "Time Remaining: " + count;
        count--;
        if (count === 0) {
            clearInterval(interval)
            document.getElementById('count').innerHTML = ("Times up!");
        }
        else {

        }
    }, 1000);
    console.log(interval)



});


