import { assetPath } from "../../assets";

/* ==========================================================================
   CONSTANTS & VARIABLES
   ========================================================================== */
const END_SCREEN_CONFIG = {
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
 * @description Generates textual and visual details based on match results using a central configuration.
 * @export
 */
export function getEndScreenDetails(result: "player-1" | "player-2" | "draw", scoreP1: number, scoreP2: number) {
  // 1. Hole dir die passenden Daten direkt über den Key ("player-1", "player-2" oder "draw")
  const config = END_SCREEN_CONFIG[result];

  // 2. Erstelle dynamisch den Score-Text
  const scoreText = `FINAL SCORE: ${scoreP1} - ${scoreP2}`;

  // 3. Gib das fertige Objekt zurück
  return {
    title: config.title,
    scoreText,
    smileySrc: assetPath(config.smileyPath),
    themeClass: config.themeClass,
  };
}
