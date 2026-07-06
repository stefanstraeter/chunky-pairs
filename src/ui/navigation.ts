import { createHomeScreenTemplate, createMatchSetupScreenTemplate, createGameScreenTemplate, createEndScreenTemplate } from "../templates/screen-templates";
import { initGame } from "../features/gameplay/game";
import { initMatchSetup } from "../features/match-setup/setup-controllers";
import { initEndScreen } from "../features/end-screen/end-screen-controller";

/* ==========================================================================
   CORE RENDERING
   ========================================================================== */
/**
 * @description Renders the provided HTML content into the app root element with the ID "app". If the app root element is found, its inner HTML is replaced with the provided content.
 * @export
 * @param {string} htmlContent - The HTML string to be rendered inside the app root element.
 */
export function renderScreen(htmlContent: string): void {
  const appRoot = document.getElementById("app");
  if (appRoot) appRoot.innerHTML = htmlContent;
}

/* ==========================================================================
   SCREEN RENDERING FUNCTIONS
   ========================================================================== */
/**
 * @description Renders the home screen by generating its HTML template and inserting it into the app root element. It also sets up an event listener on the "Play" button to transition to the match setup screen when clicked.
 * @export
 */
export function showHomeScreen(): void {
  renderScreen(createHomeScreenTemplate());
  document.getElementById("btn-enter-game")?.addEventListener("click", showMatchSetupScreen);
}

/**
 * @description Renders the match setup screen by generating its HTML template and inserting it into the app root element. It also initializes the match setup logic, which includes setting up event listeners for theme, player, and board size selections, as well as enabling the start button when all selections are made.
 * @export
 */
export function showMatchSetupScreen(): void {
  renderScreen(createMatchSetupScreenTemplate());
  initMatchSetup(); // Startet die Logik im ausgelagerten Feature-Ordner!
}

/**
 * @description Renders the game screen by generating its HTML template and inserting it into the app root element. It also initializes the game logic, which includes setting up the game grid, header, and exit modal, as well as resetting the game state.
 * @export
 */
export function startGameSequence(): void {
  renderScreen(createGameScreenTemplate());
  initGame();
}

export function showEndScreen(result: "player-1" | "player-2" | "draw", scoreP1: number, scoreP2: number): void {
  renderScreen(createEndScreenTemplate(result, scoreP1, scoreP2));
  initEndScreen();
}
