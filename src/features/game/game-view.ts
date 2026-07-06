import { gameState } from "../../state";
import { createCardTemplate, createHeaderTemplate, createModalTemplate } from "./game-template";
import { createCardValues } from "./game-helper";
import { assetPath } from "../../assets";

/* ==========================================================================
  PUBLIC API / EXPORTS
  ========================================================================== */

/**
 * @description Sets up the game controls by adding event listeners to the menu and restart buttons, triggering the provided callback functions when clicked.
 * @export
 * @param {Element} screen - The screen element containing the game controls.
 * @param {() => void} onBackToSetup - The callback function to be called when the menu button is clicked.
 * @param {() => void} onRestart - The callback function to be called when the restart button is clicked.
 */
export function setupGameControls(screen: Element, onBackToSetup: () => void, onRestart: () => void): void {
  screen.querySelector("#btn-goto-setup")?.addEventListener("click", onBackToSetup);
  screen.querySelector("#btn-restart-game")?.addEventListener("click", onRestart);
}

/**
 * @description Builds the game header by setting its inner HTML using the createHeaderTemplate function and the current game state.
 * @export
 * @param {Element} header - The header element to be built.
 */
export function buildHeader(header: Element): void {
  header.innerHTML = createHeaderTemplate();
}

/**
 * @description Builds the game grid by creating card elements based on the current board size and appending them to the provided grid element. Each card is created with a click handler that invokes the provided onCardClick function.
 * @export
 * @param {HTMLElement} grid - The grid element to be populated with cards.
 * @param {(card: HTMLElement) => void} onCardClick - The function to be called when a card is clicked.
 */
export function buildGrid(grid: HTMLElement, onCardClick: (card: HTMLElement) => void): void {
  grid.innerHTML = "";
  grid.className = `game-board__grid grid--${gameState.boardSize}`;
  const cardValues = createCardValues(gameState.boardSize);
  cardValues.forEach((cardName) => grid.appendChild(createCard(cardName, onCardClick)));
}

/**
 * @description Updates the game layout by refreshing the score display, active player cards, and timer widget based on the current game state.
 * @export
 */
export function updateGameLayout(): void {
  updateScoreDisplay();
  updateActivePlayerCards();
  updateTimerBackground();
}

/**
 * @description Updates the turn timer countdown display with the given number of seconds.
 * @export
 * @param {number} seconds
 */
export function updateTimerSeconds(seconds: number): void {
  const countdownEl = document.getElementById("turn-timer-countdown");
  if (countdownEl) countdownEl.textContent = `${seconds}s`;
}

/**
 * @description Shows a confirmation modal with the provided title and message, and sets up the confirm and cancel button actions using the provided callback functions.
 * @export
 * @param {string} title - The title of the modal.
 * @param {string} message - The message content of the modal.
 * @param {() => void} onConfirm - Callback function when the user clicks "Yes".
 * @param {() => void} onCancel - Callback function when the user clicks "No" or closes the modal.
 * @return {void}
 */
export function showConfirmationModal(title: string, message: string, onConfirm: () => void, onCancel: () => void): void {
  const container = document.getElementById("exit-modal-container");
  if (!container) return;

  container.innerHTML = createModalTemplate(title, message, "Yes", "Never");

  const closeModal = () => {
    container.innerHTML = "";
  };

  document.getElementById("modal-btn-confirm")?.addEventListener("click", () => {
    closeModal();
    onConfirm();
  });

  document.getElementById("modal-btn-cancel")?.addEventListener("click", () => {
    closeModal();
    onCancel();
  });
}

/* ==========================================================================
   INTERNAL HELPER FUNCTIONS
   ========================================================================== */

/**
 * @description Creates a card element with the given card name and click handler.
 * @param {string} cardName - The name of the card.
 * @param {(card: HTMLElement) => void} onCardClick - The function to be called when the card is clicked.
 * @return {HTMLButtonElement} The created card button element.
 */
function createCard(cardName: string, onCardClick: (card: HTMLElement) => void): HTMLButtonElement {
  const card = document.createElement("button");

  card.className = "card";
  card.dataset.value = cardName;
  card.innerHTML = createCardTemplate(cardName);
  card.addEventListener("click", () => onCardClick(card));

  return card;
}

/**
 * @description Updates the score display for both players based on the current game state.
 */
function updateScoreDisplay(): void {
  const scoreP1 = document.getElementById("score-player-1");
  const scoreP2 = document.getElementById("score-player-2");

  if (scoreP1) scoreP1.textContent = `${gameState.scores["player-1"]}`;
  if (scoreP2) scoreP2.textContent = `${gameState.scores["player-2"]}`;
}

/**
 * @description Updates the active player cards by adding or removing the "is-active" class based on the current player in the game state.
 */
function updateActivePlayerCards(): void {
  const widgetP1 = document.getElementById("widget-player-1");
  const widgetP2 = document.getElementById("widget-player-2");

  if (gameState.currentPlayer === "player-1") {
    widgetP1?.classList.add("is-active");
    widgetP2?.classList.remove("is-active");
  } else {
    widgetP2?.classList.add("is-active");
    widgetP1?.classList.remove("is-active");
  }
}

/**
 * @description Updates the turn timer widget by changing the label and background image based on the current player in the game state.
 */
function updateTimerBackground(): void {
  const turnLabel = document.getElementById("turn-timer-label");
  const timerBg = document.getElementById("turn-timer-bg") as HTMLImageElement | null;
  const isP1 = gameState.currentPlayer === "player-1";

  if (turnLabel) {
    turnLabel.textContent = isP1 ? "PLAYER 1'S TURN" : "PLAYER 2'S TURN";
  }
  if (timerBg) {
    timerBg.src = isP1 ? assetPath("img/00_general/turn-background-red.svg") : assetPath("img/00_general/turn-background-orange.svg");
  }
}
