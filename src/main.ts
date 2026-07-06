import "./styles/main.scss";
import { showHomeScreen, showEndScreen } from "./ui/navigation";

/**
 * The entry point of the application. It initializes the user interface once the DOM content is fully loaded.
 */
document.addEventListener("DOMContentLoaded", showHomeScreen);

/* ==========================================================================
   DEVELOPER CHEAT-KEYS (Nur zum Testen!)
   ========================================================================== */
window.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();

  if (key === "1") {
    // Taste 1: Player 1 gewinnt
    showEndScreen("player-1", 12, 6);
  } else if (key === "2") {
    // Taste 2: Player 2 gewinnt
    showEndScreen("player-2", 4, 10);
  } else if (key === "3") {
    // Taste 3: Unentschieden
    showEndScreen("draw", 8, 8);
  }
});
