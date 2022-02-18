import React, { useEffect, useState } from "react";
import ScreenText from "./ScreenText";

function GameScreen({ setHouseState }) {
  const [data, setData] = useState(null);
  const basement_attic = [27, 36, 1, 17];
  const fliphouse = [21];
  const reghouse = [4];

  if (data !== null) {
    if (reghouse.includes(data[1])) {
      setHouseState("reghouse");
    } else if (fliphouse.includes(data[1])) {
      setHouseState("fliphouse");
    } else if (basement_attic.includes(data[1])) {
      setHouseState("basement_attic");
    }
  }

  // console.log(data);
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
