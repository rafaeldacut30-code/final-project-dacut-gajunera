// 1. DATA: Starting pet stats, evolution stages (Pawmi -> Pawmo -> Pawmot), & quiz questions
const defaultPetData = {
  level: 1,
  exp: 0,
  streak: 0,
  totalScore: 0
};

const petStages = [
  {
    level: 1,
    name: "Pawmi",
    alt: "Stage 1 Pawmi electric mouse virtual pet",
    quotes: [
      "Pawmi! Let's take a quiz to earn EXP!",
      "Zzzzt! A daily study streak helps me evolve!",
      "Paw-paw! You've got this—keep studying!"
    ],
    image: "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140">
        <ellipse cx="44" cy="36" rx="14" ry="24" transform="rotate(-20 44 36)" fill="#f97316" stroke="#7c2d12" stroke-width="3"/>
        <ellipse cx="96" cy="36" rx="14" ry="24" transform="rotate(20 96 36)" fill="#f97316" stroke="#7c2d12" stroke-width="3"/>
        <ellipse cx="44" cy="38" rx="7" ry="13" transform="rotate(-20 44 38)" fill="#fde047"/>
        <ellipse cx="96" cy="38" rx="7" ry="13" transform="rotate(20 96 38)" fill="#fde047"/>
        <circle cx="70" cy="76" r="42" fill="#fb923c" stroke="#7c2d12" stroke-width="3"/>
        <ellipse cx="70" cy="92" rx="26" ry="20" fill="#ffedd5"/>
        <polygon points="62,36 70,22 78,36" fill="#fb923c" stroke="#7c2d12" stroke-width="3"/>
        <circle cx="54" cy="70" r="5" fill="#1e293b"/>
        <circle cx="86" cy="70" r="5" fill="#1e293b"/>
        <circle cx="52" cy="68" r="1.8" fill="#ffffff"/>
        <circle cx="84" cy="68" r="1.8" fill="#ffffff"/>
        <circle cx="42" cy="82" r="9" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
        <circle cx="98" cy="82" r="9" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
        <ellipse cx="70" cy="79" rx="4" ry="3" fill="#7c2d12"/>
        <path d="M63 86 Q70 93 77 86" fill="none" stroke="#7c2d12" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    `)
  },
  {
    level: 2,
    name: "Pawmo",
    alt: "Stage 2 Pawmo evolved electric virtual pet",
    quotes: [
      "Pawmo! Standing tall thanks to your study streak!",
      "Bzzzt! One more quiz gets us closer to Pawmot!",
      "Keep going! Your focus is super effective!"
    ],
    image: "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140">
        <ellipse cx="42" cy="30" rx="14" ry="26" transform="rotate(-18 42 30)" fill="#f97316" stroke="#7c2d12" stroke-width="3"/>
        <ellipse cx="98" cy="30" rx="14" ry="26" transform="rotate(18 98 30)" fill="#f97316" stroke="#7c2d12" stroke-width="3"/>
        <ellipse cx="42" cy="32" rx="7" ry="14" transform="rotate(-18 42 32)" fill="#fde047"/>
        <ellipse cx="98" cy="32" rx="7" ry="14" transform="rotate(18 98 32)" fill="#fde047"/>
        <ellipse cx="70" cy="96" rx="34" ry="32" fill="#fb923c" stroke="#7c2d12" stroke-width="3"/>
        <circle cx="70" cy="62" r="34" fill="#fb923c" stroke="#7c2d12" stroke-width="3"/>
        <polygon points="56,30 64,14 70,28 76,14 84,30" fill="#fb923c" stroke="#7c2d12" stroke-width="3"/>
        <ellipse cx="70" cy="72" rx="22" ry="16" fill="#ffedd5"/>
        <circle cx="56" cy="58" r="4.5" fill="#1e293b"/>
        <circle cx="84" cy="58" r="4.5" fill="#1e293b"/>
        <circle cx="44" cy="68" r="8.5" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
        <circle cx="96" cy="68" r="8.5" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
        <ellipse cx="36" cy="96" rx="10" ry="14" fill="#ffedd5" stroke="#7c2d12" stroke-width="2.5"/>
        <ellipse cx="104" cy="96" rx="10" ry="14" fill="#ffedd5" stroke="#7c2d12" stroke-width="2.5"/>
        <path d="M64 72 Q70 79 76 72" fill="none" stroke="#7c2d12" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    `)
  },
  {
    level: 3,
    name: "Pawmot",
    alt: "Stage 3 Pawmot final evolution electric virtual pet",
    quotes: [
      "Pawmot! Maximum study power unlocked!",
      "⚡ Full charge! Ready to ace any quiz!",
      "Unstoppable streak! Let's keep leveling up!"
    ],
    image: "data:image/svg+xml;utf8," + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 140">
        <polygon points="18,44 26,34 22,48 32,42 20,58" fill="#facc15"/>
        <polygon points="122,44 114,34 118,48 108,42 120,58" fill="#facc15"/>
        <ellipse cx="40" cy="28" rx="14" ry="27" transform="rotate(-16 40 28)" fill="#ea580c" stroke="#7c2d12" stroke-width="3"/>
        <ellipse cx="100" cy="28" rx="14" ry="27" transform="rotate(16 100 28)" fill="#ea580c" stroke="#7c2d12" stroke-width="3"/>
        <ellipse cx="40" cy="30" rx="7" ry="15" transform="rotate(-16 40 30)" fill="#fef08a"/>
        <ellipse cx="100" cy="30" rx="7" ry="15" transform="rotate(16 100 30)" fill="#fef08a"/>
        <ellipse cx="70" cy="96" rx="36" ry="33" fill="#f97316" stroke="#7c2d12" stroke-width="3"/>
        <circle cx="70" cy="60" r="34" fill="#f97316" stroke="#7c2d12" stroke-width="3"/>
        <polygon points="50,30 58,10 68,26 74,8 82,26 90,12 88,30" fill="#f97316" stroke="#7c2d12" stroke-width="3"/>
        <ellipse cx="70" cy="70" rx="23" ry="16" fill="#ffedd5"/>
        <circle cx="56" cy="56" r="4.5" fill="#1e293b"/>
        <circle cx="84" cy="56" r="4.5" fill="#1e293b"/>
        <circle cx="43" cy="66" r="9" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
        <circle cx="97" cy="66" r="9" fill="#facc15" stroke="#ca8a04" stroke-width="2"/>
        <ellipse cx="32" cy="94" rx="12" ry="16" fill="#fef08a" stroke="#7c2d12" stroke-width="2.5"/>
        <ellipse cx="108" cy="94" rx="12" ry="16" fill="#fef08a" stroke="#7c2d12" stroke-width="2.5"/>
        <path d="M62 70 Q70 79 78 70" fill="none" stroke="#7c2d12" stroke-width="2.5" stroke-linecap="round"/>
      </svg>
    `)
  }
];

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

// 2. INDEX.HTML: Level calculation (AC3.1), Dynamic Dashboard (AC3.2), & Interactive Pet
function getPetData() {
  const saved = localStorage.getItem("pomogochiData");
  return saved ? JSON.parse(saved) : { ...defaultPetData };
}

function calculatePetLevel(exp, streak) {
  if (exp >= 100 && streak >= 2) {
    return 3 + Math.floor((exp - 100) / 60); // Pawmot (Level 3+)
  }
  if (exp >= 40 && streak >= 1) {
    return 2; // Pawmo (Level 2)
  }
  return 1; // Pawmi (Level 1)
}

function getCurrentStage(level) {
  if (level >= 3) return petStages[2]; // Pawmot
  if (level === 2) return petStages[1]; // Pawmo
  return petStages[0]; // Pawmi
}

function renderDashboard() {
  const petImg = document.getElementById("pet-image");
  const stageLabel = document.getElementById("pet-stage-label");
  if (!petImg || !stageLabel) return; // Stop here if we are on app.html!

  const pet = getPetData();
  pet.level = calculatePetLevel(pet.exp, pet.streak);
  localStorage.setItem("pomogochiData", JSON.stringify(pet));

  const stage = getCurrentStage(pet.level);
  petImg.src = stage.image;
  petImg.alt = stage.alt;
  stageLabel.textContent = `${stage.name} • Level ${pet.level}`;

  document.getElementById("streak-count").textContent = pet.streak;
  document.getElementById("streak-pet-level").textContent = pet.level;
  document.getElementById("pet-level").textContent = pet.level;
  document.getElementById("pet-exp").textContent = pet.exp;
  document.getElementById("total-score").textContent = pet.totalScore;
}

let speechTimeout;

function setupPetInteraction() {
  const petImg = document.getElementById("pet-image");
  const speechBubble = document.getElementById("pet-speech");
  if (!petImg || !speechBubble) return;

  petImg.title = "Click to cheer on your PomoGochi!";

  petImg.addEventListener("click", () => {
    const pet = getPetData();
    const stage = getCurrentStage(pet.level);
    const randomQuote = stage.quotes[Math.floor(Math.random() * stage.quotes.length)];

    // Restart the bounce animation cleanly on every click
    petImg.classList.remove("pet-bounce");
    void petImg.offsetWidth;
    petImg.classList.add("pet-bounce");

    // Show speech bubble and hide after 2.4 seconds
    speechBubble.textContent = randomQuote;
    speechBubble.classList.remove("hidden");

    clearTimeout(speechTimeout);
    speechTimeout = setTimeout(() => {
      speechBubble.classList.add("hidden");
    }, 2400);
  });

  petImg.addEventListener("animationend", () => {
    petImg.classList.remove("pet-bounce");
  });
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

// 3. APP.HTML: Quiz logic + EXP/Streak saving to localStorage (AC3.1)
let currentQuestionIndex = 0;
let sessionCorrectCount = 0;

function loadQuestion() {
  const questionText = document.getElementById("question-text");
  const choicesBox = document.getElementById("choices-container");
  const feedbackEl = document.getElementById("quiz-feedback");
  const nextBtn = document.getElementById("next-btn");
  if (!questionText || !choicesBox) return; // Stop here if we are on index.html!

  const current = quizQuestions[currentQuestionIndex];
  document.getElementById("question-counter").textContent =
    `Question ${currentQuestionIndex + 1} of ${quizQuestions.length}`;
  questionText.textContent = current.question;
  feedbackEl.textContent = "";
  nextBtn.classList.add("hidden");
  choicesBox.innerHTML = "";

  current.choices.forEach((choice, index) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice-btn";
    btn.textContent = choice;
    btn.addEventListener("click", () => checkAnswer(index, btn));
    choicesBox.appendChild(btn);
  });
}

function checkAnswer(selectedIndex, clickedBtn) {
  const current = quizQuestions[currentQuestionIndex];
  const allButtons = document.querySelectorAll(".choice-btn");
  const feedbackEl = document.getElementById("quiz-feedback");
  const nextBtn = document.getElementById("next-btn");

  allButtons.forEach((btn) => (btn.disabled = true));

  if (selectedIndex === current.answer) {
    sessionCorrectCount++;
    clickedBtn.classList.add("correct");
    feedbackEl.textContent = `✅ Correct! (+20 EXP) ${current.explanation}`;
  } else {
    clickedBtn.classList.add("wrong");
    allButtons[current.answer].classList.add("correct");
    feedbackEl.textContent = `❌ Incorrect. ${current.explanation}`;
  }

  nextBtn.textContent =
    currentQuestionIndex < quizQuestions.length - 1 ? "Next Question →" : "Finish Quiz";
  nextBtn.classList.remove("hidden");
}

function saveQuizProgress() {
  const pet = getPetData();
  const earnedExp = sessionCorrectCount * 20;

  pet.exp += earnedExp;
  pet.totalScore += sessionCorrectCount;
  pet.streak += 1;
  pet.level = calculatePetLevel(pet.exp, pet.streak);

  localStorage.setItem("pomogochiData", JSON.stringify(pet));
  return { earnedExp, pet };
}

function setupNextButton() {
  const nextBtn = document.getElementById("next-btn");
  if (!nextBtn) return;

  nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      loadQuestion();
    } else {
      const { earnedExp, pet } = saveQuizProgress();
      document.getElementById("question-counter").textContent = "Quiz Complete!";
      document.getElementById("question-text").textContent =
        `You got ${sessionCorrectCount} of ${quizQuestions.length} right (+${earnedExp} EXP)!`;
      document.getElementById("choices-container").innerHTML = "";
      document.getElementById("quiz-feedback").textContent =
        `Streak: ${pet.streak} | Total EXP: ${pet.exp} | Pet Level: ${pet.level}. Click Back to Dashboard to see your pet!`;
      nextBtn.classList.add("hidden");
    }
  });
}

// 4. STARTUP: Run automatically when either page finishes loading
document.addEventListener("DOMContentLoaded", () => {
  renderDashboard();
  setupPetInteraction();
  setupNavigation();
  loadQuestion();
  setupNextButton();
});