import { gameState } from "../state";
import { createCardTemplate, createHeaderTemplate } from "../templates/game-templates";
import { createCardValues } from "./helpers";

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

function createCard(cardName: string, onCardClick: (card: HTMLElement) => void): HTMLButtonElement {
  const card = document.createElement("button");
  card.className = "card";
  card.dataset.value = cardName;
  card.innerHTML = createCardTemplate(cardName);
  card.addEventListener("click", () => onCardClick(card));
  return card;
}

export function buildGrid(grid: HTMLElement, onCardClick: (card: HTMLElement) => void): void {
  grid.innerHTML = "";
  grid.className = `game-board__grid grid--${gameState.boardSize}`;

  const cardValues = createCardValues(gameState.boardSize);

  cardValues.forEach((cardName) => grid.appendChild(createCard(cardName, onCardClick)));
}

/* ==========================================================================
  VIEW UPDATERS 
  ========================================================================== */
/**
 * @description Updates the header by setting the score values for both players and updating the current player indicator based on the current game state.
 * @export
 */
export function updateHeader(): void {
  const scorePlayerOne = document.getElementById("score-player-1");
  const scorePlayerTwo = document.getElementById("score-player-2");
  const turnLabel = document.getElementById("turn-timer-label");

  if (scorePlayerOne) scorePlayerOne.textContent = `${gameState.scores["player-1"]}`;
  if (scorePlayerTwo) scorePlayerTwo.textContent = `${gameState.scores["player-2"]}`;
  if (turnLabel) {
    turnLabel.textContent = gameState.currentPlayer === "player-1" ? "PLAYER 1'S TURN" : "PLAYER 2'S TURN";
  }
}
