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
