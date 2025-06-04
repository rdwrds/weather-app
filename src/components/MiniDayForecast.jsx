const MiniDayForecast = ({ day, getDecal }) => {
  return (
    <div className="h-fit w-fit rounded-lg bg-cyan-800/55 p-2.5 text-center drop-shadow-md/35">
      {getDecal(day.shortForecast, 30)}
      <p className="text-md">
        {day.temperature}
        {"\u00B0"}
      </p>
    </div>
  );
};
export default MiniDayForecast;
