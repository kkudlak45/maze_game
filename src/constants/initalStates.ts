import { TileTypes } from "./tileTypes"

const { P, E, W, G, O } = TileTypes;

export const ROUND1_STATE = [
  [P, O, O, O, O, O, O, O, O, W],
  [W, W, W, W, O, W, O, W, O, W],
  [W, O, O, W, O, W, O, W, O, W],
  [W, W, O, W, W, W, O, W, O, W],
  [W, O, O, O, O, O, O, W, E, W],
  [W, O, W, O, W, O, W, W, W, W],
  [W, O, W, O, W, O, W, E, O, W],
  [W, O, W, E, W, O, W, W, O, W],
  [W, O, O, O, O, O, O, O, O, W],
  [W, W, W, W, W, W, W, W, O, G],
];