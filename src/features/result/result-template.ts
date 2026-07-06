import { getResultDetails } from "./result-helper";

/* ==========================================================================
    RESULT SCREEN TEMPLATE
    ========================================================================== */

/**
 * @description Creates the HTML template for the complete result screen overlay.
 * @export
 */
export function createResultScreenTemplate(result: "player-1" | "player-2" | "draw", scoreP1: number, scoreP2: number): string {
  const { title, scoreText, smileySrc, themeClass } = getResultDetails(result, scoreP1, scoreP2);

  return `
    <main class="game-screen end-screen ${themeClass}">
      <div class="end-screen__content">
        <h2 class="end-screen__title">${title}</h2>
        
        <div class="end-screen__visual">
          <img class="end-screen__smiley" src="${smileySrc}" alt="Game Over Smiley" />
        </div>

        <p class="end-screen__score">${scoreText}</p>
        
        <div class="end-screen__actions">
          <button id="end-btn-restart" class="btn--retro-lg">PLAY AGAIN</button>
          <button id="end-btn-menu" class="btn--retro-lg btn--cancel">MAIN MENU</button>
        </div>
      </div>
    </main>
  `;
}
