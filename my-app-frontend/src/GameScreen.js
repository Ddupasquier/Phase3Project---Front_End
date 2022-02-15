import React, { useEffect, useState } from "react";
import Inventory from "./Inventory";
import Map from "./Map";
import ScreenText from "./ScreenText";


function GameScreen() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch("localhost/9292")
    .then((res) => res.json())
    .then((data) => {
      setData(data)
    })
  }, [])

  return (
    <>
      <div className="screentext">
        <ScreenText data={data}/>
      </div>
      <p>
  <a class="btn btn-primary map" data-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Map</a>
  <button class="btn btn-primary inventory" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">Inventory</button>
  
</p>
<div class="row">
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample1">
      <div class="card cardbg">
        <Map />
      </div>
    </div>
  </div>
  <div class="col">
    <div class="collapse multi-collapse" id="multiCollapseExample2">
      <div class="card card-body cardbg">
        <Inventory data={data}/>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default GameScreen;
