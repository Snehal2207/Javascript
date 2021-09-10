// question object
var questions = [{
    question: "Which is the seven wonders of world?",
    choices: ["Maroon Bells", "Burj Khalifa", "Taj Mahal", "River Nile"],
    correctAnswer: 2
},
{
    question: "Which is the largest subtropical desert in the world?",
    choices: ["Katchch", "Sahara", "Gobi", "Kalahari"],
    correctAnswer: 1
},
{
    question: "Where is the 'statue of Unity' lies?",
    choices: ["Australia", "USA", "India", "China"],
    correctAnswer: 2
},
{
    question: "What is the longest river?",
    choices: ["Amazon", "Mississippi", "Yangtze", "Nile"],
    correctAnswer: 3
},
{
    question: "Who was the former prime minister of canada?",
    choices: ["Justin Trudeau", "Stephen Harper", "Chrystia Freeland", "Carolyn Bennett"],
    correctAnswer: 1
},
{
    question: "What is the capital city of 'France'?",
    choices: ["London", "Paris", "Dubai", "Delhi"],
    correctAnswer: 1
},
{
    question: "Who was the First President of the United States?",
    choices: ["Dronald Trump", "Stephen Harper", "George Washington", "Barak Obama"],
    correctAnswer: 2
},
{
    question: " How many sides does a decagon have?",
    choices: ["10", "5", "3", "8"],
    correctAnswer: 0
},
{
    question: "Which continent has the highest population density?",
    choices: ["Africa", "Antarctica", "America", "Asia"],
    correctAnswer: 3
},
{
    question: "The grasslands of North America are called?",
    choices: ["Steppe", "Pampas", "Prairies", "Veld"],
    correctAnswer: 2
}];

//global variables for question,answer and quizover
var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

$(document).ready(function () {

    //display a question
    displayCurrentQuestion();
    $(this).find(".errorMessage").hide();


    $(this).find(".nextButton").click(function () {
        if (!quizOver) {
            value = $("input[type='radio']:checked").val();

            //check the value of radio button
            if (value == undefined) {
                //display error message
                $(document).find(".errorMessage").html("Please select an answer");
                $(document).find(".errorMessage").show();
            } else {
                $(document).find(".errorMessage").hide();

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++;
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $(document).find(".nextButton").html("Play Again?");
                    quizOver = true;
                }
            }
        } else {
            quizOver = false;
            $(document).find(".nextButton").html("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            hideScore();
        }
    });

});

//display function for question
function displayCurrentQuestion() {
    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".question");
    var choiceListClass = $(document).find(".choiceList");
    var lengthOfChoices = questions[currentQuestion].choices.length;
    $(questionClass).html(question);

    $(choiceListClass).find("li").remove();

    var choice;
    for (i = 0; i < lengthOfChoices; i++) {
        choice = questions[currentQuestion].choices[i];
        $('<li><input  type="radio" value=' + i + ' name="radio" />' + choice + '</li>').appendTo(choiceListClass);
    }
}

//shuffle questions throughout quiz
function shuffleArray(questionArray) {
    console.log("in shufle");
    for (var i = 0; i < questionArray.length; i++) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = questionArray[i];
        questionArray[i] = questionArray[j];
        questionArray[j] = temp;
    }
}

// reset quiz and shuffle questions
function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();

    shuffleArray(questions);
    // console.log(questions);
}

//display score at the end
function displayScore() {
    $(document).find(".result").html("Your score: " + correctAnswers + " out of " + questions.length);
    $(document).find(".result").show();
}

//hide score
function hideScore() {
    $(document).find(".result").hide();
}