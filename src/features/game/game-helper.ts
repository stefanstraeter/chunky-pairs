const CARD_NAMES = [
  "80s",
  "alien",
  "boombox",
  "chip",
  "coding",
  "coffee",
  "hacker",
  "halloween",
  "heart",
  "ipod",
  "joystick",
  "monster",
  "mountain",
  "rainbow",
  "rip",
  "run",
  "skateboard",
  "tape",
];

/* ==========================================================================
    UTILITIES
   ========================================================================== */

/**
 * @description Creates an array of card values for the game based on the specified board size. It selects a number of unique card names, duplicates them to create pairs, and shuffles the resulting deck.
 * @export
 * @param {number} boardSize
 * @return {string[]} An array of card values for the game.
 */
export function createCardValues(boardSize: number): string[] {
  const numberOfPairs = boardSize / 2;
  const selectedUniqueNames = CARD_NAMES.slice(0, numberOfPairs);
  const deck = [...selectedUniqueNames, ...selectedUniqueNames];
  return shuffle(deck);
}

/**
 * @description Shuffles an array of strings using the Fisher-Yates algorithm and returns a new shuffled array.
 * @param {string[]} array - The array of strings to be shuffled.
 * @return {string[]} A new array containing the shuffled elements.
 */
function shuffle(array: string[]): string[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

/**
 * @description Toggles the current player between "player-1" and "player-2".
 * @param {("player-1" | "player-2")} currentPlayer
 * @return {("player-1" | "player-2")}
 */
export const togglePlayer = (currentPlayer: "player-1" | "player-2"): "player-1" | "player-2" => {
  return currentPlayer === "player-1" ? "player-2" : "player-1";
};
