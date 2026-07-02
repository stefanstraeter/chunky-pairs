import { gameState } from "../state";
import { showMatchSetupScreen } from "../ui/navigation";
import { buildGrid, buildHeader, setupGameControls, updateGameLayout, updateTimerSeconds } from "./view";

/* ==========================================================================
   INITIALIZATION OF GAME
   ========================================================================== */

/**
 * @description Initializes the game by setting up the grid, header, and exit modal, and resetting the game state.
 * @export
 */
export function initGame(): void {
  const grid = document.getElementById("memory-grid");
  const header = document.querySelector(".game__header");

  if (!grid || !header) return;

  resetState();
  buildHeader(header);
  setupGameControls(header, handleExitConfirmation, handleRestartGame);
  buildGrid(grid, handleCardClick);
  updateGameLayout();
  startTurnTimer();
}

/* ==========================================================================
   SETUP & EXIT FUNCTIONS
   ========================================================================== */

/**
 * @description Resets the game state to its initial values.
 */
function resetState(): void {
  gameState.currentPlayer = gameState.player;
  gameState.scores = { "player-1": 0, "player-2": 0 };
  gameState.flippedCards = [];
  gameState.matchedPairs = 0;
  gameState.isLocked = false;
}

/**
 * @description  Handles the exit confirmation by resetting the game state, applying the default theme, and showing the match setup screen.
 */
function handleExitConfirmation(): void {
  stopTurnTimer();
  resetState();
  document.body.dataset.theme = "magenta-rush";
  showMatchSetupScreen();
}

function handleRestartGame(): void {
  initGame();
}

/* ==========================================================================
    MATCH LOGIC
   ========================================================================== */

/**
 * @description Applies the matched state to the two matched cards, updates the score for the current player, and checks if the game has ended.
 * @param {HTMLElement} first - The first card that was flipped and matched.
 * @param {HTMLElement} second - The second card that was flipped and matched.
 */
function applyMatchState(first: HTMLElement, second: HTMLElement): void {
  const playerClass = `card--matched-${gameState.currentPlayer}`;

  first.classList.add("is-matched", playerClass);
  second.classList.add("is-matched", playerClass);

  gameState.scores[gameState.currentPlayer]++;
  gameState.matchedPairs++;
  gameState.flippedCards = [];
  gameState.isLocked = false;
}

function finishGame(): void {
  gameState.flippedCards = [];
  gameState.isLocked = true;
}

/**
 * @description Handles the logic when two cards are matched, updating the game state and checking for the end of the game.
 * @param {HTMLElement} first - The first card that was flipped and matched.
 * @param {HTMLElement} second - The second card that was flipped and matched.
 */
function handleMatch(first: HTMLElement, second: HTMLElement): void {
  applyMatchState(first, second);
  updateGameLayout();

  if (gameState.matchedPairs === gameState.boardSize / 2) {
    stopTurnTimer(); // <-- HIER: Timer stoppen, das Spiel ist vorbei!
    finishGame();
  } else {
    startTurnTimer(); // <-- HIER: Frische 30s für das nächste Pärchen!
  }
}

/**
 * @description Handles the logic when two flipped cards do not match, flipping them back over after a delay and switching the current player.
 * @param {HTMLElement} first - The first card that was flipped and did not match.
 * @param {HTMLElement} second - The second card that was flipped and did not match.
 */
function handleMismatch(first: HTMLElement, second: HTMLElement): void {
  setTimeout(() => {
    first.classList.remove("is-flipped");
    second.classList.remove("is-flipped");

    gameState.flippedCards = [];
    gameState.currentPlayer = gameState.currentPlayer === "player-1" ? "player-2" : "player-1";
    gameState.isLocked = false;

    updateGameLayout();
    startTurnTimer();
  }, 1000);
}

/**
 * @description Checks if the two flipped cards match by comparing their data values, and calls the appropriate handler for a match or mismatch.
 */
function checkMatch(): void {
  const [first, second] = gameState.flippedCards;
  const isMatch = first.dataset.value === second.dataset.value;

  if (isMatch) {
    handleMatch(first, second);
  } else {
    handleMismatch(first, second);
  }
}

/* ==========================================================================
   CLICK INTERACTION
   ========================================================================== */

/**
 * @description Determines if a card click is invalid by checking if the game is currently locked or if the card is already flipped or matched.
 * @param {HTMLElement} card - The card element that was clicked.
 * @return {boolean} True if the card click is invalid, false otherwise.
 */
function isCardClickInvalid(card: HTMLElement): boolean {
  return gameState.isLocked || card.classList.contains("is-flipped") || card.classList.contains("is-matched");
}

/**
 * @description Handles the logic when a card is clicked, flipping it and checking for matches if two cards are flipped. It also checks for invalid clicks to prevent actions when the game is locked or the card is already flipped or matched.
 * @param {HTMLElement} card - The card element that was clicked.
 */
function handleCardClick(card: HTMLElement): void {
  if (isCardClickInvalid(card)) return;

  card.classList.add("is-flipped");
  gameState.flippedCards.push(card);

  if (gameState.flippedCards.length === 2) {
    gameState.isLocked = true;
    checkMatch();
  }
}

/* ==========================================================================
  TURN TIMER LOGIC
   ========================================================================== */

const TURN_TIME_LIMIT = 10;
let timerIntervalId: number | null = null;
let currentSecondsLeft = TURN_TIME_LIMIT;

/**
 * @description Starts the turn timer, updating the countdown display every second and handling timeout when the timer reaches zero.
 */
function startTurnTimer(): void {
  stopTurnTimer();
  currentSecondsLeft = TURN_TIME_LIMIT;
  updateTimerSeconds(currentSecondsLeft);

  timerIntervalId = window.setInterval(() => {
    currentSecondsLeft--;
    updateTimerSeconds(currentSecondsLeft);

    if (currentSecondsLeft <= 0) {
      stopTurnTimer();
      handleTimeOut();
    }
  }, 1000);
}

/**
 * @description Stops the turn timer by clearing the interval and resetting the timer ID.
 * @export
 */
export function stopTurnTimer(): void {
  if (timerIntervalId !== null) {
    clearInterval(timerIntervalId);
    timerIntervalId = null;
  }
}

/**
 * @description Handles the logic when the turn timer runs out, resetting flipped cards, switching the current player, and updating the game layout.
 */
function handleTimeOut(): void {
  resetFlippedCards();
  gameState.currentPlayer = gameState.currentPlayer === "player-1" ? "player-2" : "player-1";
  updateGameLayout();
  startTurnTimer();
}

/**
 * @description Resets the flipped cards by removing the "is-flipped" class from each card, clearing the flipped cards array, and unlocking the game state.
 */
function resetFlippedCards(): void {
  gameState.flippedCards.forEach((card) => {
    card.classList.remove("is-flipped");
  });
  gameState.flippedCards = [];
  gameState.isLocked = false;
}
