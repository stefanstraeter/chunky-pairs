import { gameState } from "../state";
import { createCardTemplate, createHeaderTemplate } from "../templates/game-templates";
import { createCardValues } from "./helpers";
import { assetPath } from "../assets";

/* ==========================================================================
  GAME CONTROLS
  ========================================================================== */

export function setupGameControls(screen: Element, onBackToSetup: () => void, onRestart: () => void): void {
  const menuButton = screen.querySelector<HTMLButtonElement>("#btn-goto-setup");
  const restartButton = screen.querySelector<HTMLButtonElement>("#btn-restart-game");

  menuButton?.addEventListener("click", onBackToSetup);
  restartButton?.addEventListener("click", onRestart);
}

/* ==========================================================================
  GAME BOARD BUILDERS
  ========================================================================== */

/**
 * @description Builds the game header by setting its inner HTML using the createHeaderTemplate function and the current game state.
 * @export
 * @param {Element} header - The header element to be built.
 */
export function buildHeader(header: Element): void {
  header.innerHTML = createHeaderTemplate();
}

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

/* ==========================================================================
   UPDATES GAME LAYOUT
   ========================================================================== */

/**
 * @description Updates the game layout by refreshing the score display, active player cards, and timer widget based on the current game state.
 * @export
 */
export function updateGameLayout(): void {
  updateScoreDisplay();
  updateActivePlayerCards();
  updateTimerWidget();
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
function updateTimerWidget(): void {
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
