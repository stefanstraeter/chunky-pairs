import { assetPath } from "../assets";

/* ==========================================================================
    TEMPLATE FACTORIES
    ========================================================================== */

/**
 * Creates the game header and embedded exit modal markup.
 * @export
 * @returns {string} The HTML string for the game header and exit modal.
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

/**
 * @description Creates the card template with front and back sides, including the image for the back side based on the provided card name.
 * @export
 * @param {string} cardName - The name of the card to be used for the back side image.
 * @return {string}  The HTML string representing the card template.
 */
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

/**
 * @description Creates the modal template with a title, message, and action buttons for confirmation and cancellation.
 * @export
 * @param {string} title - The title of the modal.
 * @param {string} message - The message content of the modal.
 * @param {string} confirmText - The text for the confirmation button.
 * @param {string} cancelText - The text for the cancellation button.
 * @return {string}  HTML string representing the modal template.
 */
export function createModalTemplate(title: string, message: string, confirmText: string, cancelText: string): string {
  return `
    <div class="modal-overlay">
      <div class="modal-card">
        <h3 class="modal-card__title">${title}</h3>
        <p class="modal-card__text">${message}</p>
        <div class="modal-card__actions">
          <button id="modal-btn-confirm" class="btn btn--small ">${confirmText}</button>
          <button id="modal-btn-cancel" class="btn btn--small ">${cancelText}</button>
        </div>
      </div>
    </div>
  `;
}
