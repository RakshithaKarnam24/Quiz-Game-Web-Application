const startBtn = document.getElementById("start-btn");
const welcomeScreen = document.getElementById("welcome-screen");
const questionContainer = document.getElementById("question-container");
const questions = [
{
question: "Which language is used for web styling?",
answers: [
{text:"HTML", correct:false},
{text:"CSS", correct:true},
{text:"Python", correct:false},
{text:"Java", correct:false}
]
},

{
question: "Which tag creates a hyperlink?",
answers: [
{text:"<img>", correct:false},
{text:"<a>", correct:true},
{text:"<link>", correct:false},
{text:"<p>", correct:false}
]
},

{
question: "JavaScript is mainly used for?",
answers: [
{text:"Styling", correct:false},
{text:"Database", correct:false},
{text:"Interactivity", correct:true},
{text:"Networking", correct:false}
]
},

{
question: "Which company developed JavaScript?",
answers: [
{text:"Microsoft", correct:false},
{text:"Netscape", correct:true},
{text:"Google", correct:false},
{text:"Apple", correct:false}
]
}
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
currentQuestionIndex = 0;
score = 0;
showQuestion();
}

function showQuestion(){

resetState();

let currentQuestion = questions[currentQuestionIndex];

questionElement.innerText = currentQuestion.question;

currentQuestion.answers.forEach(answer => {

const button = document.createElement("button");

button.innerText = answer.text;

button.classList.add("btn");

if(answer.correct){
button.dataset.correct = answer.correct;
}

button.addEventListener("click", selectAnswer);

answerButtons.appendChild(button);

});
}

function resetState(){

nextButton.style.display = "none";

while(answerButtons.firstChild){
answerButtons.removeChild(answerButtons.firstChild);
}

}

function selectAnswer(e){

const selectedBtn = e.target;
const correct = selectedBtn.dataset.correct === "true";

if(correct){
score++;
selectedBtn.classList.add("correct");
}else{
selectedBtn.classList.add("wrong");
}

Array.from(answerButtons.children).forEach(button => {

if(button.dataset.correct === "true"){
button.classList.add("correct");
}

button.disabled = true;

});

nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {

currentQuestionIndex++;

if(currentQuestionIndex < questions.length){
showQuestion();
}
else{
showScore();
}

});

function showScore(){

document.getElementById("question-container").classList.add("hide");

document.getElementById("result-container").classList.remove("hide");

document.getElementById("score").innerHTML =
`${score} / ${questions.length}`;
}

startBtn.addEventListener("click", () => {

welcomeScreen.classList.add("hide");

questionContainer.classList.remove("hide");

startQuiz();

});