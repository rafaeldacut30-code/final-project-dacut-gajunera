# PomoGochi
Gamified study quizzes powered by a virtual pet companion that levels up and evolves as you learn.

## Problem
- Students reviewing for exams often lose motivation when practicing with plain, static flashcards or worksheets.
- Many learners want a quick way to test themselves across core subjects without creating an account or setting up complicated study tools.

## Target Users
- Students who wants to learn randomize things and concepts.
- Self-paced learners who want quick, bite-sized practice quizzes with immediate feedback.

## Solution
PomoGochi turns self-quizzing into a simple browser-based virtual pet game. Users pick a companion (**PomoPup**, **EmberKit**, or **VoltKit**), choose a subject and question count, and answer randomized multiple-choice questions to earn EXP, level up their pet across three evolution stages, and build their quiz streak—all saved automatically in `localStorage` with zero sign-up required.

## Main Feature
Students answer randomized subject quizzes to earn EXP and evolve their virtual pet companion across three growth stages.

## Pages
- **Homepage (`index.html` — Dashboard View):** Lets users switch between three pet companions, view their pet's current evolution stage in its animated habitat, and configure a quiz by subject and question count.
- **App page (`app.html` — Quiz Runner):** Displays randomized multiple-choice questions with shuffled answer options, a live progress bar, instant answer explanations, and a post-quiz EXP and score summary.
- **Progress View (`index.html#progress-view`):** Shows the pet's current level, EXP progress bar, total quiz score, and a 3-stage evolution roadmap (unlocking at Levels 1, 3, and 5).
- **Quiz Streak View (`index.html#streak-view`):** Tracks the user's consecutive completed quiz streak alongside their active companion.

## Team
- Rafael Dacut – Developer
- Andre Gajunera – Designer

## Live Link
https://rafaeldacut30-code.github.io/final-project-dacut-gajunera/