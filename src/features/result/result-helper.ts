import { assetPath } from "../../assets";

/* ==========================================================================
   CONSTANTS & VARIABLES
   ========================================================================== */

const RESULT_SCREEN_CONFIG = {
  "player-1": {
    title: "PLAYER 1 WINS!",
    themeClass: "end-screen--p1",
    smileyPath: "img/00_general/player-one.svg",
  },
  "player-2": {
    title: "PLAYER 2 WINS!",
    themeClass: "end-screen--p2",
    smileyPath: "img/00_general/player-two.svg",
  },
  draw: {
    title: "DRAW! PLAY AGAIN?",
    themeClass: "end-screen--draw",
    smileyPath: "/img/00_general/players-draw.svg",
  },
} as const;

/* ==========================================================================
   HELPERS
   ========================================================================== */

/**
 * @description Generates visual and textual details for the result screen based on the match outcome.
 * @export
 * @param {("player-1" | "player-2" | "draw")} result
 * @param {number} scoreP1
 * @param {number} scoreP2
 * @return {Object} The configured title, score text, asset path, and theme class.
 */
export function getResultDetails(result: "player-1" | "player-2" | "draw", scoreP1: number, scoreP2: number) {
  const config = RESULT_SCREEN_CONFIG[result];
  const scoreText = `FINAL SCORE: ${scoreP1} VS ${scoreP2}`;

  return {
    title: config.title,
    scoreText,
    smileySrc: assetPath(config.smileyPath),
    themeClass: config.themeClass,
  };
}
