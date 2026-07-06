import { showMatchSetupScreen } from "../../ui/navigation";

/* ==========================================================================
  INITIALIZATION OF HOME SCREEN
   ========================================================================== */

/**
 * @description Initializes interactions for the home screen.
 * @export
 */
export function initHome(): void {
  document.getElementById("btn-enter-game")?.addEventListener("click", () => {
    showMatchSetupScreen();
  });
}
