let questions = [
    "What is your branch?",
    "What is your Section?",
    "How many students are there in your class?",
    "How many lectures are there in a day?"
];

let answers = [
    "DS",
    "A",
    "80",
    "8"
];

let options = [
    ["CSE", "DS", "AIML", "ECE"],
    ["A", "B", "C", "None"],
    ["30", "50", "80", "100"],
    ["6", "8", "10", "12"]
];

let currentQuestion = 0;
let score = 0;
let attempted = 0;

let selected = "";

let time = 60;
let timerInterval;


// Elements

let name = document.getElementById("name");
let email = document.getElementById("email");

let login = document.getElementById("login");
let quiz = document.getElementById("quiz");
let result = document.getElementById("result");

let question = document.getElementById("question");
let timer = document.getElementById("time");

let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");

let next = document.getElementById("next");

let resultText = document.getElementById("resultText");

let progress = document.getElementById("progress");

let questionNumber = document.getElementById("questionNumber");

let restart = document.getElementById("restart");

let answerButtons = [a, b, c, d];


// ==========================
// START QUIZ
// ==========================

document.getElementById("start").addEventListener("click", function () {

    if (
        name.value.trim() === "" ||
        email.value.trim() === ""
    ) {
        alert("Please enter your name and email.");
        return;
    }

    login.style.display = "none";

    quiz.style.display = "block";

    showQuestion();

    startTimer();
});


// ==========================
// SHOW QUESTION
// ==========================

function showQuestion() {

    question.innerText = questions[currentQuestion];

    a.innerText = options[currentQuestion][0];
    b.innerText = options[currentQuestion][1];
    c.innerText = options[currentQuestion][2];
    d.innerText = options[currentQuestion][3];

    questionNumber.innerText =
        "Question " +
        (currentQuestion + 1) +
        " of " +
        questions.length;

    let progressValue =
        ((currentQuestion + 1) / questions.length) * 100;

    progress.style.width = progressValue + "%";


    selected = "";


    answerButtons.forEach(function (button) {

        button.classList.remove("selected");

    });


    if (currentQuestion === questions.length - 1) {

        next.innerText = "Submit";

    } else {

        next.innerText = "Next";

    }
}


// ==========================
// SELECT ANSWER
// ==========================

answerButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        answerButtons.forEach(function (btn) {

            btn.classList.remove("selected");

        });


        button.classList.add("selected");

        selected = button.innerText;

    });

});


// ==========================
// NEXT BUTTON
// ==========================

next.addEventListener("click", function () {

    if (selected === "") {

        alert("Please select an answer.");

        return;
    }


    attempted++;


    if (selected === answers[currentQuestion]) {

        score++;

    }


    if (
        currentQuestion ===
        questions.length - 1
    ) {

        submitQuiz();

    } else {

        currentQuestion++;

        showQuestion();

    }

});


// ==========================
// TIMER
// ==========================

function startTimer() {

    timerInterval = setInterval(function () {

        time--;

        timer.innerText = time;


        if (time <= 10) {

            timer.style.color = "#e74c3c";

        }


        if (time <= 0) {

            clearInterval(timerInterval);

            submitQuiz();

        }

    }, 1000);
}


// ==========================
// SUBMIT QUIZ
// ==========================

function submitQuiz() {

    clearInterval(timerInterval);


    quiz.style.display = "none";

    result.style.display = "block";


    let totalQuestions = questions.length;

    let unattempted =
        totalQuestions - attempted;


    let percentage =
        Math.round(
            (score / totalQuestions) * 100
        );


    resultText.innerHTML =

        "<strong>Name:</strong> " +
        name.value +

        "<br>" +

        "<strong>Email:</strong> " +
        email.value +

        "<br><br>" +

        "<strong>Score:</strong> " +
        score +
        " / " +
        totalQuestions +

        "<br>" +

        "<strong>Percentage:</strong> " +
        percentage +
        "%" +

        "<br>" +

        "<strong>Attempted:</strong> " +
        attempted +

        "<br>" +

        "<strong>Unattempted:</strong> " +
        unattempted;
}


// ==========================
// RESTART QUIZ
// ==========================

restart.addEventListener("click", function () {

    currentQuestion = 0;

    score = 0;

    attempted = 0;

    selected = "";

    time = 60;


    timer.innerText = time;

    timer.style.color = "#e74c3c";


    result.style.display = "none";

    login.style.display = "block";


    name.value = "";

    email.value = "";


    showQuestion();

});