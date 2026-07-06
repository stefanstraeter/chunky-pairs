import { assetPath } from "../../assets";

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
