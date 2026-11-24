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
    answer: 1
  },
  {
    question: "Which storage keeps data even after closing the tab?",
    choices: ["sessionStorage", "tempStorage", "localStorage", "cacheOnly"],
    answer: 2
  },
  {
    question: "Which CSS property turns a container into Flexbox?",
    choices: ["display: grid;", "position: flex;", "display: flex;", "align: flex;"],
    answer: 2
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
// 3. APP.HTML: Show Question 1 & choices right when quiz loads (AC1.2)
let currentQuestionIndex = 0;

function loadQuestion() {
  const questionText = document.getElementById("question-text");
  const choicesBox = document.getElementById("choices-container");
  if (!questionText || !choicesBox) return; // Stop here if we are on index.html!

  const current = quizQuestions[currentQuestionIndex];
  document.getElementById("question-counter").textContent =
    `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
  questionText.textContent = current.question;
  choicesBox.innerHTML = "";

  current.choices.forEach((choice) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice-btn";
    btn.textContent = choice;
    choicesBox.appendChild(btn);
  });
}

// 4. STARTUP: Run automatically when either page finishes loading
document.addEventListener("DOMContentLoaded", () => {
  renderDashboard();
  setupNavigation();
  loadQuestion();
});