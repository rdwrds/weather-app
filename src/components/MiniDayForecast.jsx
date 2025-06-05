import { useState } from "react";
import useWindowDimensions from "../useWindowDimensions";

const MiniDayForecast = ({ day, getDecal }) => {
  const { height, width } = useWindowDimensions();

  let size;
  if (width < 600) {
    size = 20;
  } else {
    size = 32;
  }

  return (
    <div className="my-auto h-fit w-fit rounded-lg bg-cyan-800/55 p-2.5 text-center drop-shadow-md/35">
      {getDecal(day.shortForecast, size)}
      <p className="text-md">
        {day.temperature}
        {"\u00B0"}
      </p>
    </div>
  );
};
export default MiniDayForecast;
