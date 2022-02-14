import React from "react";
import Inventory from "./Inventory";
import Map from "./Map";
import GameScreen from "./GameScreen";

function GameContainer() {
  return (
    <div className="gamescreen togreen">
      <div className="screen"><GameScreen /></div>
      <div className="inventory"><Inventory /></div>
      <div className="map"><Map /></div>
    </div>
  );
}

export default GameContainer;
