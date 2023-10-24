import { Fragment, useEffect, useRef } from "react";
import { TileTypes } from "../constants/tileTypes";
import { drawEnemy, drawGoal, drawOpen, drawPlayer, drawWall } from "./tileFunctions";

const WIDTH = 500;
const HEIGHT = 500;
const GAME_CANVAS = "game_window";

export default function GameBoard({ gameState }: { gameState: string[][] }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const tileHeight = Math.floor(HEIGHT / gameState.length);
  const tileWidth = Math.floor(WIDTH / gameState[0].length);

  useEffect(() => {
    const { current: board } = canvasRef;

    if (board !== null) {
      const context = board.getContext("2d");
      if (context) {
        // redraw
        context.clearRect(0, 0, WIDTH, HEIGHT);

        for (let row = 0; row < gameState.length; row++) {
          for (let col = 0; col < gameState[row].length; col++) {
            const type = gameState[row][col];
            switch (type) {
              case TileTypes.W:
                drawWall(context, col, row, tileWidth, tileHeight);
                break;
              case TileTypes.P:
                drawPlayer(context, col, row, tileWidth, tileHeight);
                break;
              case TileTypes.O:
                drawOpen(context, col, row, tileWidth, tileHeight);
                break;
              case TileTypes.E:
                drawEnemy(context, col, row, tileWidth, tileHeight);
                break;
              case TileTypes.G:
                drawGoal(context, col, row, tileWidth, tileHeight);
                break;
              default:
                console.log("default")
            }
          }
        }
      }
    }
  }, [gameState]);

  return (
    <Fragment>  
      <canvas
        id={GAME_CANVAS}
        ref={canvasRef}
        width={WIDTH}
        height={HEIGHT}
        style={{ backgroundColor: 'white' }}
      />
    </Fragment>
  );
}