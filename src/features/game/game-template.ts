import { assetPath } from "../../assets";

/* ==========================================================================
    GAMEPLAY TEMPLATE
    ========================================================================== */

/**
 * @description Creates the game screen template.
 * @export
 * @return {string}  The HTML string for the game screen.
 */
export function createGameScreenTemplate(): string {
  return `
    <section id="screen-game" class="screen game">
      <header id="game-header" class="game__header"></header>
      <div class="game__main-layout">

        <div id="widget-player-1" class="player-card player-card--1">
          <img class="player-card__avatar" src="${assetPath("img/00_general/player-one.svg")}" alt="Player 1 Avatar" />
          <span class="player-card__label">PLAYER 1</span>
          <span id="score-player-1" class="player-card__score">0</span>
        </div>

        <div class="game__board">
          <div id="memory-grid" class="game-board__grid"></div>
          
          <div id="turn-timer" class="turn-timer">
            <img id="turn-timer-bg" class="turn-timer__bg" src="${assetPath("img/00_general/turn-background-red.svg")}" alt="">
            <div class="turn-timer__content">
              <span id="turn-timer-label" class="turn-timer__player">PLAYER 1'S TURN</span>
              <span id="turn-timer-countdown" class="turn-timer__time">10s</span>
            </div>
          </div>
        </div>

        <div id="widget-player-2" class="player-card player-card--2">
          <img class="player-card__avatar" src="${assetPath("img/00_general/player-two.svg")}" alt="Player 2 Avatar" />
          <span class="player-card__label">PLAYER 2</span>
          <span id="score-player-2" class="player-card__score">0</span>
        </div>
      </div>
      <div id="exit-modal-container"></div>
    </section>
  `;
}

/* ==========================================================================
    HELPER FUNCTIONS
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
