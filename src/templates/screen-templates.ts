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
          <button id="btn-enter-game" class="btn btn--primary btn--large">
            Smash me <img src="${assetPath("/img/00_general/player-vs-player.svg")}" class="btn__smile" />
          </button>
        </div>
      </div>
    </section>
  `;
}

/* ==========================================================================
  TEMPLATE MATCH SETUP SCREEN
  ========================================================================== */

/**
 * @description Creates match setup screen markup for lazy mounting, which includes options for selecting game themes, player colors, and board sizes, as well as a preview image and a start button that becomes enabled once all selections are made.
 * @export
 * @return {string} The HTML string representing the match setup screen template, which contains fieldsets for game themes, player selection, and board size, along with a preview image and a start button.
 */
export function createMatchSetupScreenTemplate(): string {
  return `
    <section id="screen-match-setup" class="screen match-setup">
      <div class="match-setup__card">
        
        <h2 class="match-setup__title">Setup your Game</h2>
        
        <img
          id="theme-preview"
          class="match-setup__preview-img"
          src="${assetPath("/img/01_themes/vibes_theme/vibe_theme.png")}"
          alt="Theme preview"
        />

        <div class="match-setup__form">
          <fieldset class="match-setup__fieldset">
            <legend class="match-setup__legend">Select Vibe</legend>
            <div class="match-setup__grid">
              <label class="match-setup__tile">
                <input type="radio" name="theme" value="magenta-rush" />
                <span>Magenta Rush</span>
              </label>
              <label class="match-setup__tile">
                <input type="radio" name="theme" value="electric-blue" />
                <span>Electric Blue</span>
              </label>
            </div>
          </fieldset>

          <fieldset class="match-setup__fieldset">
            <legend class="match-setup__legend">Pick Your Hero</legend>
            <div class="match-setup__grid">
              <label class="match-setup__tile">
                <input type="radio" name="player" value="player-1" />
                <span>Player 1</span>
              </label>
              <label class="match-setup__tile">
                <input type="radio" name="player" value="player-2" />
                <span>Player 2</span>
              </label>
            </div>
          </fieldset>

          <fieldset class="match-setup__fieldset">
            <legend class="match-setup__legend">Difficulty</legend>
            <div class="match-setup__grid match-setup__grid--3col">
              <label class="match-setup__tile">
                <input type="radio" name="board-size" value="16" />
                <span>16 Cards</span>
              </label>
              <label class="match-setup__tile">
                <input type="radio" name="board-size" value="24" />
                <span>24 Cards</span>
              </label>
              <label class="match-setup__tile">
                <input type="radio" name="board-size" value="36" />
                <span>36 Cards</span>
              </label>
            </div>
          </fieldset>
        </div>

        <button id="btn-start-game" class="btn btn--primary btn--large match-setup__start-btn" disabled>
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
    ENDSCREEN
    ========================================================================== */

/**
 * @description Internal helper to generate textual and visual details based on match results.
 */
function getEndScreenDetails(result: "player-1" | "player-2" | "draw", scoreP1: number, scoreP2: number) {
  const scoreText = `FINAL SCORE: ${scoreP1} - ${scoreP2}`;

  if (result === "player-1") {
    return {
      title: "PLAYER 1 DOMINATES!",
      scoreText,
      smileySrc: assetPath("img/00_general/player-one.svg"),
      themeClass: "end-screen--p1",
    };
  }

  if (result === "player-2") {
    return {
      title: "PLAYER 2 DOMINATES!",
      scoreText,
      smileySrc: assetPath("img/00_general/player-two.svg"),
      themeClass: "end-screen--p2",
    };
  }

  return {
    title: "PEACEFUL DRAW",
    scoreText,
    smileySrc: assetPath("img/00_general/players-draw.svg"), // Dein Unentschieden-Asset
    themeClass: "end-screen--draw",
  };
}

/**
 * @description Creates the HTML template for the complete end screen overlay.
 * @export
 */
export function createEndScreenTemplate(result: "player-1" | "player-2" | "draw", scoreP1: number, scoreP2: number): string {
  const { title, scoreText, smileySrc, themeClass } = getEndScreenDetails(result, scoreP1, scoreP2);

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
