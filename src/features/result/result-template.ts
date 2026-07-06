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
    <main class="result-screen screen ${themeClass}">
      <div class="result-screen__content">
        <h2 class="result-screen__title">${title}</h2>
        
        <div class="result-screen__visual">
          <img class="result-screen__smiley" src="${smileySrc}" alt="Game Over Smiley" />
        </div>

        <p class="result-screen__score">${scoreText}</p>
        
        <div class="result-screen__actions">
          <button id="end-btn-restart" class="btn btn--primary btn--large">Restart</button>
          <button id="end-btn-menu" class="btn btn--primary btn--large">Menu</button>
        </div>
      </div>
    </main>
  `;
}
