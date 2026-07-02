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
   PURE LOGIC & GAME MECHANICS HELPERS
   ========================================================================== */

export function createCardValues(boardSize: number): string[] {
  const numberOfPairs = boardSize / 2;
  const selectedUniqueNames = CARD_NAMES.slice(0, numberOfPairs);
  const deck = [...selectedUniqueNames, ...selectedUniqueNames];

  return shuffle(deck);
}

function shuffle(array: string[]): string[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
