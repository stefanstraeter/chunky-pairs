import "./styles/main.scss";
import { showHomeScreen, showResultScreen } from "./ui/navigation";

/**
 * The entry point of the application. It initializes the user interface once the DOM content is fully loaded.
 */
document.addEventListener("DOMContentLoaded", showHomeScreen);
document.addEventListener("touchstart", () => {}, { passive: true });
