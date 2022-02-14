import React from "react";
import Inventory from "./Inventory";
import Map from "./Map";
import GameScreen from "./GameScreen";

function GameContainer() {
  return (
    <div>
      <GameScreen />
      <Inventory />
      <Map />
    </div>
  );
}

export default GameContainer;
