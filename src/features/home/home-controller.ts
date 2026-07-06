import { showMatchSetupScreen } from "../../ui/navigation";

/**
 * @description Initializes interactions for the home screen.
 * @export
 */
export function initHome(): void {
  document.getElementById("btn-enter-game")?.addEventListener("click", () => {
    showMatchSetupScreen();
  });
}
