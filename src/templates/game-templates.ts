import { assetPath } from "../assets";

/* ==========================================================================
    TEMPLATE FACTORIES
    ========================================================================== */

/**
 * Creates the game header and embedded exit modal markup.
 *
 * @returns Header HTML string.
 */
export function createHeaderTemplate(): string {
  return `
    <div class="game__status">
      <button id="btn-goto-setup" class="btn btn--small btn--outline" type="button">MENU</button>
      <h2 class="game__title">Chunky<br>Pairs</h2>
      <button id="btn-restart-game" class="btn btn--small btn--outline" type="button">RESTART</button>
    </div>
  `;
}

export function createCardTemplate(cardName: string): string {
  return `
    <div class="card__inner">
      <div class="card__front"></div>
      
      <div class="card__back">
        <img src="${assetPath(`/img/01_cards/${cardName}.png`)}" alt="${cardName} icon">
      </div>
    </div>
  `;
}
