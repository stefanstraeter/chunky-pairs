import { assetPath } from "../assets";
import type { HeaderTemplateData } from "../types";

/* ==========================================================================
    TEMPLATE FACTORIES
    ========================================================================== */

/**
 * Creates the game header and embedded exit modal markup.
 *
 * @param data - Template values for icons, labels, and button text.
 * @returns Header HTML string.
 */
export function createHeaderTemplate(data: HeaderTemplateData): string {
  return `
    <div class="game__status">
      <button id="btn-goto-setup" class="btn btn--small btn--outline" type="button">MENU</button>
      <button id="btn-restart-game" class="btn btn--small btn--outline" type="button">RESTART</button>
    </div>
  `;
}

/**
 * Creates a single memory card template.
 *
 * @param cardValue - Card face id.
 * @param themeFolder - Theme asset folder name.
 * @returns Card HTML string.
 */
export function createCardTemplate(cardValue: number, themeFolder: string): string {
  return `
    <div class="card__inner">
      <div class="card__front">
        <img src="${assetPath(`/img/01_themes/${themeFolder}/cards/card_background.png`)}" alt="Card background">
      </div>
      <div class="card__back">
        <img src="${assetPath(`/img/01_themes/${themeFolder}/cards/card${cardValue}.png`)}" alt="Card ${cardValue}">
      </div>
    </div>
  `;
}
