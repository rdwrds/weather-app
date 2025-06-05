import "tailwindcss";
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
  CloudDrizzle,
  CloudLightning,
} from "lucide-react";
import useWindowDimensions from "../useWindowDimensions";
import { useEffect, useReducer, useState, useRef } from "react";
import WeekForecast from "./WeekForecast";
import { createClient } from "pexels";
import DetailedReport from "./DetailedReport";

const WeatherReport = ({ gridData, forecastData }) => {
  const { height, width } = useWindowDimensions();
  const [isLoading, setIsLoading] = useState(true);
  const [sunSize, setSunSize] = useState(96);
  const [query, setQuery] = useState("");
  const [videoURL, setVideoURL] = useState(null);
  const client = createClient(import.meta.env.VITE_PEXELS_KEY);

  const videoRef = useRef();

  //takes shortForecast
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

    if (cleaned_forecast.includes("drizzle")) {
      icon = <CloudDrizzle size={size} />;
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

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  useEffect(() => {
    setSunSize(width > 800 ? 96 : 64);
  }, [height, width]);

  // Update query whenever forecastData changes
  useEffect(() => {
    console.log(forecastData);
    setQuery(forecastData[0].shortForecast);
  }, [forecastData]);

  useEffect(() => {
    setIsLoading(true);
    if (query) {
      client.videos
        .search({ query: query, per_page: 5, orientation: "landscape" })
        .then((photo) => {
          console.log(photo.videos);
          const randomInt = getRandomInt(5);
          console.log(randomInt);

          setVideoURL(photo.videos[randomInt].video_files[0].link);

          setIsLoading(false);
        });
    }
    console.log(videoURL);
  }, [query]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  } else {
    return (
      <section class="relative z-1 my-auto flex h-fit w-full grid-flow-col grid-cols-4 grid-rows-4 flex-col gap-3 p-3 text-shadow-lg/50 lg:grid lg:h-64 lg:w-114 lg:gap-3">
        <video
          muted
          loop={true}
          autoPlay
          playsInline
          ref={videoRef}
          class={
            "absolute top-0 right-0 left-0 -z-1 h-full w-full rounded-xl object-cover p-0 drop-shadow-xl/30 lg:h-full"
          }
        >
          <source src={videoURL} type="video/mp4" />
        </video>
        <h2 class="text-left text-3xl lg:col-span-4 lg:row-span-1">
          {gridData.city}, {gridData.state}
        </h2>
        <div className="flex flex-row items-center gap-2 px-4 lg:col-span-4 lg:col-start-1 lg:row-span-1 lg:row-start-2">
          {getDecal(forecastData[0].shortForecast, sunSize)}
          <div class="mx-3 flex h-min w-full flex-row items-center justify-between gap-3 text-left text-lg lg:gap-1">
            <h1 class="h-min w-fit p-3 text-4xl">
              {forecastData[0].temperature}
              {"\u00B0"}
            </h1>
            <div className="flex flex-col justify-between">
              <p className="lg:text-md text-center text-sm text-shadow-lg/70">
                {forecastData[0].shortForecast}
              </p>
            </div>
          </div>
        </div>
        <WeekForecast periods={forecastData} getDecal={getDecal} />
      </section>
    );
  }
};
export default WeatherReport;
