const STORAGE_KEY = "pomogochi_pet";

const DEFAULT_PET = {
  species: "pup",
  level: 1,
  exp: 0,
  totalScore: 0,
  streak: 0
};

/* Multi-Pet Species Catalog, Habitats & 3-Stage Evolution Names */
const PET_CATALOG = {
  pup: {
    habitatClass: "habitat-meadow",
    stages: {
      1: { name: "PomoPup", label: "Stage 1: PomoPup" },
      2: { name: "PomoPaw", label: "Stage 2: PomoPaw" },
      3: { name: "PomoChamp", label: "Stage 3: PomoChamp" }
    }
  },
  ember: {
    habitatClass: "habitat-volcano",
    stages: {
      1: { name: "EmberKit", label: "Stage 1: EmberKit" },
      2: { name: "BlazeFox", label: "Stage 2: BlazeFox" },
      3: { name: "SolarFang", label: "Stage 3: SolarFang" }
    }
  },
  volt: {
    habitatClass: "habitat-storm",
    stages: {
      1: { name: "VoltKit", label: "Stage 1: VoltKit" },
      2: { name: "SparkLynx", label: "Stage 2: SparkLynx" },
      3: { name: "StormClaw", label: "Stage 3: StormClaw" }
    }
  }
};

/* Detailed Cute Creature Vector Sprites (3 Species x 3 Evolution Stages) */
const PET_SPRITES = {
  pup: {
    1: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M22 72 Q6 60 16 48 Q26 42 32 62 Z" fill="#facc15" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <ellipse cx="42" cy="98" rx="11" ry="8" fill="#fde047" stroke="#1e293b" stroke-width="3.5"/>
        <ellipse cx="78" cy="98" rx="11" ry="8" fill="#fde047" stroke="#1e293b" stroke-width="3.5"/>
        <ellipse cx="60" cy="70" rx="34" ry="30" fill="#fde047" stroke="#1e293b" stroke-width="3.5"/>
        <ellipse cx="60" cy="76" rx="20" ry="17" fill="#fef9c3"/>
        <path d="M35 45 L24 16 L48 36 Z" fill="#fde047" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <path d="M28 24 L24 16 L36 25 Z" fill="#1e293b"/>
        <path d="M85 45 L96 16 L72 36 Z" fill="#fde047" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <path d="M92 24 L96 16 L84 25 Z" fill="#1e293b"/>
        <circle cx="46" cy="60" r="6.5" fill="#1e293b"/>
        <circle cx="44" cy="58" r="2.2" fill="#ffffff"/>
        <circle cx="74" cy="60" r="6.5" fill="#1e293b"/>
        <circle cx="72" cy="58" r="2.2" fill="#ffffff"/>
        <circle cx="35" cy="71" r="6" fill="#fb7185"/>
        <circle cx="85" cy="71" r="6" fill="#fb7185"/>
        <ellipse cx="60" cy="67" rx="3.5" ry="2.5" fill="#1e293b"/>
        <path d="M51 74 Q60 83 69 74" fill="none" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
      </svg>
    `,
    2: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M24 76 L6 62 L20 56 L10 42 L34 60 Z" fill="#f59e0b" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <ellipse cx="42" cy="100" rx="12" ry="8" fill="#fbbf24" stroke="#1e293b" stroke-width="3.5"/>
        <ellipse cx="78" cy="100" rx="12" ry="8" fill="#fbbf24" stroke="#1e293b" stroke-width="3.5"/>
        <ellipse cx="60" cy="70" rx="36" ry="31" fill="#fbbf24" stroke="#1e293b" stroke-width="3.5"/>
        <path d="M40 60 Q60 52 80 60 Q82 88 60 92 Q38 88 40 60 Z" fill="#fef3c7"/>
        <path d="M52 26 L60 12 L68 26 Z" fill="#f59e0b" stroke="#1e293b" stroke-width="3" stroke-linejoin="round"/>
        <path d="M33 44 L18 10 L47 34 Z" fill="#fbbf24" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <path d="M24 20 L18 10 L33 21 Z" fill="#1e293b"/>
        <path d="M87 44 L102 10 L73 34 Z" fill="#fbbf24" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <path d="M96 20 L102 10 L87 21 Z" fill="#1e293b"/>
        <path d="M37 83 Q60 91 83 83" fill="none" stroke="#3b82f6" stroke-width="6" stroke-linecap="round"/>
        <polygon points="60,82 55,91 61,91 58,99 67,89 61,89" fill="#fde047" stroke="#1e293b" stroke-width="1.5"/>
        <circle cx="46" cy="59" r="6.5" fill="#1e293b"/>
        <circle cx="44" cy="57" r="2.2" fill="#ffffff"/>
        <circle cx="74" cy="59" r="6.5" fill="#1e293b"/>
        <circle cx="72" cy="57" r="2.2" fill="#ffffff"/>
        <circle cx="34" cy="70" r="6" fill="#f97316"/>
        <circle cx="86" cy="70" r="6" fill="#f97316"/>
        <path d="M51 73 Q60 82 69 73" fill="none" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
      </svg>
    `,
    3: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M26 78 L4 58 L20 52 L8 34 L36 58 Z" fill="#f97316" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <path d="M94 78 L116 58 L100 52 L112 34 L84 58 Z" fill="#f97316" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <ellipse cx="42" cy="102" rx="13" ry="8" fill="#f59e0b" stroke="#1e293b" stroke-width="3.5"/>
        <ellipse cx="78" cy="102" rx="13" ry="8" fill="#f59e0b" stroke="#1e293b" stroke-width="3.5"/>
        <ellipse cx="60" cy="72" rx="38" ry="31" fill="#f59e0b" stroke="#1e293b" stroke-width="3.5"/>
        <path d="M38 62 Q60 54 82 62 Q84 92 60 96 Q36 92 38 62 Z" fill="#fef9c3"/>
        <path d="M33 45 L16 8 L48 35 Z" fill="#f59e0b" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <path d="M22 19 L16 8 L32 20 Z" fill="#1e293b"/>
        <path d="M87 45 L104 8 L72 35 Z" fill="#f59e0b" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <path d="M98 19 L104 8 L88 20 Z" fill="#1e293b"/>
        <polygon points="44,33 49,17 55,27 60,13 65,27 71,17 76,33" fill="#fde047" stroke="#1e293b" stroke-width="2.8" stroke-linejoin="round"/>
        <circle cx="46" cy="61" r="6.5" fill="#1e293b"/>
        <circle cx="44" cy="59" r="2.2" fill="#ffffff"/>
        <circle cx="74" cy="61" r="6.5" fill="#1e293b"/>
        <circle cx="72" cy="59" r="2.2" fill="#ffffff"/>
        <circle cx="34" cy="72" r="6" fill="#ef4444"/>
        <circle cx="86" cy="72" r="6" fill="#ef4444"/>
        <path d="M50 74 Q60 85 70 74 Z" fill="#fb7185" stroke="#1e293b" stroke-width="2.5" stroke-linejoin="round"/>
      </svg>
    `
  },
  ember: {
    1: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M24 76 Q4 62 14 42 Q26 36 28 50 Q36 42 36 66 Z" fill="#f97316" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <path d="M16 62 Q10 52 18 44 Q24 52 22 64 Z" fill="#fde047"/>
        <ellipse cx="43" cy="99" rx="11" ry="8" fill="#fb923c" stroke="#1e293b" stroke-width="3.5"/>
        <ellipse cx="77" cy="99" rx="11" ry="8" fill="#fb923c" stroke="#1e293b" stroke-width="3.5"/>
        <ellipse cx="60" cy="71" rx="34" ry="29" fill="#fb923c" stroke="#1e293b" stroke-width="3.5"/>
        <ellipse cx="60" cy="77" rx="20" ry="17" fill="#ffedd5"/>
        <path d="M34 48 L22 18 L50 38 Z" fill="#fb923c" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <path d="M35 43 L27 25 L44 37 Z" fill="#fef08a"/>
        <path d="M86 48 L98 18 L70 38 Z" fill="#fb923c" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <path d="M85 43 L93 25 L76 37 Z" fill="#fef08a"/>
        <path d="M54 36 Q60 22 66 36 Z" fill="#fde047" stroke="#1e293b" stroke-width="2.5" stroke-linejoin="round"/>
        <circle cx="46" cy="61" r="6.5" fill="#1e293b"/>
        <circle cx="44" cy="59" r="2.2" fill="#ffffff"/>
        <circle cx="74" cy="61" r="6.5" fill="#1e293b"/>
        <circle cx="72" cy="59" r="2.2" fill="#ffffff"/>
        <circle cx="35" cy="72" r="5.5" fill="#ef4444" opacity="0.75"/>
        <circle cx="85" cy="72" r="5.5" fill="#ef4444" opacity="0.75"/>
        <ellipse cx="60" cy="68" rx="3.5" ry="2.5" fill="#1e293b"/>
        <path d="M52 75 Q60 82 68 75" fill="none" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
      </svg>
    `,
    2: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M24 78 Q2 58 14 34 Q26 30 28 46 Q38 34 38 66 Z" fill="#ea580c" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <path d="M16 64 Q8 50 18 38 Q26 48 24 64 Z" fill="#fde047"/>
        <ellipse cx="42" cy="100" rx="12" ry="8" fill="#f97316" stroke="#1e293b" stroke-width="3.5"/>
        <ellipse cx="78" cy="100" rx="12" ry="8" fill="#f97316" stroke="#1e293b" stroke-width="3.5"/>
        <ellipse cx="60" cy="70" rx="36" ry="30" fill="#f97316" stroke="#1e293b" stroke-width="3.5"/>
        <path d="M36 66 Q60 58 84 66 Q82 92 60 94 Q38 92 36 66 Z" fill="#fff7ed"/>
        <path d="M33 46 L18 12 L49 36 Z" fill="#f97316" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <path d="M34 41 L24 20 L43 35 Z" fill="#fde047"/>
        <path d="M87 46 L102 12 L71 36 Z" fill="#f97316" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <path d="M86 41 L96 20 L77 35 Z" fill="#fde047"/>
        <path d="M48 36 L55 18 L60 28 L65 18 L72 36 Z" fill="#fde047" stroke="#1e293b" stroke-width="2.5" stroke-linejoin="round"/>
        <circle cx="46" cy="60" r="6.5" fill="#1e293b"/>
        <circle cx="44" cy="58" r="2.2" fill="#ffffff"/>
        <circle cx="74" cy="60" r="6.5" fill="#1e293b"/>
        <circle cx="72" cy="58" r="2.2" fill="#ffffff"/>
        <circle cx="34" cy="71" r="6" fill="#dc2626" opacity="0.8"/>
        <circle cx="86" cy="71" r="6" fill="#dc2626" opacity="0.8"/>
        <path d="M51 74 Q60 83 69 74" fill="none" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
      </svg>
    `,
    3: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M26 78 Q2 56 14 30 Q26 26 28 44 Q38 32 38 66 Z" fill="#dc2626" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <path d="M94 78 Q118 56 106 30 Q94 26 92 44 Q82 32 82 66 Z" fill="#dc2626" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <ellipse cx="42" cy="102" rx="13" ry="8" fill="#ea580c" stroke="#1e293b" stroke-width="3.5"/>
        <ellipse cx="78" cy="102" rx="13" ry="8" fill="#ea580c" stroke="#1e293b" stroke-width="3.5"/>
        <ellipse cx="60" cy="72" rx="38" ry="31" fill="#ea580c" stroke="#1e293b" stroke-width="3.5"/>
        <path d="M36 64 Q60 54 84 64 Q84 94 60 96 Q36 94 36 64 Z" fill="#fef3c7"/>
        <path d="M33 46 L16 10 L49 36 Z" fill="#ea580c" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <path d="M87 46 L104 10 L71 36 Z" fill="#ea580c" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <path d="M44 35 L50 14 L56 26 L60 10 L64 26 L70 14 L76 35 Z" fill="#fde047" stroke="#1e293b" stroke-width="2.8" stroke-linejoin="round"/>
        <circle cx="46" cy="61" r="6.5" fill="#1e293b"/>
        <circle cx="44" cy="59" r="2.2" fill="#ffffff"/>
        <circle cx="74" cy="61" r="6.5" fill="#1e293b"/>
        <circle cx="72" cy="59" r="2.2" fill="#ffffff"/>
        <circle cx="34" cy="72" r="6" fill="#fde047"/>
        <circle cx="86" cy="72" r="6" fill="#fde047"/>
        <path d="M50 74 Q60 85 70 74 Z" fill="#fb7185" stroke="#1e293b" stroke-width="2.5" stroke-linejoin="round"/>
      </svg>
    `
  },
  volt: {
    1: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <polygon points="26,74 8,62 20,54 10,40 34,58" fill="#facc15" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <ellipse cx="43" cy="99" rx="11" ry="8" fill="#818cf8" stroke="#1e293b" stroke-width="3.5"/>
        <ellipse cx="77" cy="99" rx="11" ry="8" fill="#818cf8" stroke="#1e293b" stroke-width="3.5"/>
        <ellipse cx="60" cy="71" rx="34" ry="29" fill="#818cf8" stroke="#1e293b" stroke-width="3.5"/>
        <ellipse cx="60" cy="77" rx="20" ry="17" fill="#e0e7ff"/>
        <path d="M35 46 L24 16 L49 37 Z" fill="#818cf8" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <path d="M35 41 L28 24 L43 36 Z" fill="#fde047"/>
        <path d="M85 46 L96 16 L71 37 Z" fill="#818cf8" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <path d="M85 41 L92 24 L77 36 Z" fill="#fde047"/>
        <polygon points="60,30 55,40 61,40 58,48 67,38 61,38" fill="#fde047" stroke="#1e293b" stroke-width="1.5"/>
        <circle cx="46" cy="61" r="6.5" fill="#1e293b"/>
        <circle cx="44" cy="59" r="2.2" fill="#ffffff"/>
        <circle cx="74" cy="61" r="6.5" fill="#1e293b"/>
        <circle cx="72" cy="59" r="2.2" fill="#ffffff"/>
        <circle cx="35" cy="72" r="5.5" fill="#facc15"/>
        <circle cx="85" cy="72" r="5.5" fill="#facc15"/>
        <ellipse cx="60" cy="68" rx="3.5" ry="2.5" fill="#1e293b"/>
        <path d="M52 75 Q60 82 68 75" fill="none" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
      </svg>
    `,
    2: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <polygon points="24,76 4,60 18,52 6,36 34,58" fill="#fde047" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <ellipse cx="42" cy="100" rx="12" ry="8" fill="#6366f1" stroke="#1e293b" stroke-width="3.5"/>
        <ellipse cx="78" cy="100" rx="12" ry="8" fill="#6366f1" stroke="#1e293b" stroke-width="3.5"/>
        <ellipse cx="60" cy="70" rx="36" ry="30" fill="#6366f1" stroke="#1e293b" stroke-width="3.5"/>
        <path d="M36 66 Q60 58 84 66 Q82 92 60 94 Q38 92 36 66 Z" fill="#eef2ff"/>
        <path d="M33 45 L18 10 L48 35 Z" fill="#6366f1" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <path d="M34 40 L24 18 L43 34 Z" fill="#fde047"/>
        <path d="M87 45 L102 10 L72 35 Z" fill="#6366f1" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <path d="M86 40 L96 18 L77 34 Z" fill="#fde047"/>
        <polygon points="50,35 55,18 60,28 65,18 70,35" fill="#fde047" stroke="#1e293b" stroke-width="2.5" stroke-linejoin="round"/>
        <circle cx="46" cy="60" r="6.5" fill="#1e293b"/>
        <circle cx="44" cy="58" r="2.2" fill="#ffffff"/>
        <circle cx="74" cy="60" r="6.5" fill="#1e293b"/>
        <circle cx="72" cy="58" r="2.2" fill="#ffffff"/>
        <circle cx="34" cy="71" r="6" fill="#fde047"/>
        <circle cx="86" cy="71" r="6" fill="#fde047"/>
        <path d="M51 74 Q60 83 69 74" fill="none" stroke="#1e293b" stroke-width="3" stroke-linecap="round"/>
      </svg>
    `,
    3: `
      <svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <polygon points="24,76 4,58 18,50 6,32 36,56" fill="#fde047" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <polygon points="96,76 116,58 102,50 114,32 84,56" fill="#fde047" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <ellipse cx="42" cy="102" rx="13" ry="8" fill="#4f46e5" stroke="#1e293b" stroke-width="3.5"/>
        <ellipse cx="78" cy="102" rx="13" ry="8" fill="#4f46e5" stroke="#1e293b" stroke-width="3.5"/>
        <ellipse cx="60" cy="72" rx="38" ry="31" fill="#4f46e5" stroke="#1e293b" stroke-width="3.5"/>
        <path d="M36 64 Q60 54 84 64 Q84 94 60 96 Q36 94 36 64 Z" fill="#e0e7ff"/>
        <path d="M33 45 L16 8 L48 35 Z" fill="#4f46e5" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <path d="M87 45 L104 8 L72 35 Z" fill="#4f46e5" stroke="#1e293b" stroke-width="3.5" stroke-linejoin="round"/>
        <polygon points="44,34 49,14 55,26 60,10 65,26 71,14 76,34" fill="#fde047" stroke="#1e293b" stroke-width="2.8" stroke-linejoin="round"/>
        <circle cx="46" cy="61" r="6.5" fill="#1e293b"/>
        <circle cx="44" cy="59" r="2.2" fill="#ffffff"/>
        <circle cx="74" cy="61" r="6.5" fill="#1e293b"/>
        <circle cx="72" cy="59" r="2.2" fill="#ffffff"/>
        <circle cx="34" cy="72" r="6" fill="#38bdf8"/>
        <circle cx="86" cy="72" r="6" fill="#38bdf8"/>
        <path d="M50 74 Q60 85 70 74 Z" fill="#fb7185" stroke="#1e293b" stroke-width="2.5" stroke-linejoin="round"/>
      </svg>
    `
  }
};

/* 50-Item Question Bank */
const QUIZ_BANK = [
  // MATH (17 items)
  { subject: "Math", question: "Solve for x: 2x + 6 = 14", choices: ["3", "4", "5", "7"], correctIndex: 1, explanation: "Subtract 6 from both sides (2x = 8), then divide by 2 to get x = 4." },
  { subject: "Math", question: "What is 15% of 200?", choices: ["15", "20", "30", "45"], correctIndex: 2, explanation: "10% of 200 is 20 and 5% is 10, so 20 + 10 = 30." },
  { subject: "Math", question: "What is the area of a rectangle with length 8 cm and width 5 cm?", choices: ["13 sq cm", "26 sq cm", "40 sq cm", "80 sq cm"], correctIndex: 2, explanation: "Area = length × width = 8 × 5 = 40 square centimeters." },
  { subject: "Math", question: "Simplify the fraction 18/24 to its lowest terms.", choices: ["2/3", "3/4", "6/8", "9/12"], correctIndex: 1, explanation: "Divide both numerator and denominator by their greatest common factor, 6." },
  { subject: "Math", question: "What is the value of 3² + 4²?", choices: ["12", "14", "25", "49"], correctIndex: 2, explanation: "3² = 9 and 4² = 16; 9 + 16 = 25." },
  { subject: "Math", question: "If a triangle has angles 50° and 60°, what is the third angle?", choices: ["60°", "70°", "80°", "90°"], correctIndex: 1, explanation: "Angles in a triangle always add up to 180°. 180 − (50 + 60) = 70°." },
  { subject: "Math", question: "What is the mean (average) of 4, 8, 10, and 18?", choices: ["8", "9", "10", "12"], correctIndex: 2, explanation: "Sum = 4 + 8 + 10 + 18 = 40; divide by 4 numbers = 10." },
  { subject: "Math", question: "Evaluate: −7 + 12", choices: ["−19", "−5", "5", "19"], correctIndex: 2, explanation: "Starting at −7 and adding 12 moves 12 units right to +5." },
  { subject: "Math", question: "What is the perimeter of a square whose side length is 9 m?", choices: ["18 m", "27 m", "36 m", "81 m"], correctIndex: 2, explanation: "A square has 4 equal sides: 4 × 9 m = 36 m." },
  { subject: "Math", question: "Convert 0.75 into a percentage.", choices: ["0.75%", "7.5%", "75%", "750%"], correctIndex: 2, explanation: "Multiply a decimal by 100 to convert to a percent: 0.75 × 100 = 75%." },
  { subject: "Math", question: "Solve for y: 3y − 4 = 11", choices: ["3", "5", "7", "15"], correctIndex: 1, explanation: "Add 4 to both sides (3y = 15), then divide by 3 to get y = 5." },
  { subject: "Math", question: "What is the square root of 144?", choices: ["11", "12", "14", "16"], correctIndex: 1, explanation: "12 × 12 = 144, so √144 = 12." },
  { subject: "Math", question: "What is the median of the set {3, 7, 9, 14, 20}?", choices: ["7", "9", "10.6", "14"], correctIndex: 1, explanation: "The median is the middle value in an ordered list, which is 9." },
  { subject: "Math", question: "If 5 notebooks cost ₱125, how much does 1 notebook cost?", choices: ["₱15", "₱20", "₱25", "₱30"], correctIndex: 2, explanation: "Divide total cost by quantity: 125 ÷ 5 = ₱25." },
  { subject: "Math", question: "What is 2/5 + 1/5?", choices: ["3/10", "2/25", "3/5", "1/5"], correctIndex: 2, explanation: "With like denominators, add the numerators: (2 + 1)/5 = 3/5." },
  { subject: "Math", question: "What is the slope of the line y = 4x − 3?", choices: ["−3", "3", "4", "4x"], correctIndex: 2, explanation: "In slope-intercept form y = mx + b, m is the slope, so m = 4." },
  { subject: "Math", question: "How many centimeters are in 2.5 meters?", choices: ["25 cm", "250 cm", "2,500 cm", "0.25 cm"], correctIndex: 1, explanation: "1 meter = 100 centimeters, so 2.5 × 100 = 250 cm." },

  // ENGLISH (17 items)
  { subject: "English", question: "Which word is a synonym for 'abundant'?", choices: ["Scarce", "Plentiful", "Fragile", "Hidden"], correctIndex: 1, explanation: "'Abundant' and 'plentiful' both mean existing in large quantities." },
  { subject: "English", question: "Choose the correct verb form: 'Neither the teacher nor the students ___ ready.'", choices: ["is", "was", "were", "has been"], correctIndex: 2, explanation: "With 'neither/nor', the verb agrees with the closer subject ('students', plural)." },
  { subject: "English", question: "Identify the figure of speech: 'The wind whispered through the trees.'", choices: ["Simile", "Hyperbole", "Personification", "Alliteration"], correctIndex: 2, explanation: "Personification gives human traits ('whispered') to non-human things ('wind')." },
  { subject: "English", question: "Which sentence uses 'their' correctly?", choices: ["Put the books over their.", "Their going to the library.", "The students forgot their notes.", "Its their's to keep."], correctIndex: 2, explanation: "'Their' is the possessive pronoun showing ownership by the students." },
  { subject: "English", question: "What is the antonym of 'transparent'?", choices: ["Clear", "Opaque", "Fragile", "Bright"], correctIndex: 1, explanation: "'Opaque' means not able to be seen through, the opposite of 'transparent'." },
  { subject: "English", question: "Which word is an adverb in: 'She quickly finished her homework.'?", choices: ["She", "quickly", "finished", "homework"], correctIndex: 1, explanation: "'Quickly' modifies the verb 'finished', making it an adverb." },
  { subject: "English", question: "Choose the correctly punctuated sentence.", choices: ["Lets eat Grandma!", "Let's eat, Grandma!", "Lets' eat Grandma.", "Let's, eat Grandma!"], correctIndex: 1, explanation: "'Let's' is a contraction of 'let us', and the comma separates direct address." },
  { subject: "English", question: "What does the prefix 'bene-' mean in words like 'benefit' and 'benevolent'?", choices: ["Bad", "Good or well", "Against", "Before"], correctIndex: 1, explanation: "The Latin root 'bene-' means good or well." },
  { subject: "English", question: "Identify the main clause: 'Although it rained, the team practiced outside.'", choices: ["Although it rained", "the team practiced outside", "Although it", "practiced outside"], correctIndex: 1, explanation: "'The team practiced outside' can stand alone as a complete sentence." },
  { subject: "English", question: "Which word is spelled correctly?", choices: ["Accomodate", "Accommodate", "Acommodate", "Accommadate"], correctIndex: 1, explanation: "'Accommodate' has double 'c' and double 'm'." },
  { subject: "English", question: "What is a thesis statement in an essay?", choices: ["The final concluding quote", "A list of references", "The central claim or main idea", "A transition word"], correctIndex: 2, explanation: "A thesis statement expresses the core argument or purpose of an essay." },
  { subject: "English", question: "Which sentence is written in passive voice?", choices: ["The chef cooked the meal.", "The meal was cooked by the chef.", "The chef is cooking dinner.", "Guests enjoyed the meal."], correctIndex: 1, explanation: "In passive voice, the subject ('The meal') receives the action." },
  { subject: "English", question: "What does 'concise' mean?", choices: ["Long and repetitive", "Brief and clear", "Confusing", "Emotional"], correctIndex: 1, explanation: "'Concise' means giving a lot of information clearly in a few words." },
  { subject: "English", question: "Choose the correct pronoun: 'Between you and ___, this quiz is fun.'", choices: ["I", "me", "myself", "mine"], correctIndex: 1, explanation: "'Between' is a preposition, so it takes the object pronoun 'me'." },
  { subject: "English", question: "Which of the following is a simile?", choices: ["Time is a thief.", "He is as brave as a lion.", "The classroom was a zoo.", "Stars danced in the sky."], correctIndex: 1, explanation: "A simile compares two things using 'like' or 'as'." },
  { subject: "English", question: "What is the past participle of the verb 'write'?", choices: ["Wrote", "Writing", "Written", "Writes"], correctIndex: 2, explanation: "The principal parts are write (present), wrote (past), and written (past participle)." },
  { subject: "English", question: "Which word best completes: 'The evidence had a strong ___ on the jury.'", choices: ["affect", "effect", "infect", "defect"], correctIndex: 1, explanation: "'Effect' is usually a noun meaning result or impact; 'affect' is usually a verb." },

  // PROGRAMMING (8 items)
  { subject: "Programming", question: "Which JavaScript keyword declares a variable whose value cannot be reassigned?", choices: ["var", "let", "const", "static"], correctIndex: 2, explanation: "'const' creates a block-scoped constant reference that cannot be reassigned." },
  { subject: "Programming", question: "What does HTML stand for?", choices: ["HyperText Markup Language", "HighTech Machine Learning", "Hyperlink Text Management Logic", "Home Tool Markup Language"], correctIndex: 0, explanation: "HTML stands for HyperText Markup Language, used to structure web pages." },
  { subject: "Programming", question: "Which CSS property controls the space inside an element's border?", choices: ["margin", "padding", "gap", "outline"], correctIndex: 1, explanation: "Padding adds inner space between content and border; margin adds outer space." },
  { subject: "Programming", question: "What is the index of the first element in a standard JavaScript array?", choices: ["1", "0", "−1", "null"], correctIndex: 1, explanation: "JavaScript arrays are zero-indexed, so the first element is at index 0." },
  { subject: "Programming", question: "Which operator checks both value and data type equality in JavaScript?", choices: ["=", "==", "===", "!="], correctIndex: 2, explanation: "Strict equality (===) checks that both value and type match without coercion." },
  { subject: "Programming", question: "Which browser API stores key-value strings persistently across page reloads?", choices: ["console.log", "localStorage", "Math.random", "setTimeout"], correctIndex: 1, explanation: "localStorage saves string data in the browser even after the tab or browser closes." },
  { subject: "Programming", question: "Which HTML tag is used to link an external JavaScript file?", choices: ["<js>", "<link>", "<script>", "<style>"], correctIndex: 2, explanation: "The <script src=\"file.js\"></script> tag loads external JavaScript." },
  { subject: "Programming", question: "What does a 'for' loop do in programming?", choices: ["Deletes unused files", "Repeats a block of code while a condition is true", "Styles HTML headings", "Converts strings to images"], correctIndex: 1, explanation: "Loops execute a block of instructions repeatedly until a stopping condition is met." },

  // BUSINESS MANAGEMENT (8 items)
  { subject: "Business Management", question: "What does SWOT stand for in strategic planning?", choices: ["Sales, Workforce, Operations, Taxes", "Strengths, Weaknesses, Opportunities, Threats", "Systems, Workflows, Objectives, Targets", "Supply, Warehousing, Output, Trade"], correctIndex: 1, explanation: "SWOT evaluates internal Strengths/Weaknesses and external Opportunities/Threats." },
  { subject: "Business Management", question: "What is the formula for calculating Net Profit?", choices: ["Revenue + Expenses", "Total Revenue − Total Expenses", "Assets × Liabilities", "Price ÷ Quantity"], correctIndex: 1, explanation: "Net profit is what remains after subtracting all business expenses from total revenue." },
  { subject: "Business Management", question: "Which of the following is one of the 4 Ps of the Marketing Mix?", choices: ["Profit", "Promotion", "Payroll", "Policy"], correctIndex: 1, explanation: "The 4 Ps of Marketing are Product, Price, Place, and Promotion." },
  { subject: "Business Management", question: "What is a 'stakeholder' in a business?", choices: ["Only the company founder", "Any person or group affected by the business's actions", "Only government tax auditors", "Only competitors"], correctIndex: 1, explanation: "Stakeholders include employees, customers, suppliers, investors, and the community." },
  { subject: "Business Management", question: "What does ROI stand for?", choices: ["Rate of Inflation", "Return on Investment", "Record of Inventory", "Risk of Insolvency"], correctIndex: 1, explanation: "Return on Investment (ROI) measures the profitability of an investment relative to its cost." },
  { subject: "Business Management", question: "Which management function involves setting goals and deciding how to achieve them?", choices: ["Controlling", "Planning", "Staffing", "Auditing"], correctIndex: 1, explanation: "Planning establishes organizational objectives and maps out action steps." },
  { subject: "Business Management", question: "What is 'break-even point' in business?", choices: ["When losses double", "When total revenue equals total costs", "When a company closes", "When inventory runs out"], correctIndex: 1, explanation: "At the break-even point, total revenue covers total costs (zero profit, zero loss)." },
  { subject: "Business Management", question: "Why is delegation important for a manager?", choices: ["It avoids all accountability", "It empowers team members and frees time for strategic tasks", "It eliminates the need for communication", "It reduces employee skills"], correctIndex: 1, explanation: "Effective delegation builds team capability while allowing managers to focus on high-priority work." }
];

/* Load & Save Pet Progress */
function loadPet() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    savePet(DEFAULT_PET);
    return { ...DEFAULT_PET };
  }
  const parsed = JSON.parse(saved);
  if (!parsed.species || !PET_CATALOG[parsed.species]) {
    parsed.species = "pup";
  }
  return parsed;
}

function savePet(pet) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(pet));
}

function getStageNumber(level) {
  if (level >= 5) return 3;
  if (level >= 3) return 2;
  return 1;
}

function getPetStageInfo(pet) {
  const speciesKey = PET_CATALOG[pet.species] ? pet.species : "pup";
  const stageNum = getStageNumber(pet.level);
  const speciesData = PET_CATALOG[speciesKey];
  return {
    speciesKey,
    stageNum,
    habitatClass: speciesData.habitatClass,
    name: speciesData.stages[stageNum].name,
    label: speciesData.stages[stageNum].label,
    svg: PET_SPRITES[speciesKey][stageNum],
    stages: speciesData.stages
  };
}

function renderBrandLogo() {
  const brandLogoEl = document.getElementById("brand-logo");
  if (!brandLogoEl) return;
  const pet = loadPet();
  const stageInfo = getPetStageInfo(pet);
  brandLogoEl.innerHTML = stageInfo.svg;
}

function shuffleArray(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

/* Dashboard, Streak & Progress Rendering */
function renderDashboard() {
  const pet = loadPet();
  const stageInfo = getPetStageInfo(pet);
  renderBrandLogo();

  document.querySelectorAll(".pet-select-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.pet === stageInfo.speciesKey);
  });

  const dashboardView = document.getElementById("dashboard-view");
  const streakView = document.getElementById("streak-view");
  [dashboardView, streakView].forEach((viewEl) => {
    if (!viewEl) return;
    viewEl.classList.remove("habitat-meadow", "habitat-volcano", "habitat-storm");
    viewEl.classList.add(stageInfo.habitatClass);
  });

  const dashboardPetEl = document.getElementById("dashboard-pet");
  const streakPetEl = document.getElementById("streak-pet");
  const progressPetEl = document.getElementById("progress-pet");
  const stageLabelEl = document.getElementById("pet-stage-label");
  const progressStageTextEl = document.getElementById("progress-stage-text");
  const petNameEl = document.getElementById("pet-name");
  const petLevelEl = document.getElementById("pet-level");
  const streakPetLevelEl = document.getElementById("streak-pet-level");
  const petExpEl = document.getElementById("pet-exp");
  const expBarFillEl = document.getElementById("exp-bar-fill");
  const totalScoreEl = document.getElementById("total-score");
  const streakCountEl = document.getElementById("streak-count");

  if (dashboardPetEl) dashboardPetEl.innerHTML = stageInfo.svg;
  if (streakPetEl) streakPetEl.innerHTML = stageInfo.svg;
  if (progressPetEl) progressPetEl.innerHTML = stageInfo.svg;
  if (stageLabelEl) stageLabelEl.textContent = stageInfo.label;
  if (progressStageTextEl) progressStageTextEl.textContent = stageInfo.label;
  if (petNameEl) petNameEl.textContent = stageInfo.name;
  if (petLevelEl) petLevelEl.textContent = pet.level;
  if (streakPetLevelEl) streakPetLevelEl.textContent = pet.level;
  if (petExpEl) petExpEl.textContent = pet.exp;
  if (expBarFillEl) expBarFillEl.style.width = `${Math.min(pet.exp, 100)}%`;
  if (totalScoreEl) totalScoreEl.textContent = pet.totalScore;
  if (streakCountEl) streakCountEl.textContent = pet.streak;

  [1, 2, 3].forEach((stageIdx) => {
    const cardEl = document.getElementById(`evo-stage-${stageIdx}`);
    const iconEl = document.getElementById(`evo-icon-${stageIdx}`);
    const nameEl = document.getElementById(`evo-name-${stageIdx}`);

    if (iconEl) iconEl.innerHTML = PET_SPRITES[stageInfo.speciesKey][stageIdx];
    if (nameEl) nameEl.textContent = stageInfo.stages[stageIdx].name;
    if (cardEl) {
      cardEl.classList.toggle("unlocked", stageInfo.stageNum >= stageIdx);
    }
  });
}

function setupPetSelector() {
  const iconPup = document.getElementById("select-icon-pup");
  const iconEmber = document.getElementById("select-icon-ember");
  const iconVolt = document.getElementById("select-icon-volt");

  if (iconPup) iconPup.innerHTML = PET_SPRITES.pup[1];
  if (iconEmber) iconEmber.innerHTML = PET_SPRITES.ember[1];
  if (iconVolt) iconVolt.innerHTML = PET_SPRITES.volt[1];

  const selectButtons = document.querySelectorAll(".pet-select-btn");
  if (!selectButtons.length) return;

  selectButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const chosenSpecies = btn.dataset.pet;
      if (!PET_CATALOG[chosenSpecies]) return;

      const pet = loadPet();
      pet.species = chosenSpecies;
      savePet(pet);
      renderDashboard();
    });
  });
}

function setupNavigation() {
  const navButtons = document.querySelectorAll(".nav-btn[data-view]");
  const views = document.querySelectorAll(".view");

  if (!navButtons.length) return;

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const targetId = button.dataset.view;

      navButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      views.forEach((view) => {
        if (view.id === targetId) {
          view.classList.remove("hidden");
        } else {
          view.classList.add("hidden");
        }
      });

      renderDashboard();
    });
  });
}

function setupQuizLauncher() {
  const openBtn = document.getElementById("open-quiz-setup-btn");
  const setupPanel = document.getElementById("quiz-setup-panel");
  const subjectPills = document.querySelectorAll(".subject-pill");
  const limitPills = document.querySelectorAll(".limit-pill");
  const startLink = document.getElementById("start-quiz-link");

  if (!openBtn || !setupPanel || !startLink) return;

  let selectedSubject = "all";
  let selectedLimit = "5";

  function updateQuizLink() {
    const params = new URLSearchParams({
      subject: selectedSubject,
      limit: selectedLimit
    });
    startLink.href = `app.html?${params.toString()}`;
  }

  openBtn.addEventListener("click", () => {
    const isHidden = setupPanel.classList.toggle("hidden");
    openBtn.setAttribute("aria-expanded", String(!isHidden));
  });

  subjectPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      subjectPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      selectedSubject = pill.dataset.subject;
      updateQuizLink();
    });
  });

  limitPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      limitPills.forEach((p) => p.classList.remove("active"));
      pill.classList.add("active");
      selectedLimit = pill.dataset.limit;
      updateQuizLink();
    });
  });
}

/* Randomized Quiz Engine */
function initQuizPage() {
  const quizBox = document.getElementById("quiz-box");
  if (!quizBox) return;

  renderBrandLogo();

  const params = new URLSearchParams(window.location.search);
  const chosenSubject = params.get("subject") || "all";
  const chosenLimit = params.get("limit") || "5";

  let pool =
    chosenSubject === "all"
      ? [...QUIZ_BANK]
      : QUIZ_BANK.filter((item) => item.subject === chosenSubject);

  if (!pool.length) {
    pool = [...QUIZ_BANK];
  }

  let sessionQuestions = shuffleArray(pool);
  if (chosenLimit !== "all") {
    const parsedLimit = parseInt(chosenLimit, 10);
    if (!Number.isNaN(parsedLimit) && parsedLimit > 0) {
      sessionQuestions = sessionQuestions.slice(0, parsedLimit);
    }
  }

  const counterEl = document.getElementById("question-counter");
  const subjectBadgeEl = document.getElementById("question-subject-badge");
  const progressFillEl = document.getElementById("quiz-progress-fill");
  const questionTextEl = document.getElementById("question-text");
  const choicesContainerEl = document.getElementById("choices-container");
  const feedbackBoxEl = document.getElementById("feedback-box");
  const feedbackTextEl = document.getElementById("feedback-text");
  const explanationTextEl = document.getElementById("explanation-text");
  const nextBtn = document.getElementById("next-btn");

  let currentIndex = 0;
  let sessionScore = 0;
  let sessionExp = 0;
  let answeredCurrent = false;

  function renderQuestion() {
    answeredCurrent = false;
    const item = sessionQuestions[currentIndex];
    const progressPercent = (currentIndex / sessionQuestions.length) * 100;

    counterEl.textContent = `Question ${currentIndex + 1} of ${sessionQuestions.length}`;
    subjectBadgeEl.textContent = item.subject;
    progressFillEl.style.width = `${progressPercent}%`;
    questionTextEl.textContent = item.question;

    feedbackBoxEl.classList.add("hidden");
    feedbackBoxEl.classList.remove("correct-banner", "wrong-banner");
    nextBtn.classList.add("hidden");
    choicesContainerEl.innerHTML = "";

    const indexedChoices = item.choices.map((text, idx) => ({
      text,
      isCorrect: idx === item.correctIndex
    }));
    const shuffledChoices = shuffleArray(indexedChoices);

    shuffledChoices.forEach((choiceObj) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "choice-btn";
      btn.textContent = choiceObj.text;
      btn.dataset.correct = String(choiceObj.isCorrect);
      btn.addEventListener("click", () => handleChoiceClick(btn, choiceObj.isCorrect, item));
      choicesContainerEl.appendChild(btn);
    });
  }

  function handleChoiceClick(selectedBtn, isCorrect, item) {
    if (answeredCurrent) return;
    answeredCurrent = true;

    const allButtons = choicesContainerEl.querySelectorAll(".choice-btn");
    allButtons.forEach((btn) => {
      btn.disabled = true;
      if (btn.dataset.correct === "true") {
        btn.classList.add("correct");
      }
    });

    const pet = loadPet();

    if (isCorrect) {
      selectedBtn.classList.add("correct");
      feedbackBoxEl.classList.add("correct-banner");
      feedbackTextEl.textContent = "Correct! +25 EXP";

      sessionScore += 10;
      sessionExp += 25;

      pet.totalScore += 10;
      pet.exp += 25;
      if (pet.exp >= 100) {
        pet.level += 1;
        pet.exp -= 100;
      }
      savePet(pet);
    } else {
      selectedBtn.classList.add("wrong");
      feedbackBoxEl.classList.add("wrong-banner");
      feedbackTextEl.textContent = "Incorrect!";
    }

    explanationTextEl.textContent = item.explanation;
    feedbackBoxEl.classList.remove("hidden");

    nextBtn.textContent =
      currentIndex + 1 < sessionQuestions.length ? "Next Question →" : "Finish Quiz →";
    nextBtn.classList.remove("hidden");
  }

  function showSummary() {
    const pet = loadPet();
    pet.streak += 1;
    savePet(pet);
    const stageInfo = getPetStageInfo(pet);

    progressFillEl.style.width = "100%";
    counterEl.textContent = "Quiz Completed!";
    subjectBadgeEl.textContent = chosenSubject === "all" ? "All Subjects" : chosenSubject;
    questionTextEl.textContent = `Great job! ${stageInfo.name} gained +${sessionExp} EXP!`;
    choicesContainerEl.innerHTML = `
      <div class="stat-badge badge-green">⭐ Session Score: <strong>+${sessionScore}</strong></div>
      <div class="stat-badge badge-gold">🏆 Current Pet Level: <strong>${pet.level}</strong> (${stageInfo.name})</div>
      <div class="stat-badge badge-blue">🔥 Answer Quiz Streak: <strong>${pet.streak}</strong></div>
    `;
    feedbackBoxEl.classList.add("hidden");
    nextBtn.classList.add("hidden");

    const backLink = document.createElement("a");
    backLink.href = "index.html";
    backLink.className = "primary-pill-btn";
    backLink.textContent = "Return to Dashboard";
    quizBox.appendChild(backLink);
  }

  nextBtn.addEventListener("click", () => {
    if (currentIndex + 1 < sessionQuestions.length) {
      currentIndex += 1;
      renderQuestion();
    } else {
      showSummary();
    }
  });

  renderQuestion();
}

document.addEventListener("DOMContentLoaded", () => {
  setupPetSelector();
  setupNavigation();
  setupQuizLauncher();
  renderDashboard();
  initQuizPage();
});
