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
        {data ? (
          <ScreenText data={data} handleDataState={handleDataState} />
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
      
    </>
  );
}

export default GameScreen;
