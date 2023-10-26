var buttonArray = ["red", "blue", "green", "yellow"] //Set array

var gamePattern = [];

var userClickedPattern = [];

var start = false; //It is false, because the game didn't start.
var level = 0; //Level game.

$(document).keypress(function() {
    if(!start) {
        $("#level-title").text("Level" + level);
        makeSequence();
        start = true;
    }
});

//jQuery
//1. Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
$(".btn").click(function() {
    //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);

    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
});


//Functions
function startOver() {
    level = 0;
    gamePattern = [];
    start = false;
}

function checkAnswer(currentLevel) {
    /*Check if the game pattern has the same
    pattern of player.*/
    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        /*Check if the sequence is the same sequence of the game*/
        if(userClickedPattern.length === gamePattern.length) {
            setTimeout(function() {
                makeSequence();
            }, 1000);
        }
    } else {
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game Over! Press any key to restart.");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);

        startOver();
    }
}

function animatePress(currentColor) {
    //jQuery
    $("#" + currentColor).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

function playSound(name) {
    
    var audio = new Audio("sounds/" + name + ".mp3"); //Search audio.
    audio.play(); //Play audio.
}

function makeSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text("Level" + level);
    var randomButton = Math.floor(Math.random() * 4); //Set a random number.
    var randomChosenColour = buttonArray[randomButton]; //Set a sort value.
    gamePattern.push(randomChosenColour); //Set pattern.

    //jQuery
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100); //Set button animation.
    playSound(randomChosenColour);
}