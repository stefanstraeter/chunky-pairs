/* ==========================================================================
  TYPES
  ========================================================================== */

export type Theme = "magenta-rush" | "electric-blue";

export type Player = "player-1" | "player-2";

/* ==========================================================================
  INTERFACES
  ========================================================================== */

export interface GameState {
  theme: Theme;
  player: Player;
  boardSize: number;
  currentPlayer: Player;
  scores: Record<Player, number>;
  flippedCards: HTMLElement[];
  matchedPairs: number;
  isLocked: boolean;
}
