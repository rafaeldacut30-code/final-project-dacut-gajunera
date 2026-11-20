# Acceptance Criteria
<!--
Acceptance criteria tell you when a user story is DONE. Each one must be testable: pass or fail.
Write 2–3 criteria for every user story using this format:

Given [a situation], when [the user does something], then [this should happen].

Tips:
- Number them under their story: AC1.1 and AC1.2 belong to US1.
- Describe what the user SEES, not how the code works.
- Include at least one "what if it goes wrong" case per story (empty input, no results).
- Avoid vague words like "fast," "nice," or "easy." Could a classmate test it and agree it passed?

Example:
## US1: View today's menu
- AC1.1: Given I open the App page, when it loads, then I see each dish with its name, photo and price.
- AC1.2: Given no dishes are added yet, when I open the menu, then I see "No dishes today yet."

AC - Acceptance Criteria
-->

## US1:Quiz Navigation
 As a student, I want to easily find and click a button to start a quiz from the dashboard, so that I can begin practicing right away.
- AC1.1: Visibility & Accessibility: A primary "Start Quiz" button (or styled link) is clearly visible on index.html without scrolling on both desktop and phone-sized screens, using semantic HTML (<button> or <a>) with readable contrast and clear label text.
- AC1.2: Ready to Practice: As soon as quiz.html loads, the first question and its answer options are automatically displayed on the screen so the user can start answering right away.

## US2: Quiz Page
As a student, I want to answer multiple-choice academic questions and get immediate feedback, so that I can test my knowledge and learn from my mistakes.
- AC2.1: As a student, I want to answer multiple-choice academic questions and get immediate feedback, so that I can test my knowledge and learn from my mistakes.
- AC2.2: Immediate Visual & Text Feedback: Immediately upon selection, the UI highlights the chosen button as correct (green) or incorrect (red), highlights the right answer if the user missed it, and displays a brief explanation before allowing the user to click "Next."

## US3: Virtual Pet Streak & Progress
As a student, I want my virtual pet's level and display image to automatically update when my study streak increases, so that my current progress is accurately reflected on the dashboard.
- AC3.1: EXP & Streak-Based Level Calculation: Answering quizzes adds earned EXP points to localStorage, and as total EXP and the study streak reach defined milestones, JavaScript automatically calculates and updates the saved petLevel value.
- AC3.2: Dynamic Dashboard Rendering: When index.html loads, JavaScript reads the updated petLevel (and corresponding EXP/streak) from localStorage and automatically renders the matching virtual pet <img> (with descriptive alt text) and level text on the dashboard.