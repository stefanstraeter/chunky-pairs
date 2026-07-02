import { gameState } from "../state";

/* ==========================================================================
   PURE LOGIC & GAME MECHANICS HELPERS
   ========================================================================== */

/**
 * @description Applies the match state to the two matched cards by incrementing the current player's score, updating the matched pairs count, clearing the flipped cards array, and unlocking the game for the next turn.
 * @export
 * @param {number} boardSize - The total number of cards on the board, used to determine when the game has ended.
 * @return {number[]} An array of numbers representing the shuffled card values for the game board, created based on the given board size.
 */
export function createCardValues(boardSize: number): number[] {
  const numberOfPairs = boardSize / 2;
  const uniqueValues: number[] = [];

  for (let i = 1; i <= numberOfPairs; i++) {
    uniqueValues.push(i);
  }

  const deck = [...uniqueValues, ...uniqueValues];

  return shuffle(deck);
}

/**
 * @description Shuffles an array of numbers using the Fisher-Yates algorithm, returning a new array with the elements in random order.
 * @param {number[]} array - The array of numbers to be shuffled.
 * @return {number[]} A new array containing the same numbers as the input array but in a random order.
 */
function shuffle(array: number[]): number[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/* ==========================================================================
   UI & ASSET HELPERS 
   ========================================================================== */

/**
 * @description Returns the folder name for the current theme, which can be 'game_theme' or 'vibes_theme'.
 * @export
 * @return {string} The folder name for the current theme.
 */
export function getThemeFolder(): string {
  return gameState.theme === "electric-blue" ? "game_theme" : "vibes_theme";
}
