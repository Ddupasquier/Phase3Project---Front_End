import React from "react";
import GameScreen from "./GameScreen";
import Inventory from "./Inventory";
import Map from "./Map";

function GameContainer() {
  return (
    <div className="gamescreen togreen">
      <GameScreen />
      <p>
        <a
          className="btn btn-primary map"
          data-toggle="collapse"
          href="#multiCollapseExample1"
          role="button"
          aria-expanded="false"
          aria-controls="multiCollapseExample1"
        >
          Map
        </a>
        <button
          className="btn btn-primary inventory"
          type="button"
          data-toggle="collapse"
          data-target="#multiCollapseExample2"
          aria-expanded="false"
          aria-controls="multiCollapseExample2"
        >
          Inventory
        </button>
      </p>
      <div className="row">
        <div className="col">
          <div className="collapse multi-collapse" id="multiCollapseExample1">
            <div className="card cardbg">
              <Map />
            </div>
          </div>
        </div>
        <div className="col">
          <div className="collapse multi-collapse" id="multiCollapseExample2">
            <div className="card card-body cardbg">
              <Inventory />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameContainer;
