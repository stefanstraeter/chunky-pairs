import { themePreviews } from "../../ui/theme";

/* ==========================================================================
   HELPERS FOR SETUP CONTROLLERS
   ========================================================================== */

/**
 * @description Returns the preview image path for the given theme radio button value. If the provided value does not match any key in the themePreviews object, it defaults to the "retro-arcade" theme preview.
 * @export
 * @param {string} radioValue
 * @return {*}  {string}
 */
export function getPreviewImagePath(radioValue: string): string {
  const key = radioValue as keyof typeof themePreviews;
  return themePreviews[key] ?? themePreviews["retro-arcade"];
}

/**
 * @description Gets the currently selected theme, player, and board size radio button elements from the match setup screen.
 * @export
 * @return {*}
 */
export function getSelectedSetupElements() {
  const theme = document.querySelector<HTMLInputElement>('input[name="theme"]:checked');
  const player = document.querySelector<HTMLInputElement>('input[name="player"]:checked');
  const size = document.querySelector<HTMLInputElement>('input[name="board-size"]:checked');

  return { theme, player, size };
}
