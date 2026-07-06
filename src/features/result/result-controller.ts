import { initGame } from "../game/game-controller";
import { showMatchSetupScreen, startGameSequence } from "../../ui/navigation";

/* ==========================================================================
  INITIALIZATION OF RESULT SCREEN
   ========================================================================== */

/**
 * @description Initializes the result screen logic by mapping restart and menu actions.
 * @export
 */
export function initResult(): void {
  const restartBtn = document.getElementById("end-btn-restart");
  const menuBtn = document.getElementById("end-btn-menu");

  restartBtn?.addEventListener("click", () => {
    startGameSequence();
  });

  menuBtn?.addEventListener("click", () => {
    document.body.dataset.theme = "magenta-rush";
    showMatchSetupScreen();
  });
}
