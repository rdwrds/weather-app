import { useState, useEffect, useRef } from "react";
import "./App.css";
import "tailwindcss";
import { WeatherReport, WeekForecast, DetailedReport } from "./components";
import useWindowDimensions from "./useWindowDimensions";
import sample_data from "./data/sample_data";
import Loading from "./components/Loading";

function App() {
  const [latLong, setLatLong] = useState(null);
  const [gridData, setGridData] = useState(null);
  const [forecastURL, setForecastURL] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const zipcode = useRef(98101);

  const [isLoading, setIsLoading] = useState(true);

  //chain to get forecast data:
  //get latLong from zipcode =>
  //get forecastStation from lat/long =>
  //get forecast from forecastStation

  //5-23 TODO: change all fetchers to return the data (not setState)
  //then set state in the effects based on the returned data.
  //from there, assign sample data
  //forecastData -> lawrence
  //gridData -> minneapolis

  /*
  TODO:
  make all these functions return their data instead of setting the data when they're finished
  handle all the errors in the use effects themselves
  from the returned data
  */

  const fetchLatLong = async () => {
    const url = `http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode.current},US&appid=${import.meta.env.VITE_ZIPCODE_KEY}`;
    const options = {
      method: "GET",
      headers: {
        //"x-rapidapi-key": ,
        //"x-rapidapi-host": "us-zip-code-information.p.rapidapi.com",
        header: "Content-Type: application/json",
      },
    };

    try {
      const response = await fetch(url);
      const result = await response.json();

      console.log(result);

      if (response.ok) {
        const { lat, lon } = result;

        setLatLong({ Latitude: lat, Longitude: lon });
      } else {
        if (response.status === 401) {
          console.error("Unauthorized: Invalid API key or credentials (401)");
        } else {
          console.log(`Error: ${response.status}`);
        }
        // Optionally set fallback/default lat/long here
        setLatLong({ Latitude: 45, Longitude: -93 });
      }
    } catch (error) {
      //console.log(error);

      setLatLong({ Latitude: 45, Longitude: -93 });
    }
  };

  useEffect(() => {
    fetchLatLong();
  }, []);

  useEffect(() => {
    const fetchForecastURL = async () => {
      console.log(latLong);
      const { Latitude, Longitude } = latLong;
      const url = `https://api.weather.gov/points/${Latitude},${Longitude}`;

      try {
        const response = await fetch(url);
        const JSONdata = await response.json();

        // Properly destructure the properties
        const { city, state, elevation } =
          JSONdata.properties.relativeLocation.properties;

        const data = {
          city,
          state,
          elevation,
        };

        if (!response.ok) {
          throw new Error("Response Status: " + response.status);
        }

        if (JSONdata.properties.forecast) {
          console.log("using real forecast data");

          setForecastURL(JSONdata.properties.forecast);
          setGridData(data);
        } else {
          console.log("using sample forecast data");
          setGridData(sample_data.minneapolis);
          setForecastURL(
            "https://api.weather.gov/gridpoints/MPX/117,73/forecast",
          );
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (latLong) fetchForecastURL(latLong);
  }, [latLong]);

  useEffect(() => {
    const fetchForecastData = async () => {
      //skip assigning url cuz its in the state
      try {
        const response = await fetch(forecastURL);
        let data = await response.json();
        //daily forecast data (14 day period)

        if (response.ok) {
          setForecastData(data.properties.periods);
          setIsLoading(false);
        } else {
          data = sample_data.lawrence;
          setForecastData(data.properties.periods);
          setIsLoading(false);
          console.log(`resposne status: ${response.status}`);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchForecastData();
  }, [forecastURL]);

  if (!isLoading) {
  }

  var regex = /^(\d{5})?$/;
  return (
    <main class="flex h-fit min-h-screen w-screen flex-col gap-4 bg-linear-to-bl from-cyan-400 to-cyan-700 p-3 text-center text-white lg:px-96">
      <section class="flex justify-between rounded-md bg-cyan-600 p-4 drop-shadow-md">
        <div class="w-10">home</div>
        <h1 class="text-xl text-shadow-md/30">shitty weather</h1>
        <div class="w-10">...</div>
      </section>
      <section class="h-36 rounded-md bg-cyan-600 p-2 drop-shadow-md">
        <h2>welcome to..</h2>
        <h1 class="text-5xl">shitty weather</h1>
        <h1 className="text-md">access to local, realtime weather reports</h1>
        <h1 className="text-md">anytime, anywhere</h1>
      </section>
      <section class="flex flex-col rounded-md bg-cyan-600 p-2 drop-shadow-md/40">
        <div className="flex flex-col gap-3">
          {/* <button type="button" class="debug w-full" onClick={fetchLatLong}>
            button
          </button> */}
          <div className="rounded-sm outline-2 outline-cyan-700 lg:col-span-3">
            <h1 className="text-2xl">check your local forecast</h1>
            <h1 className="text-md">search your location to get started</h1>
          </div>
          <form
            type="submit"
            class="flex flex-row flex-wrap justify-between gap-2"
            onSubmit={(e) => {
              e.preventDefault();

              const valid = regex.test(zipcode.current);
              console.log(zipcode.current);

              console.log(valid);
              if (valid) {
                fetchLatLong();
              } else {
                alert("Please enter a valid 5-digit zipcode.");
              }
            }}
          >
            <label className="content-left w-fit-content rounded-sm px-2 text-left text-lg outline-2 outline-cyan-700">
              enter your zipcode
            </label>
            <input
              type="text"
              name=""
              id=""
              className="flex-end w-1/6 rounded-sm bg-gray-500 text-center outline-2 outline-cyan-700"
              onChange={(e) => {
                e.preventDefault();
                zipcode.current = e.target.value;
              }}
            />
          </form>
        </div>
      </section>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="py-auto flex h-16 flex-col justify-center rounded-md bg-cyan-600 drop-shadow-md/40 lg:w-full">
            <h1 className="text-md">7 day forecast for</h1>
            <h1 className="text-3xl">{gridData ? `${gridData.city}` : ""}</h1>
          </div>
          <div className="flex flex-col justify-between gap-1 rounded-md bg-cyan-600 p-2 drop-shadow-md/50 lg:flex-row">
            <WeatherReport gridData={gridData} forecastData={forecastData} />
            <DetailedReport gridData={gridData} forecastData={forecastData} />
          </div>
        </>
      )}
    </main>
  );
}

export default App;
