import { assetPath } from "../../assets";

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
          src="${assetPath("/img/00_general/theme-retro-arcade.png")}"
          alt="Theme preview"
        />

        <div class="match-setup__form">
          <fieldset class="match-setup__fieldset">
            <legend class="match-setup__legend">Select Vibe</legend>
            <div class="match-setup__grid">
              <label class="match-setup__tile">
                <input type="radio" name="theme" value="retro-arcade" />
                <span>Retro Arcade</span>
              </label>
              <label class="match-setup__tile">
                <input type="radio" name="theme" value="pastel-punch" />
                <span>Pastel Punch</span>
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
