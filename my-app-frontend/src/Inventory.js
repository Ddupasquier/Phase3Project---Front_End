import React from "react";
import * as BsIcons from "react-icons/bs";
import * as GiIcons from "react-icons/gi";

// EXAMPLE ICON IMPORT
// import * as MdIcons from "react-icons/md";
// MdIcons.MdOutlineLocalMovies

function Inventory() {
  return (
    <div className="items">
      <BsIcons.BsKey />
      <GiIcons.GiFlashlight />
      <GiIcons.GiMonclerJacket />
      <GiIcons.GiMonclerJacket />
      <GiIcons.GiMonclerJacket />
    </div>
  );
}

export default Inventory;
