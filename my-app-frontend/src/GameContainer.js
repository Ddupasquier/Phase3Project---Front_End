import React, { useState } from "react";
import GameScreen from "./GameScreen";
import Map from "./Map";
import Audio from "./LocalAssets/dark-drone-ambient-(black13-first.was sound).mp3"

function GameContainer() {
const [houseState, setHouseState] = useState("basement_attic")


  return (
    
    <div id="bg" className={houseState}>
      <audio
        className="audio"
        controls
        src={Audio} autoPlay>
            Your browser does not support the
            <code>audio</code> element.
    </audio>
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
