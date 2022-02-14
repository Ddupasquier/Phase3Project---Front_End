import React from "react";
import image from "./LocalAssets/cropped-8-bit-house-map.png"

function Map() {
  return (
    <>
      <img src={image} alt="map" className="mapimg"/>
    </>
  );
}

export default Map;
