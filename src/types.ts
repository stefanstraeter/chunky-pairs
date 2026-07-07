/* ==========================================================================
  TYPES
  ========================================================================== */

export type Theme = "retro-arcade" | "pastel-punch";
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
