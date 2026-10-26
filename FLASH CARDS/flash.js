// =====================================
// FLASHCARD DATA
// =====================================
// These are the pre-defined flashcards
// required by the project.
const flashcards = [
  {
    question: "What does HTML stand for?",
    answer: "HyperText Markup Language."
  },
  {
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheets."
  },
  {
    question: "What is JavaScript used for?",
    answer:
      "JavaScript is used to add interactivity and dynamic behavior to websites."
  },
  {
    question: "What does DOM stand for?",
    answer:
      "Document Object Model."
  },
  {
    question: "What keyword is used to declare a constant in JavaScript?",
    answer:
      "The const keyword."
  },
  {
    question: "What is an array in JavaScript?",
    answer:
      "An array is an ordered collection that can store multiple values."
  },
  {
    question: "What does API stand for?",
    answer:
      "Application Programming Interface."
  },
  {
    question: "What is a function?",
    answer:
      "A reusable block of code designed to perform a particular task."
  },
  {
    question: "What does JSON stand for?",
    answer:
      "JavaScript Object Notation."
  },
  {
    question: "What is Git used for?",
    answer:
      "Git is a version control system used to track changes in code."
  }
];
// =====================================
// CURRENT CARD
// =====================================
// This keeps track of which card
// the user is currently viewing.
let currentIndex = 0;
// =====================================
// GET HTML ELEMENTS
// =====================================
const flashcard =
  document.getElementById("flashcard");
const question =
  document.getElementById("question");
const answer =
  document.getElementById("answer");
const currentCard =
  document.getElementById("current-card");
const totalCards =
  document.getElementById("total-cards");
const progressBar =
  document.getElementById("progress-bar");
const progressText =
  document.getElementById("progress-text");
const previousButton =
  document.getElementById("previous-button");
const nextButton =
  document.getElementById("next-button");
const completionMessage =
  document.getElementById(
    "completion-message"
  );
// =====================================
// DISPLAY TOTAL NUMBER OF CARDS
// =====================================
totalCards.textContent =
  flashcards.length;
// =====================================
// DISPLAY CURRENT CARD
// =====================================
function displayCard() {
  // -------------------------------------
  // Get the current flashcard
  // -------------------------------------
  const card =
    flashcards[currentIndex];
  // -------------------------------------
  // Display question
  // -------------------------------------
  question.textContent =
    card.question;
  // -------------------------------------
  // Display answer
  // -------------------------------------
  answer.textContent =
    card.answer;
  // -------------------------------------
  // Display card number
  // -------------------------------------
  currentCard.textContent =
    currentIndex + 1;
  // -------------------------------------
  // Update progress text
  // -------------------------------------
  progressText.textContent =
    `Card ${currentIndex + 1} of ${flashcards.length}`;
  // -------------------------------------
  // Calculate progress percentage
  // -------------------------------------
  const progress =
    ((currentIndex + 1) /
      flashcards.length) * 100;
  // -------------------------------------
  // Update progress bar
  // -------------------------------------
  progressBar.style.width =
    `${progress}%`;
  // -------------------------------------
  // Reset card to question side
  // -------------------------------------
  flashcard.classList.remove(
    "flipped"
  );
  // -------------------------------------
  // Enable / disable navigation
  // -------------------------------------
  previousButton.disabled =
    currentIndex === 0;
  nextButton.disabled =
    currentIndex ===
    flashcards.length - 1;
  // -------------------------------------
  // Show completion message
  // -------------------------------------
  if (
    currentIndex ===
    flashcards.length - 1
  ) {
    completionMessage.textContent =
      "You've reached the last card.";
  } else {
    completionMessage.textContent =
      "";
  }
}
// =====================================
// FLIP FLASHCARD
// =====================================
function flipCard() {
  flashcard.classList.toggle(
    "flipped"
  );
}
// =====================================
// CLICK CARD TO FLIP
// =====================================
flashcard.addEventListener(
  "click",
  function () {
    flipCard();
  }
);
// =====================================
// KEYBOARD ACCESS
// =====================================
flashcard.addEventListener(
  "keydown",
  function (event) {
    // Enter or Space flips the card.
    if (
      event.key === "Enter" ||
      event.key === " "
    ) {
      event.preventDefault();
      flipCard();
    }
  }
);
// =====================================
// NEXT CARD
// =====================================
nextButton.addEventListener(
  "click",
  function () {
    // Make sure there is another card.
    if (
      currentIndex <
      flashcards.length - 1
    ) {
      currentIndex++;
      displayCard();
    }
  }
);
// =====================================
// PREVIOUS CARD
// =====================================
previousButton.addEventListener(
  "click",
  function () {
    // Make sure we aren't already
    // on the first card.
    if (
      currentIndex > 0
    ) {
      currentIndex--;
      displayCard();
    }
  }
);
// =====================================
// KEYBOARD NAVIGATION
// =====================================
document.addEventListener(
  "keydown",
  function (event) {
    // Don't navigate while the
    // flashcard itself has focus.
    if (
      document.activeElement ===
      flashcard
    ) {
      return;
    }
    // -----------------------------------
    // Arrow Right = Next card
    // -----------------------------------
    if (
      event.key === "ArrowRight"
    ) {
      nextButton.click();
    }
    // -----------------------------------
    // Arrow Left = Previous card
    // -----------------------------------
    if (
      event.key === "ArrowLeft"
    ) {
      previousButton.click();
    }
  }
);
// =====================================
// INITIALIZE APPLICATION
// =====================================
displayCard();