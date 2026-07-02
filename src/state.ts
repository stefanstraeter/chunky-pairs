import type { GameState } from "./types";

/* ==========================================================================
  DEFAULT STATE
  ========================================================================== */

export const gameState: GameState = {
  theme: "magenta-rush",
  player: "player-1",
  boardSize: 16,
  currentPlayer: "player-1",
  scores: { "player-1": 0, "player-2": 0 },
  flippedCards: [],
  matchedPairs: 0,
  isLocked: false,
};
