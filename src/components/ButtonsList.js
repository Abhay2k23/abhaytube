import React from "react";
import Buttons from "./Buttons";

const ButtonsList = () => {
  return (
    <div className="flex">
      <Buttons name="All" />
      <Buttons name="gaming" />
      <Buttons name="songs" />
      <Buttons name="live" />
    </div>
  );
};

export default ButtonsList;
