import MiniDayForecast from "./MiniDayForecast";

const WeekForecast = ({ periods, getDecal }) => {
  // const {
  //   detailedForecast,
  //   isDaytime,
  //   name,
  //   probabilityOfPrecipitation,
  //   value,
  //   shortForecast,
  //   temperature,
  //   temperatureUnit,
  //   windDirection,
  //   windSpeed,
  // } = JSONdata;

  //[start, finish)
  //we already get today, so set up the forecast for
  //tonight/the rest of the week
  const weekOne = periods.slice(1, 8);

  //https://lucide.dev/icons/categories#weather

  return (
    <div className="flex w-full flex-row justify-center gap-1 px-2 lg:col-span-4 lg:row-span-2 lg:row-start-3 lg:m-0 lg:px-0">
      {weekOne.map((day) => {
        return (
          //                                                                ew
          <MiniDayForecast day={day} getDecal={getDecal} />
        );
      })}
    </div>
  );
};
export default WeekForecast;
