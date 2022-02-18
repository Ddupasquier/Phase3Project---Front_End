import React, { useState } from "react";
import GameScreen from "./GameScreen";
import Map from "./Map";

function GameContainer() {
const [houseState, setHouseState] = useState("basement_attic")


  return (
    <div id="bg" className={houseState}>
      <div className="gamescreen togreen">
        <GameScreen setHouseState={setHouseState}/>
        <p>
          <a
            className="btn btn-primary map togreen button"
            data-toggle="collapse"
            href="#multiCollapseExample1"
            role="button"
            aria-expanded="false"
            aria-controls="multiCollapseExample1"
          >
            Map
          </a>
        </p>
        
            <div className="collapse multi-collapse collapsediv" id="multiCollapseExample1">
              <div className="card cardbg">
                <Map />
              </div>
            </div>
          </div>
        </div>
      
  );
}

export default GameContainer;
