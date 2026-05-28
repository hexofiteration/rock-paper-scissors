# The Odin Project: Rock Paper Scissors

A simple browser-based Rock Paper Scissors game where a player competes against the computer. The first to reach 5 wins (or 5 draws) ends the game and a result is declared.

---

## Table of Contents

- [Description](#description)
- [Technologies Used](#technologies-used)
- [How To Play](#how-to-play)
- [Known Issues (By Severity)](#known-issues-by-severity)
---

## Description

This is a vanilla JavaScript, HTML, and CSS project. The player clicks one of three buttons — **Rock**, **Paper**, or **Scissors** — and the computer randomly selects its own choice. Each round's result is displayed on screen, with running scores tracked for the player, the computer, and draws. The game ends when any of the three tallies reaches 5.

---

## Technologies Used

- HTML5
- Vanilla JavaScript 

---

## How to Play

Once `index.html` is open in a browser:

1. Click **Rock**, **Paper**, or **Scissors** to play a round.
2. The player's choice and the computer's choice are appended to the display area.
3. The live score is shown below: `Your Score | Computer Score | Draws`.
4. The game announces a winner or draw when any score reaches **5**.

**Example round flow:**

```
Player clicks: "Rock"
Computer randomly selects: "Paper"
Result: "You Lose! Paper covers Rock"
Score: Your Score: 0 | Computer Score: 1 | Draws: 0
```

---

## Known Issues (By Severity)

The following bugs are present in the current codebase, listed from most to least critical:

### 🔴 Critical

**1. DOM appending causes memory leak & visual corruption**
Each click appends a new text node to the `#player` and `#computer` paragraphs instead of replacing their content. After a few rounds the display becomes unreadable (e.g., `Rock | Paper | Rock | Scissors |...`) and orphaned DOM nodes accumulate in memory.
_Fix:_ Use `textContent` assignment instead of `appendChild` + `createTextNode`.

**2. Game doesn't stop after a winner is declared**
Once a score reaches 5 and a winner message is shown, the buttons remain active. Further clicks continue updating scores and can overwrite the game-over message.
_Fix:_ Disable all three buttons (or add a guard flag) when a terminal condition is reached.

**3. Case mismatch breaks draw detection**
`getHumanChoice` stores the human's choice as lowercase (`"rock"`, `"paper"`, `"scissors"`), but `getComputerChoice` returns title-case strings (`"Rock"`, `"Paper"`, `"Scissors"`). The draw check `humanChoice == computerChoice` therefore never evaluates to `true`.
_Fix:_ Normalise both values to the same case before comparing.

### 🟠 High

**4. String sniffing for scoring**
`playGame` determines the outcome by checking whether the result string contains `"You Win"` or `"You Lose"`. This tightly couples the score logic to UI copy — changing the display text silently breaks scoring.
_Fix:_ Have `playRound` return a structured value (`"win"`, `"lose"`, `"draw"`) and branch on that.

### 🟡 Medium

**5. Duplicated event listeners (risk)**
There is currently no guard against calling `addEventListener` more than once on the same button. If `script.js` is ever loaded twice (e.g., via a hot-reload dev server or a duplicate `<script>` tag) every click fires multiple handlers and double-counts scores.
_Fix:_ Reference named handler functions so duplicate registration can be detected, or verify the script is only loaded once.

### 🟢 Low

**6. Missing `<title>` content and ARIA labels**
The page `<title>` is the browser default `"Document"` and the buttons carry no ARIA attributes. This impairs discoverability in browser tabs and makes the game inaccessible to screen reader users.
_Fix:_ Set `<title>Rock Paper Scissors</title>` and add `aria-label` attributes to the buttons and result region.

**7. No reset button**
Once the game ends there is no way to restart without refreshing the page. This degrades user experience significantly.
_Fix:_ Add a **Play Again** button that becomes visible on game over, resets all score variables to `0`, clears the display paragraphs, and re-enables the choice buttons.

---
