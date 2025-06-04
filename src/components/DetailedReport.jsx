import MiniDayForecast from "./MiniDayForecast";
import {
  Bubbles,
  CloudFog,
  CloudHail,
  CloudSnow,
  CloudSun,
  CloudSunRain,
  Cloudy,
  Sun,
  Waves,
  Haze,
  CloudRain,
  CloudRainWindIcon,
  CloudLightning,
} from "lucide-react";
//show the next 3 nights
const DetailedReport = ({ gridData, forecastData }) => {
  const dayTwo = forecastData[1];
  const dayThree = forecastData[2];
  const dayFour = forecastData[3];

  const getDecal = (forecast, size) => {
    const cleaned_forecast = forecast.toLowerCase();

    let icon = <Bubbles size={size} />;

    //i could refactor all of these yandere simulator if's to be more pragmatic
    //but if it aint broke, dont prematurely optimize it
    if (
      cleaned_forecast.includes("sunny") ||
      cleaned_forecast.includes("clear")
    ) {
      icon = <Sun size={size} />;
    }

    if (
      cleaned_forecast.includes("sunny") &&
      cleaned_forecast.includes("cloudy")
    ) {
      icon = <CloudSun size={size} />;
    }

    if (
      cleaned_forecast.includes("mostly cloudy") ||
      cleaned_forecast.includes("partly cloudy") ||
      cleaned_forecast.includes("overcast")
    ) {
      icon = <Cloudy size={size} />;
    }

    if (cleaned_forecast.includes("fog")) {
      icon = <CloudFog size={size} />;
    }

    if (cleaned_forecast.includes("snow")) {
      icon = <CloudSnow size={size} />;
    }

    if (
      cleaned_forecast.includes("thunder") ||
      cleaned_forecast.includes("storm")
    ) {
      icon = <CloudLightning size={size} />;
    }

    if (
      cleaned_forecast.includes("fog") &&
      cleaned_forecast.includes("sunny")
    ) {
      icon = <Haze size={size} />;
    }

    if (
      cleaned_forecast.includes("sunny") &&
      cleaned_forecast.includes("rain")
    ) {
      icon = <CloudSunRain size={size} />;
    }

    if (cleaned_forecast.includes("hail")) {
      icon = <CloudHail size={size} />;
    }

    if (cleaned_forecast.includes("rain")) {
      icon = <CloudRain size={size} />;
    }

    if (
      cleaned_forecast.includes("windy") ||
      cleaned_forecast.includes("breezy")
    ) {
      icon = <Wind size={size} />;
    }

    if (cleaned_forecast.includes("smoke")) {
      icon = <Waves size={size} />;
    }

    return icon;
  };

  return (
    <section className="my-auto p-1 lg:w-96">
      <div class="flex flex-col gap-2 rounded-md bg-cyan-400 px-2 py-1 drop-shadow-lg/20">
        <div className="my-0 flex flex-row justify-between rounded-md bg-cyan-500 p-1 drop-shadow-lg/50">
          <MiniDayForecast day={dayTwo} getDecal={getDecal} />
          <div className="text-md m-0 my-auto w-3/4 rounded-md bg-cyan-700 px-3 py-3 text-left outline-2 outline-cyan-800 drop-shadow-lg">
            <p>{dayTwo.probabilityOfPrecipitation.value}% Rain</p>
            <p>
              Winds going {dayTwo.windDirection}, at {dayTwo.windSpeed}
            </p>
          </div>
        </div>
        <div className="my-0 flex flex-row justify-between rounded-md bg-cyan-500 p-1 drop-shadow-lg/50">
          <MiniDayForecast day={dayThree} getDecal={getDecal} />
          <div className="text-md m-0 my-auto w-3/4 rounded-md bg-cyan-700 px-3 py-3 text-left outline-2 outline-cyan-800 drop-shadow-lg">
            <p>{dayThree.probabilityOfPrecipitation.value}% Rain</p>
            <p>
              Winds going {dayThree.windDirection}, at {dayThree.windSpeed}
            </p>
          </div>
        </div>
        <div className="my-0 flex flex-row justify-between rounded-md bg-cyan-500 p-1 drop-shadow-lg/50">
          <MiniDayForecast day={dayFour} getDecal={getDecal} />
          <div className="text-md m-0 my-auto w-3/4 rounded-md bg-cyan-700 px-3 py-3 text-left outline-2 outline-cyan-800 drop-shadow-lg">
            <p>{dayFour.probabilityOfPrecipitation.value}% Rain</p>
            <p>
              Winds going {dayFour.windDirection}, at {dayFour.windSpeed}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DetailedReport;
