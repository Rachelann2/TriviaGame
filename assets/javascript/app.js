var quizText = document.getElementById("quiz")

var Startbtn = $("#Startbutton")
var count = 30;
var submitbtn = $("#Submit")
var question1 = document.getElementsByClassName("question1")

var answerColor = $("#D1, #B2, #C3, #D4, #B5, #A6")
var submitAns = $("#Submit")
var clickedanswer1 = $("span.answers1")
var clickedanswer2 = $("span.answers2")
var clickedanswer3 = $("span.answers3")
var clickedanswer4 = $("span.answers4")
var clickedanswer5 = $("span.answers5")
var clickedanswer6 = $("span.answers6")

var answer1 = $("#A1")
var gameHasStarted = false;


clickedanswer1.one("click", "button.answers", function (event) {

    if ((gameHasStarted)) {
        $(event.target).css("background-color", "yellow");
    }

});

clickedanswer2.one("click", "button.answers", function (event) {

    if ((gameHasStarted)) {
        $(event.target).css("background-color", "yellow");
    }

});

clickedanswer3.one("click", "button.answers", function (event) {

    if ((gameHasStarted)) {
        $(event.target).css("background-color", "yellow");
    }

});

clickedanswer4.one("click", "button.answers", function (event) {

    if ((gameHasStarted)) {
        $(event.target).css("background-color", "yellow");
    }

});

clickedanswer5.one("click", "button.answers", function (event) {

    if ((gameHasStarted)) {
        $(event.target).css("background-color", "yellow");
    }

});

clickedanswer6.one("click", "button.answers", function (event) {

    if ((gameHasStarted)) {
        $(event.target).css("background-color", "yellow");
    }

});


submitAns.on("click", function () {
    $(answerColor).css("background-color", "red");
    console.log("hi")

});


Startbtn.one("click", function () {
    gameHasStarted = true;


    var interval = setInterval(function () {
        document.getElementById('count').innerHTML = "Time Remaining: " + count;
        count--;

        if (count <= 0) {
            clearInterval(interval)
            document.getElementById('count').innerHTML = ("Times up!");
            quizText = $(answerColor).css("background-color", "blue");
        }

        else {
        }

    }, 1000);


});





