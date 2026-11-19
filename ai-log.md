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