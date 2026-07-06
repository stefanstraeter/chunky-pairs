import { initGame } from "../gameplay/game";
import { showMatchSetupScreen } from "../../ui/navigation";

/**
 * @description Initializes the end screen logic by mapping restart and menu actions.
 * @export
 */
export function initEndScreen(): void {
  const restartBtn = document.getElementById("end-btn-restart");
  const menuBtn = document.getElementById("end-btn-menu");

  restartBtn?.addEventListener("click", () => {
    initGame();
  });

  menuBtn?.addEventListener("click", () => {
    document.body.dataset.theme = "magenta-rush";
    showMatchSetupScreen();
  });
}
