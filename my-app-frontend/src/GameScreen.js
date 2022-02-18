import React, { useEffect, useState } from "react";
import ScreenText from "./ScreenText";

function GameScreen({ setHouseState, houseState }) {
  const [data, setData] = useState(null);
  const [user, setUser] = useState("");
  const basement = [27, 36, 1];
  const fliphouse = [21];
  const reghouse = [4];
  const attic = [17];

  if (data !== null) {
    if (reghouse.includes(data[1])) {
      setHouseState("reghouse");
    } else if (fliphouse.includes(data[1])) {
      setHouseState("fliphouse");
    } else if (basement.includes(data[1])) {
      setHouseState("basement");
    } else if (attic.includes(data[1])) {
      setHouseState("attic");
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

  useEffect(() => {
    fetch("http://localhost:9292/users/2")
      .then((res) => res.json())
      .then((user) => {
        setUser(user.username);
        console.log(user);
      });
  }, []);

  function handleDataState(data, nextConvoId) {
    setData([data, nextConvoId]);
  }

  return (
    <>
      <div className="screentext">
        {data ? (
          <ScreenText
            user={user}
            data={data}
            handleDataState={handleDataState}
            houseState={houseState}
          />
        ) : (
          <h2>Loading...</h2>
        )}
      </div>
    </>
  );
}

export default GameScreen;
