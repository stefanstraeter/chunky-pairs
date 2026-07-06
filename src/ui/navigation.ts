import { createHomeScreenTemplate } from "../features/home/home-template";
import { createMatchSetupScreenTemplate } from "../features/setup/setup-template";
import { createGameScreenTemplate } from "../features/game/game-template";
import { createResultScreenTemplate } from "../features/result/result-template";

import { initHome } from "../features/home/home-controller";
import { initMatchSetup } from "../features/setup/setup-controller";
import { initGame } from "../features/game/game-controller";
import { initResult } from "../features/result/result-controller";

/* ==========================================================================
   CORE RENDERING
   ========================================================================== */
/**
 * @description Renders the provided HTML content into the app root element with the ID "app".
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
 * @description Renders the home screen and initializes its controller.
 * @export
 */
export function showHomeScreen(): void {
  renderScreen(createHomeScreenTemplate());
  initHome();
}

/**
 * @description Renders the match setup screen and initializes its controllers.
 * @export
 */
export function showMatchSetupScreen(): void {
  renderScreen(createMatchSetupScreenTemplate());
  initMatchSetup();
}

/**
 * @description Renders the main game board and initializes the core game loop.
 * @export
 */
export function startGameSequence(): void {
  renderScreen(createGameScreenTemplate());
  initGame();
}

/**
 * @description Renders the final match results and initializes the result actions.
 * @export
 */
export function showResultScreen(result: "player-1" | "player-2" | "draw", scoreP1: number, scoreP2: number): void {
  renderScreen(createResultScreenTemplate(result, scoreP1, scoreP2));
  initResult();
}
