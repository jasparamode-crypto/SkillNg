const questions = [
{
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "High Text Machine Language", "Home Tool Markup Language", "Hyperlinks"],
    answer: 0
},
{
    question: "Which language styles web pages?",
    options: ["HTML", "CSS", "Java", "Python"],
    answer: 1
},
{
    question: "Which language adds interactivity?",
    options: ["CSS", "HTML", "JavaScript", "PHP"],
    answer: 2
},
{
    question: "Which tag creates a paragraph?",
    options: ["<h1>", "<p>", "<div>", "<span>"],
    answer: 1
},
{
    question: "Which symbol is used for IDs in CSS?",
    options: [".", "#", "*", "&"],
    answer: 1
},
{
    question: "Which company created JavaScript?",
    options: ["Apple", "Google", "Microsoft", "Netscape"],
    answer: 3
},
{
    question: "Which property changes text color?",
    options: ["font", "background", "color", "border"],
    answer: 2
},
{
    question: "CSS stands for?",
    options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Color Style Sheets"],
    answer: 1
},
{
    question: "Which method selects an element by ID?",
    options: ["querySelector()", "getElementById()", "createElement()", "appendChild()"],
    answer: 1
},
{
    question: "Which tag is the biggest heading?",
    options: ["<h6>", "<head>", "<h1>", "<title>"],
    answer: 2
}
];

const question = document.getElementById("question");
const buttons = document.querySelectorAll(".answer-btn");
const nextBtn = document.getElementById("next-btn");
const score = document.getElementById("score");
const progress = document.getElementById("progress");
const feedback = document.getElementById("feedback");
const result = document.querySelector(".result-card");
const quiz = document.querySelector(".quiz-card");
const finalScore = document.getElementById("final-score");
const message = document.getElementById("message");
const restart = document.getElementById("restart-btn");
let current = 0;
let marks = 0;

function showQuestion(){
    question.textContent = questions[current].question;
    progress.textContent = "Question " + (current + 1) + " of 10";
    score.textContent = "Score: " + marks;
    feedback.textContent = "";
    for(let i = 0; i < 4; i++){
        buttons[i].textContent = questions[current].options[i];
        buttons[i].disabled = false;
        buttons[i].className = "answer-btn";
    }
}

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        let correct = questions[current].answer;
        if(i == correct){
            buttons[i].classList.add("correct");
            feedback.textContent = "Correct!";
            marks++;
        }

        else{
            buttons[i].classList.add("wrong");
            buttons[correct].classList.add("correct");
            feedback.textContent = "Wrong!";
        }
        score.textContent = "Score: " + marks;
        for(let j = 0; j < buttons.length; j++){
            buttons[j].disabled = true;
        }
    });
}

nextBtn.addEventListener("click", function(){
    current++;
    if(current < questions.length){
        showQuestion();
    }

    else{
        quiz.classList.add("hidden");
        result.classList.remove("hidden");
        finalScore.textContent = "You scored " + marks + " / 10";
        if(marks >= 9){
            message.textContent = "Excellent!";
        }

        else if(marks >= 7){
            message.textContent = "Very Good!";
        }

        else if(marks >= 5){
            message.textContent = "Good Effort!";
        }

        else{
            message.textContent = "Keep Practicing!";
        }
    }
});

restart.addEventListener("click", function(){
    current = 0;
    marks = 0;
    quiz.classList.remove("hidden");
    result.classList.add("hidden");
    showQuestion();
});

showQuestion();