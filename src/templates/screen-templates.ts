import { assetPath } from "../assets";

/* ==========================================================================
    TEMPLATE HOME SCREEN
    ========================================================================== */
/**
 * @description Creates home screen markup for lazy mounting.
 * @export
 * @return {string} The HTML string representing the home screen template, which consists of a section with an id of "screen-home" and a class of "screen home".
 */
export function createHomeScreenTemplate(): string {
  return `
  <section id="screen-home" class="screen home">
      <div class="home__content">
        <h1 class="home__title">Chunky Pairs</h1>

        <div class="home__actions">
          <button id="btnPlay" class="btn btn--primary btn--large">
            Smash me <img src="${assetPath("/img/00_general/player-vs-player.svg")}" class="btn__smile" />
          </button>
        </div>
      </div>
    </section>
  `;
}

/* ==========================================================================
    TEMPLATE SETTINGS SCREEN
    ========================================================================== */

/**
 * @description Creates settings screen markup for lazy mounting, which includes options for selecting game themes, player colors, and board sizes, as well as a preview image and a start button that becomes enabled once all selections are made.
 * @export
 * @return {string} The HTML string representing the settings screen template, which contains fieldsets for game themes, player selection, and board size, along with a preview image and a start button.
 */
export function createSettingsScreenTemplate(): string {
  return `
    <section id="screen-settings" class="screen settings">
      <div class="settings__card">
        
        <h2 class="settings__title">Setup your Game</h2>
        
        <img
          id="theme-preview"
          class="settings__preview-img"
          src="${assetPath("/img/01_themes/vibes_theme/vibe_theme.png")}"
          alt="Theme preview"
        />

        <div class="settings__form">
          <fieldset class="settings__fieldset">
            <legend class="settings__legend">Select Vibe</legend>
            <div class="settings__grid">
              <label class="settings__tile">
                <input type="radio" name="theme" value="magenta-rush" />
                <span>Magenta Rush</span>
              </label>
              <label class="settings__tile">
                <input type="radio" name="theme" value="electric-blue" />
                <span>Electric Blue</span>
              </label>
            </div>
          </fieldset>

          <fieldset class="settings__fieldset">
            <legend class="settings__legend">Pick Your Hero</legend>
            <div class="settings__grid">
              <label class="settings__tile">
                <input type="radio" name="player" value="blue" />
                <span>Blue</span>
              </label>
              <label class="settings__tile">
                <input type="radio" name="player" value="orange" />
                <span>Orange</span>
              </label>
            </div>
          </fieldset>

          <fieldset class="settings__fieldset">
            <legend class="settings__legend">Difficulty</legend>
            <div class="settings__grid settings__grid--3col">
              <label class="settings__tile">
                <input type="radio" name="board-size" value="16" />
                <span>16 Cards</span>
              </label>
              <label class="settings__tile">
                <input type="radio" name="board-size" value="24" />
                <span>24 Cards</span>
              </label>
              <label class="settings__tile">
                <input type="radio" name="board-size" value="36" />
                <span>36 Cards</span>
              </label>
            </div>
          </fieldset>
        </div>

        <button id="btn-start" class="btn btn--primary btn--large settings__start-btn" disabled>
          Let's Play!
        </button>

      </div>
    </section>
  `;
}

/* ==========================================================================
    TEMPLATE GAME SCREEN
    ========================================================================== */

/**
 * @description Creates game screen markup for lazy mounting, which includes a header for displaying game information and a board area where the memory grid will be rendered.
 * @export
 * @return {string} The HTML string representing the game screen template, which consists of a section with an id of "screen-game" and a class of "screen game", containing a header for game information and a div for the memory grid.
 */
export function createGameScreenTemplate(): string {
  return `
    <section id="screen-game" class="screen game">
      <header class="game__header"></header>
      <div class="game__board">
        <div id="memory-grid" class="game-board__grid"></div>
      </div>
    </section>
  `;
}

/* ==========================================================================
    TEMPLATE GAME OVER SCREEN
    ========================================================================== */

/**
 * @description Creates game-over screen markup for lazy mounting, which includes a title, subtitle, and final scores for each player.
 * @export
 * @return {string} The HTML string representing the game-over screen template, which consists of a section with an id of "screen-gameover" and a class of "screen gameover".
 */
export function createGameOverScreenTemplate(): string {
  return `
    <section id="screen-gameover" class="screen gameover">
      <div class="gameover__content">
        <h2 class="gameover__title">GAME OVER</h2>
        <p class="gameover__subtitle">Final score</p>
        <div class="gameover__scores status__scores">
          <span class="score score--blue">
            <img id="gameover-blue-icon" class="score__icon" src="${assetPath("/img/00_general/label_blue.svg")}" alt="" />
            <span id="gameover-blue-label">Blue </span><span id="gameover-blue-score" class="score__value">0</span>
          </span>
          <span class="score score--orange">
            <img id="gameover-orange-icon" class="score__icon" src="${assetPath("/img/00_general/label_orange.svg")}" alt="" />
            <span id="gameover-orange-label">Orange </span><span id="gameover-orange-score" class="score__value">0</span>
          </span>
        </div>
      </div>
    </section>
  `;
}

/* ==========================================================================
    TEMPLATE WINNER SCREEN
    ========================================================================== */

/**
 * @description Creates winner screen markup for lazy mounting, which includes a title, an area to display the winner's name and icon, and a button to return to the start screen.
 * @export
 * @return {string} The HTML string representing the winner screen template, which consists of a section with an id of "screen-winner" and a class of "screen winner".
 */
export function createVibesWinnerTemplate(): string {
  return `
    <section id="screen-winner" class="screen winner slide-in-top">
      <div class="winner__content">
        <img class="winner__header-icon" src="${assetPath("/img/00_general/confetti.png")}" alt="" />
        <h2 class="winner__title">The winner is</h2>
        <div class="winner__winner" data-winner="">
          <p id="winner-name" class="winner__winner-name"></p>
          <img id="winner-icon" class="winner__winner-icon" src="" alt="Winner trophy" />
        </div>
        <button id="btn-back-to-start-winner" class="btn btn--exit winner__back-btn" type="button">Back to start</button>
      </div>
    </section>
  `;
}

/**
 * @description Creates a winner screen template with a electric-blue theme for lazy mounting, which includes a title, an area to display the winner's name and icon, and a button to return to the start screen. The design of this template is tailored to fit the electric-blue theme, featuring a more dynamic layout and styling compared to the magenta-rush theme.
 * @export
 * @return {string} The HTML string representing the electric-blue-themed winner screen template, which consists of a section with an id of "screen-winner" and a class of "screen winner winner--electric-blue", containing a div for the winner content, including the title, winner information, and a back button. The layout and styling of this template are designed to evoke a electric-blue atmosphere, with bold typography and a more energetic presentation.
 */
export function createElectricBlueWinnerTemplate(): string {
  return `
    <section id="screen-winner" class="screen winner winner--electric-blue slide-in-bottom">
      <div class="winner__content">
        <h2 class="winner__title">STAGE CLEAR!</h2>
        <div class="winner__winner" data-winner="">
          <p id="winner-name" class="winner__winner-name"></p>
          <img id="winner-icon" class="winner__winner-icon" src="" alt="Winner trophy" />
        </div>
        <button id="btn-back-to-start-winner" class="btn btn--exit winner__back-btn" type="button">home</button>
      </div>
    </section>
  `;
}

/* ==========================================================================
    TEMPLATE DRAW SCREEN
    ========================================================================== */
/**
 * @description Creates draw screen markup for lazy mounting, which includes a title, subtitle, and an icon indicating a draw, along with a button to return to the start screen.
 * @export
 * @return {string} The HTML string representing the draw screen template, which consists of a section with an id of "screen-draw" and a class of "screen draw".
 */
export function createDrawScreenTemplate(): string {
  return `
    <section id="screen-draw" class="screen draw">
      <div class="draw__content">
        <h2 class="draw__title">It's a</h2>
        <p class="draw__name">DRAW</p>
        <img class="draw__icon" src="${assetPath("/img/00_general/draw_icon_code.png")}" alt="Draw" />
        <button id="btn-back-to-start-draw" class="btn btn--exit draw__back-btn" type="button">Back to start</button>
      </div>
    </section>
  `;
}
