import { gameState } from "../../state";
import { startGameSequence } from "../../ui/navigation";
import type { Theme } from "../../types";
import { getPreviewImagePath } from "./setup-helpers";
import { getSelectedSetupElements } from "./setup-helpers";

/* ==========================================================================
   INITIALIZATION
   ========================================================================== */
/**
 * @description Initializes the match setup screen by setting up event listeners for theme, player, and board size radio buttons, as well as the start button.
 * @export
 */
export function initMatchSetup(): void {
  setupThemeRadios();
  setupThemeHoverListeners();
  setupPlayerRadios();
  setupBoardSizeRadios();

  document.getElementById("btn-start-game")?.addEventListener("click", () => {
    saveMatchSetupToState();
    startGameSequence();
  });
}

/* ==========================================================================
   INPUT HANDLERS & SETUP LOGIC
   ========================================================================== */

/**
 * @description Enables the start button only when all required match setup options (theme, player, board size) are selected.
 */
function checkStartEnabled(): void {
  const btnStart = document.getElementById("btn-start-game") as HTMLButtonElement | null;
  const { theme, player, size } = getSelectedSetupElements();

  if (btnStart) {
    btnStart.disabled = !(theme && player && size);
  }
}

function updateThemePreview(radioValue: string): void {
  const preview = document.getElementById("theme-preview") as HTMLImageElement | null;
  const label = document.getElementById("selected-theme");
  const activeRadio = document.querySelector('input[name="theme"]:checked');

  if (preview) {
    preview.src = getPreviewImagePath(radioValue);
  }

  if (label) {
    label.textContent = activeRadio?.closest("label")?.textContent?.trim() ?? "Game theme";
  }
}

/**
 * @description Sets up event listeners for theme radio buttons to update the theme preview and synchronize the end screen theme when a new theme is selected.
 */
function setupThemeRadios(): void {
  document.querySelectorAll<HTMLInputElement>('input[name="theme"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      updateThemePreview(radio.value);
      checkStartEnabled();
    });
  });
}

/**
 * @description Sets up hover event listeners on theme radio button labels to temporarily update the theme preview when hovering over different theme options.
 */
function setupThemeHoverListeners(): void {
  document.querySelectorAll<HTMLInputElement>('input[name="theme"]').forEach((radio) => {
    radio.closest("label")?.addEventListener("mouseenter", () => {
      updateThemePreview(radio.value);
    });
    radio.closest("label")?.addEventListener("mouseleave", () => {
      const activeRadio = document.querySelector<HTMLInputElement>('input[name="theme"]:checked');
      updateThemePreview(activeRadio?.value ?? "magenta-rush");
    });
  });
}

/**
 * @description Sets up event listeners for player radio buttons to update the selected player label and check if the start button should be enabled when a player option is selected.
 */
function setupPlayerRadios(): void {
  document.querySelectorAll<HTMLInputElement>('input[name="player"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      const label = document.getElementById("selected-player");
      const text = radio.closest("label")?.textContent?.trim();
      if (label) {
        label.textContent = text ?? "Player";
      }
      checkStartEnabled();
    });
  });
}

/**
 * @description Sets up event listeners for board size radio buttons to update the selected board size label and check if the start button should be enabled when a board size option is selected.
 */
function setupBoardSizeRadios(): void {
  document.querySelectorAll<HTMLInputElement>('input[name="board-size"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      const label = document.getElementById("selected-size");
      const text = radio.closest("label")?.textContent?.trim();
      if (label) {
        label.textContent = text ?? "Board size";
      }
      checkStartEnabled();
    });
  });
}

/**
 * @description Saves the selected match setup options (theme, player, board size) from the match setup screen to the global game state and updates the document body's data-theme attribute to reflect the selected theme.
 */
function saveMatchSetupToState(): void {
  const { theme, player, size } = getSelectedSetupElements();

  gameState.theme = (theme?.value ?? "magenta-rush") as Theme;
  gameState.player = (player?.value ?? "player-1") as "player-1" | "player-2";
  gameState.boardSize = parseInt(size?.value ?? "16", 10);

  document.body.dataset.theme = gameState.theme;
}
