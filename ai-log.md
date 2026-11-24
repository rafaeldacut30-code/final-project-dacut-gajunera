# AI Log
<!--
This file is your record of how you worked with AI (Gemini, ChatGPT, or Claude).
Using AI is allowed. Hiding it is not. This log shows your instructor that YOU
reviewed, understood, and made decisions about your code.

WHEN to add an entry:
- Every time you use AI to plan, write, explain, or debug a part of your app.
- Add the entry right after that step works, BEFORE you commit. Don't write it all at the end.

HOW to write an entry:
- Copy the template below and fill it in. Newest entry at the bottom.
- Write in your own words. Short is fine, but be specific.
- "What I changed or rejected" is the most important part. Even small changes count:
  renaming a class, fixing a bug the AI made, simplifying code, or saying no to a suggestion.
- If you used the AI's code exactly as given, write why it was okay and what you checked.

TEMPLATE (copy from here):

## Entry [#]: [Date]
- **User story:** [US# and short title]
- **What I asked:** [Your prompt, or a short summary of it]
- **What the AI suggested:** [1–2 sentences summarizing the AI's answer]
- **What I changed or rejected, and why:** [Your decisions in your own words]
- **How I tested it:** [Which acceptance criteria you checked, and whether each passed]
- **What I learned:** [One new thing you now understand]

EXAMPLE:

## Entry 3: Nov 20, 2026
- **User story:** US1: View today's menu
- **What I asked:** "Show me how to display my menu array as cards on app.html."
- **What the AI suggested:** A forEach loop that builds the cards with innerHTML.
- **What I changed or rejected, and why:** Renamed `.item-card` to `.menu-card` to match
  my CSS. The AI forgot the empty menu case, so I asked for a hint and added a
  "No dishes today yet" message myself.
- **How I tested it:** AC1.1 passed (cards show name, photo, price). AC1.3 passed
  after my fix (empty message shows).
- **What I learned:** forEach runs the same code once for every item in an array.

Minimum of 5 meaningful AI logs.
-->

## Entry 1: [11-19-26]
- **User story:**
- **What I asked:** I am writing a user story for my web application project called "PomoGochi". a web-based quiz application that uses an interactive virtual pet to motivate students and regular quiz takers to study consistently.

Your task is to help me improve and fix my user stories using the formula: "As a [type of user], I want [some goal], so that [some reason or benefit]."

Here are my drafts:

Feature: Dashboard
User story 1
As a student I can see answer quiz, a virtual pet

Feature: Dashboard
User story 2
As a student I can answer academical related questions

Feature: Virtual pet streak and progress
User story 3
As a student I can see my quiz results and progress and also my virtual pet progress 


- **What the AI suggested:**
Feature: Dashboard

User Story 1 (Pet View): As a student, I want to view my virtual pet and its current mood on the dashboard, so that I feel motivated to start studying.

User Story 2 (Quiz Navigation): As a student, I want to easily find and click a button to start a quiz from the dashboard, so that I can begin practicing right away.

Feature: Quiz Page

User Story 3 (Taking the Quiz): As a student, I want to answer multiple-choice academic questions and get immediate feedback, so that I can test my knowledge and learn from my mistakes. (Note: Moving this under a "Quiz" feature makes more sense than putting the whole quiz inside the Dashboard!)

Feature: Virtual Pet Streak & Progress

User Story 4 (Quiz Progress): As a student, I want to view my past quiz scores and study streak, so that I can track my improvement over time.

User Story 5 (Pet Growth): As a student, I want to see my virtual pet grow or level up based on my study streak, so that I feel rewarded for studying consistently.
- **What I changed or rejected, and why:** we picked the user story 2 for the dashboard, user story 3 for quiz page, then user story 5 Virtual Pet Streak & Progress. but i rejected the user story 5 because it suggested feelings, and we dont wanna use that so we changed it into "As a student, I want my virtual pet's level and display image to automatically update when my study streak increases, so that my current progress is accurately reflected on the dashboard."
- **How I tested it:** we read and analyzed the suggestions and identify the ai slopped suggestions which we reject and change.
- **What I learned:** always read the ai outputs because ai will not always give perfect answers.

## Entry 2: November 19, 2026
- **User story:** US2 (Start Quiz from Dashboard), US3 (Quiz Page), and US5 (Virtual Pet Streak & Progress)
- **What I asked:** I asked for help fixing my draft user stories for PomoGochi, clarifying whether the features need a backend/database, and writing technical acceptance criteria for User Story 2.
- **What the AI suggested:** The AI split my combined drafts into 5 single-action user stories using the standard format, confirmed the app can run entirely on the frontend using JavaScript arrays and `localStorage`, and generated technical acceptance criteria for starting a quiz.
- **What I changed or rejected, and why:** I selected US2, US3, and US5 for my project scope and rejected emotional phrasing (like "so that I feel rewarded") because I wanted strictly technical, system-focused writing.
- **How I tested it:** Reviewed the finalized User Story 2 against its four acceptance criteria (visibility, immediate navigation, ready-to-practice state, and empty-state check) to confirm they are specific and testable before coding.
- **What I learned:** User stories should focus on one clear action at a time, and technical acceptance criteria help define exact frontend behaviors (like `localStorage` updates and page redirects) without needing a backend database.

## Entry 3: November 19, 2026
- **User story:** US3 (Taking the Quiz & Immediate Feedback)
- **What I asked:** I asked the AI to write technical acceptance criteria for User Story 3, help narrow them down to the top 2 criteria, and remove score tracking so it strictly matches what my user story describes.
- **What the AI suggested:** The AI initially generated 5 acceptance criteria covering rendering, validation, visual feedback, score tracking, and mobile accessibility, then narrowed them down to 2 focused criteria covering answer lockout and immediate right/wrong feedback.
- **What I changed or rejected, and why:** I rejected the score-incrementing requirement in the first criterion because User Story 3 only specifies checking answers and getting feedback to learn from mistakes, not keeping a numerical score.
- **How I tested it:** Checked both final acceptance criteria against User Story 3 to verify that every behavior (selecting an option, locking buttons, highlighting right/wrong answers, and showing an explanation) directly matches the story without adding extra features.
- **What I learned:** Acceptance criteria should strictly match what is promised in the user story—avoiding extra features like score counters keeps the code scope smaller and easier to test.

## Entry 4: November 19, 2026
- **User story:** US5 (Virtual Pet Level & Display Image Progression)
- **What I asked:** I asked the AI to write 2 technical acceptance criteria for User Story 5, and then revise them to include EXP points gained from answering quizzes without changing the wording of my original user story.
- **What the AI suggested:** The AI first drafted 2 acceptance criteria based solely on study streaks, suggested rewriting User Story 5 to mention EXP, and then revised the 2 criteria to connect quiz EXP points and study streaks to `petLevel` and dashboard rendering while keeping the original story intact.
- **What I changed or rejected, and why:** I rejected rewriting User Story 5 because I wanted to keep my finalized story wording unchanged, while ensuring the acceptance criteria still specify that EXP earned from quizzes drives the pet's level and dashboard image.
- **How I tested it:** Checked both acceptance criteria against User Story 5 to verify that `localStorage` tracks EXP, streak, and `petLevel`, and that `index.html` dynamically updates the pet `<img>` and level text based on those saved values.
- **What I learned:** Acceptance criteria can specify the exact technical mechanics (like calculating `petLevel` from quiz EXP and study streaks in `localStorage`) without needing to rewrite the high-level user story.

## Entry 5: Dashboard & Navigation Structure (`index.html`) Date: November 23, 2026
- **User Story:** US1 – Quiz Navigation & Dashboard Views
- **Prompt / Goal:** Build a guest-only dashboard in `index.html` with a top navigation bar (logo on the left; Progress, Dashboard, and Quiz Streak tabs in the center), a central virtual pet display, a `+ Answer Quiz` link to `app.html`, and toggleable sections for Streak and Progress stats without requiring user accounts.
- **AI Output Used:** Generated semantic HTML5 structure (`<header>`, `<nav>`, `<main>`, `<section>`) with `data-view` attributes for tab switching and accessible `aria-label` attributes.
- **What We Verified / Changed:** Removed the top-right account/login placeholder to keep the app guest-only via `localStorage`, added the pet's current level display to the Quiz Streak view, and tested the layout and navigation buttons in the browser.

## Entry 6: Responsive Dashboard & Centered Navbar Styling (`styles.css`) Date: November 23, 2026
- **Date:** November 24, 2026
- **User Story:** US1 – Quiz Navigation & Dashboard Views
- **Prompt / Goal:** Style `index.html` to match our low-fidelity wireframes with a centered top navigation bar, left-aligned brand logo, boxed streak/progress badges, circular `+ Answer Quiz` button, and mobile-friendly responsiveness.
- **AI Output Used:** Generated CSS layout rules using a 3-column CSS Grid (`grid-template-columns: 1fr auto 1fr`) for `.navbar`, Flexbox alignment for the pet display and stat badges, `.hidden` view toggling, and a `@media (max-width: 650px)` breakpoint for smaller screens.
- **What We Verified / Changed:** Removed unused `.user-info` styles to fit the guest-only design, centered the navigation tabs in the header, and tested desktop and mobile widths in the browser to confirm zero horizontal overflow.

### Entry 7: — Created app.html (US1 / AC1.2) Date: November 24, 2026
- **What I asked AI for:** Help building the HTML structure for `app.html` so clicking `+ Answer Quiz` from `index.html` immediately displays the first question and answer options.
- **What AI provided:** A clean HTML page (`app.html`) reusing the `.navbar` and `.main-frame` classes from `styles.css`, with `#question-counter`, `#question-text`, `#choices-container`, and `#quiz-feedback` containers connected to `script.js`.
- **What I verified/changed:** Saved `app.html`, opened `index.html` in the browser, clicked `+ Answer Quiz`, and confirmed Question 1 and all 4 choice buttons loaded automatically on screen without errors (passing AC1.1 and AC1.2).

### Entry 8: — Created `script.js` (US1 / AC1.1 & AC1.2) Date: November 24, 2026 
- **What I asked AI for:** Help structuring and writing `script.js` in clear, beginner-friendly sections so it handles `localStorage` data, tab switching on `index.html`, and automatic question display on `app.html`.
- **What AI provided:** A 4-part `script.js` with `defaultPetData` and `quizQuestions` at the top, `getPetData()`, `renderDashboard()`, and `setupNavigation()` with page guards for `index.html`, `loadQuestion()` for `app.html`, and a single `DOMContentLoaded` startup listener.
- **What I verified/changed:** Reviewed every section of `script.js`, tested tab switching across Progress, Dashboard, and Quiz Streak on `index.html`, and confirmed Question 1 and all 4 choices load automatically on `app.html` with zero console errors.