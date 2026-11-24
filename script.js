// 1. DATA: Starting pet stats & quiz questions
const defaultPetData = {
  level: 1,
  exp: 0,
  streak: 0,
  totalScore: 0
};

const quizQuestions = [
  {
    question: "Which HTML tag links an external JavaScript file?",
    choices: ["<js>", "<script>", "<link>", "<javascript>"],
    answer: 1,
    explanation: "The <script src=\"...\"> tag links external JavaScript files to an HTML page."
  },
  {
    question: "Which storage keeps data even after closing the tab?",
    choices: ["sessionStorage", "tempStorage", "localStorage", "cacheOnly"],
    answer: 2,
    explanation: "localStorage saves data permanently in the browser until cleared, unlike sessionStorage."
  },
  {
    question: "Which CSS property turns a container into Flexbox?",
    choices: ["display: grid;", "position: flex;", "display: flex;", "align: flex;"],
    answer: 2,
    explanation: "Setting display: flex; turns an element into a flex container so its children align in a row or column."
  }
];
// 2. INDEX.HTML: Read storage, show stats, & switch tabs
function getPetData() {
  const saved = localStorage.getItem("pomogochiData");
  return saved ? JSON.parse(saved) : { ...defaultPetData };
}

function renderDashboard() {
  const stageLabel = document.getElementById("pet-stage-label");
  if (!stageLabel) return; // Stop here if we are on app.html!

  const pet = getPetData();
  document.getElementById("streak-count").textContent = pet.streak;
  document.getElementById("streak-pet-level").textContent = pet.level;
  document.getElementById("pet-level").textContent = pet.level;
  document.getElementById("pet-exp").textContent = pet.exp;
  document.getElementById("total-score").textContent = pet.totalScore;
}

function setupNavigation() {
  const navButtons = document.querySelectorAll(".nav-btn");
  const views = document.querySelectorAll(".view");

  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      navButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      views.forEach((v) => v.classList.toggle("hidden", v.id !== btn.dataset.view));
    });
  });
}
// // 3. APP.HTML: Load questions, check answers, & show feedback (AC2.1 & AC2.2)
// let currentQuestionIndex = 0;

// function loadQuestion() {
//   const questionText = document.getElementById("question-text");
//   const choicesBox = document.getElementById("choices-container");
//   const feedbackEl = document.getElementById("quiz-feedback");
//   const nextBtn = document.getElementById("next-btn");
//   if (!questionText || !choicesBox) return; // Stop here if we are on index.html!

//   const current = quizQuestions[currentQuestionIndex];
//   document.getElementById("question-counter").textContent =
//     `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
//   questionText.textContent = current.question;
//   feedbackEl.textContent = "";
//   nextBtn.classList.add("hidden");
//   choicesBox.innerHTML = "";

//   current.choices.forEach((choice, index) => {
//     const btn = document.createElement("button");
//     btn.type = "button";
//     btn.className = "choice-btn";
//     btn.textContent = choice;
//     btn.addEventListener("click", () => checkAnswer(index, btn));
//     choicesBox.appendChild(btn);
//   });
// }

// function checkAnswer(selectedIndex, clickedBtn) {
//   const current = quizQuestions[currentQuestionIndex];
//   const allButtons = document.querySelectorAll(".choice-btn");
//   const feedbackEl = document.getElementById("quiz-feedback");
//   const nextBtn = document.getElementById("next-btn");

//   allButtons.forEach((btn) => (btn.disabled = true));

//   if (selectedIndex === current.answer) {
//     clickedBtn.classList.add("correct");
//     feedbackEl.textContent = `✅ Correct! ${current.explanation}`;
//   } else {
//     clickedBtn.classList.add("wrong");
//     allButtons[current.answer].classList.add("correct");
//     feedbackEl.textContent = `❌ Incorrect. ${current.explanation}`;
//   }

//   nextBtn.textContent =
//     currentQuestionIndex < quizQuestions.length - 1 ? "Next Question →" : "Finish Quiz";
//   nextBtn.classList.remove("hidden");
// }

// function setupNextButton() {
//   const nextBtn = document.getElementById("next-btn");
//   if (!nextBtn) return;

//   nextBtn.addEventListener("click", () => {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < quizQuestions.length) {
//       loadQuestion();
//     } else {
//       document.getElementById("question-counter").textContent = "Quiz Complete!";
//       document.getElementById("question-text").textContent = "Great job practicing today!";
//       document.getElementById("choices-container").innerHTML = "";
//       document.getElementById("quiz-feedback").textContent =
//         "Click Back to Dashboard at the top to return home.";
//       nextBtn.classList.add("hidden");
//     }
//   });
// }

// // 4. STARTUP: Run automatically when either page finishes loading
// document.addEventListener("DOMContentLoaded", () => {
//   renderDashboard();
//   setupNavigation();
//   loadQuestion();
//   setupNextButton();
// });