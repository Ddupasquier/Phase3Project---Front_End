import React, { useEffect, useState } from "react";
import Inventory from "./Inventory";
import Map from "./Map";
import ScreenText from "./ScreenText";

function GameScreen() {
  const [data, setData] = useState(null);
  console.log(data);
  useEffect(() => {
    fetch("http://localhost:9292/rooms/9")
      .then((res) => res.json())
      .then((data) => {
        setData([data, 1]);
      });
  }, []);

  function handleDataState(data, nextConvoId) {
    setData([data, nextConvoId]);
  }

  return (
    <>
      <div className="screentext">
        <ScreenText data={data} handleDataState={handleDataState} />
      </div>
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
              <Inventory data={data} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GameScreen;
