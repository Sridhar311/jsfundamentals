const quizData = [
    {
        question: "What is the capital of France?",
        answers: ["Berlin", "Madrid", "Paris", "Rome"],
        correct: 2
    },
    {
        question: "Which language runs in the browser?",
        answers: ["Python", "Java", "C++", "JavaScript"],
        correct: 3
    },
    {
        question: "What does CSS stand for?",
        answers: [
            "Computer Style Sheets",
            "Cascading Style Sheets",
            "Creative Style System",
            "Colorful Style Sheets"
        ],
        correct: 1
    }
];

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const currentQuiz = quizData[currentQuestion];

    questionEl.textContent = currentQuiz.question;
    answersEl.innerHTML = "";
    nextBtn.classList.add("hidden");

    currentQuiz.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", () => selectAnswer(index));
        answersEl.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    const correctIndex = quizData[currentQuestion].correct;

    if (selectedIndex === correctIndex) {
        score++;
    }

    nextBtn.classList.remove("hidden");
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    questionEl.textContent = `Quiz Finished! Your score: ${score}/${quizData.length}`;
    answersEl.innerHTML = "";
    nextBtn.classList.add("hidden");
}

loadQuestion();
