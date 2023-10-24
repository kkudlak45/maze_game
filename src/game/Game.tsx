import { useEffect, useState } from "react";
import GameBoard from "./GameBoard";
import { ROUND1_STATE } from "../constants/initalStates";

export default function Game() {
  const [gameState, setGameState] = useState(ROUND1_STATE);

  useEffect(() => {
    
  }, [])

  return <GameBoard gameState={gameState} />
}