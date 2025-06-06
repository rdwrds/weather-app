const sample_data = {
  lawrence: {
    "@context": [
      "https://geojson.org/geojson-ld/geojson-context.jsonld",
      {
        "@version": "1.1",
        wx: "https://api.weather.gov/ontology#",
        geo: "http://www.opengis.net/ont/geosparql#",
        unit: "http://codes.wmo.int/common/unit/",
        "@vocab": "https://api.weather.gov/ontology#",
      },
    ],
    type: "Feature",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [-84.0134999, 33.9902],
          [-84.0113, 34.0127],
          [-84.03840000000001, 34.014500000000005],
          [-84.04060000000001, 33.992000000000004],
          [-84.0134999, 33.9902],
        ],
      ],
    },
    properties: {
      units: "us",
      forecastGenerator: "BaselineForecastGenerator",
      generatedAt: "2025-05-24T04:51:22+00:00",
      updateTime: "2025-05-23T23:21:35+00:00",
      validTimes: "2025-05-23T17:00:00+00:00/P7DT11H",
      elevation: {
        unitCode: "wmoUnit:m",
        value: 296.8752,
      },
      periods: [
        {
          number: 1,
          name: "Overnight",
          startTime: "2025-05-24T00:00:00-04:00",
          endTime: "2025-05-24T06:00:00-04:00",
          isDaytime: false,
          temperature: 58,
          temperatureUnit: "F",
          temperatureTrend: "",
          probabilityOfPrecipitation: {
            unitCode: "wmoUnit:percent",
            value: 7,
          },
          windSpeed: "0 mph",
          windDirection: "",
          icon: "https://api.weather.gov/icons/land/night/few?size=medium",
          shortForecast: "Mostly Clear",
          detailedForecast:
            "Mostly clear, with a low around 58. North wind around 0 mph.",
        },
        {
          number: 2,
          name: "Saturday",
          startTime: "2025-05-24T06:00:00-04:00",
          endTime: "2025-05-24T18:00:00-04:00",
          isDaytime: true,
          temperature: 79,
          temperatureUnit: "F",
          temperatureTrend: "",
          probabilityOfPrecipitation: {
            unitCode: "wmoUnit:percent",
            value: 15,
          },
          windSpeed: "0 to 5 mph",
          windDirection: "NE",
          icon: "https://api.weather.gov/icons/land/day/bkn/rain_showers,20?size=medium",
          shortForecast: "Partly Sunny then Slight Chance Rain Showers",
          detailedForecast:
            "A slight chance of rain showers after 5pm. Partly sunny, with a high near 79. Northeast wind 0 to 5 mph. Chance of precipitation is 20%.",
        },
        {
          number: 3,
          name: "Saturday Night",
          startTime: "2025-05-24T18:00:00-04:00",
          endTime: "2025-05-25T06:00:00-04:00",
          isDaytime: false,
          temperature: 61,
          temperatureUnit: "F",
          temperatureTrend: "",
          probabilityOfPrecipitation: {
            unitCode: "wmoUnit:percent",
            value: 47,
          },
          windSpeed: "0 to 5 mph",
          windDirection: "NE",
          icon: "https://api.weather.gov/icons/land/night/tsra_sct,50/tsra_sct,40?size=medium",
          shortForecast: "Chance Showers And Thunderstorms",
          detailedForecast:
            "A slight chance of rain showers between 7pm and 8pm, then a chance of showers and thunderstorms. Mostly cloudy, with a low around 61. Northeast wind 0 to 5 mph. Chance of precipitation is 50%.",
        },
        {
          number: 4,
          name: "Sunday",
          startTime: "2025-05-25T06:00:00-04:00",
          endTime: "2025-05-25T18:00:00-04:00",
          isDaytime: true,
          temperature: 84,
          temperatureUnit: "F",
          temperatureTrend: "",
          probabilityOfPrecipitation: {
            unitCode: "wmoUnit:percent",
            value: 58,
          },
          windSpeed: "5 mph",
          windDirection: "SE",
          icon: "https://api.weather.gov/icons/land/day/tsra_sct,40/tsra_sct,60?size=medium",
          shortForecast:
            "Chance Showers And Thunderstorms then Showers And Thunderstorms Likely",
          detailedForecast:
            "A chance of showers and thunderstorms before 11am, then showers and thunderstorms likely. Partly sunny, with a high near 84. Southeast wind around 5 mph. Chance of precipitation is 60%.",
        },
        {
          number: 5,
          name: "Sunday Night",
          startTime: "2025-05-25T18:00:00-04:00",
          endTime: "2025-05-26T06:00:00-04:00",
          isDaytime: false,
          temperature: 64,
          temperatureUnit: "F",
          temperatureTrend: "",
          probabilityOfPrecipitation: {
            unitCode: "wmoUnit:percent",
            value: 58,
          },
          windSpeed: "0 to 5 mph",
          windDirection: "N",
          icon: "https://api.weather.gov/icons/land/night/tsra_sct,60/tsra_sct,50?size=medium",
          shortForecast: "Showers And Thunderstorms Likely",
          detailedForecast:
            "Showers and thunderstorms likely before 8pm, then a chance of showers and thunderstorms between 8pm and 11pm, then a chance of showers and thunderstorms. Mostly cloudy, with a low around 64. North wind 0 to 5 mph. Chance of precipitation is 60%.",
        },
        {
          number: 6,
          name: "Memorial Day",
          startTime: "2025-05-26T06:00:00-04:00",
          endTime: "2025-05-26T18:00:00-04:00",
          isDaytime: true,
          temperature: 80,
          temperatureUnit: "F",
          temperatureTrend: "",
          probabilityOfPrecipitation: {
            unitCode: "wmoUnit:percent",
            value: 61,
          },
          windSpeed: "5 to 10 mph",
          windDirection: "NE",
          icon: "https://api.weather.gov/icons/land/day/rain_showers,40/tsra_sct,60?size=medium",
          shortForecast: "Showers And Thunderstorms Likely",
          detailedForecast:
            "A chance of rain showers before 2pm, then showers and thunderstorms likely. Mostly cloudy, with a high near 80. Chance of precipitation is 60%.",
        },
        {
          number: 7,
          name: "Monday Night",
          startTime: "2025-05-26T18:00:00-04:00",
          endTime: "2025-05-27T06:00:00-04:00",
          isDaytime: false,
          temperature: 64,
          temperatureUnit: "F",
          temperatureTrend: "",
          probabilityOfPrecipitation: {
            unitCode: "wmoUnit:percent",
            value: 85,
          },
          windSpeed: "5 to 10 mph",
          windDirection: "E",
          icon: "https://api.weather.gov/icons/land/night/tsra,70/tsra,90?size=medium",
          shortForecast: "Showers And Thunderstorms",
          detailedForecast:
            "Showers and thunderstorms. Mostly cloudy, with a low around 64. Chance of precipitation is 90%.",
        },
        {
          number: 8,
          name: "Tuesday",
          startTime: "2025-05-27T06:00:00-04:00",
          endTime: "2025-05-27T18:00:00-04:00",
          isDaytime: true,
          temperature: 76,
          temperatureUnit: "F",
          temperatureTrend: "",
          probabilityOfPrecipitation: {
            unitCode: "wmoUnit:percent",
            value: 85,
          },
          windSpeed: "5 to 10 mph",
          windDirection: "E",
          icon: "https://api.weather.gov/icons/land/day/tsra,90/tsra,80?size=medium",
          shortForecast: "Showers And Thunderstorms",
          detailedForecast:
            "Showers and thunderstorms. Mostly cloudy, with a high near 76. Chance of precipitation is 90%.",
        },
        {
          number: 9,
          name: "Tuesday Night",
          startTime: "2025-05-27T18:00:00-04:00",
          endTime: "2025-05-28T06:00:00-04:00",
          isDaytime: false,
          temperature: 63,
          temperatureUnit: "F",
          temperatureTrend: "",
          probabilityOfPrecipitation: {
            unitCode: "wmoUnit:percent",
            value: 82,
          },
          windSpeed: "5 to 10 mph",
          windDirection: "E",
          icon: "https://api.weather.gov/icons/land/night/tsra,80/tsra,70?size=medium",
          shortForecast: "Showers And Thunderstorms",
          detailedForecast:
            "Showers and thunderstorms. Mostly cloudy, with a low around 63. Chance of precipitation is 80%.",
        },
        {
          number: 10,
          name: "Wednesday",
          startTime: "2025-05-28T06:00:00-04:00",
          endTime: "2025-05-28T18:00:00-04:00",
          isDaytime: true,
          temperature: 81,
          temperatureUnit: "F",
          temperatureTrend: "",
          probabilityOfPrecipitation: {
            unitCode: "wmoUnit:percent",
            value: 49,
          },
          windSpeed: "5 mph",
          windDirection: "SW",
          icon: "https://api.weather.gov/icons/land/day/tsra_sct,40/tsra_sct,50?size=medium",
          shortForecast: "Chance Showers And Thunderstorms",
          detailedForecast:
            "A chance of showers and thunderstorms before 2pm, then a chance of showers and thunderstorms. Mostly cloudy, with a high near 81. Chance of precipitation is 50%.",
        },
        {
          number: 11,
          name: "Wednesday Night",
          startTime: "2025-05-28T18:00:00-04:00",
          endTime: "2025-05-29T06:00:00-04:00",
          isDaytime: false,
          temperature: 64,
          temperatureUnit: "F",
          temperatureTrend: "",
          probabilityOfPrecipitation: {
            unitCode: "wmoUnit:percent",
            value: 49,
          },
          windSpeed: "0 to 5 mph",
          windDirection: "N",
          icon: "https://api.weather.gov/icons/land/night/tsra_hi,50/tsra_hi,30?size=medium",
          shortForecast: "Chance Showers And Thunderstorms",
          detailedForecast:
            "A chance of showers and thunderstorms before 2am, then a chance of showers and thunderstorms. Mostly cloudy, with a low around 64. Chance of precipitation is 50%.",
        },
        {
          number: 12,
          name: "Thursday",
          startTime: "2025-05-29T06:00:00-04:00",
          endTime: "2025-05-29T18:00:00-04:00",
          isDaytime: true,
          temperature: 80,
          temperatureUnit: "F",
          temperatureTrend: "",
          probabilityOfPrecipitation: {
            unitCode: "wmoUnit:percent",
            value: 45,
          },
          windSpeed: "0 to 5 mph",
          windDirection: "NW",
          icon: "https://api.weather.gov/icons/land/day/tsra_hi,40/tsra_hi,50?size=medium",
          shortForecast: "Chance Showers And Thunderstorms",
          detailedForecast:
            "A chance of showers and thunderstorms. Partly sunny, with a high near 80. Chance of precipitation is 50%.",
        },
        {
          number: 13,
          name: "Thursday Night",
          startTime: "2025-05-29T18:00:00-04:00",
          endTime: "2025-05-30T06:00:00-04:00",
          isDaytime: false,
          temperature: 64,
          temperatureUnit: "F",
          temperatureTrend: "",
          probabilityOfPrecipitation: {
            unitCode: "wmoUnit:percent",
            value: 45,
          },
          windSpeed: "0 to 5 mph",
          windDirection: "W",
          icon: "https://api.weather.gov/icons/land/night/tsra_hi,50/tsra_hi,30?size=medium",
          shortForecast: "Chance Showers And Thunderstorms",
          detailedForecast:
            "A chance of showers and thunderstorms before 8pm, then a chance of showers and thunderstorms. Partly cloudy, with a low around 64. Chance of precipitation is 50%.",
        },
        {
          number: 14,
          name: "Friday",
          startTime: "2025-05-30T06:00:00-04:00",
          endTime: "2025-05-30T18:00:00-04:00",
          isDaytime: true,
          temperature: 80,
          temperatureUnit: "F",
          temperatureTrend: "",
          probabilityOfPrecipitation: {
            unitCode: "wmoUnit:percent",
            value: 45,
          },
          windSpeed: "0 to 10 mph",
          windDirection: "W",
          icon: "https://api.weather.gov/icons/land/day/tsra_hi,30/tsra_hi,50?size=medium",
          shortForecast:
            "Slight Chance Showers And Thunderstorms then Chance Showers And Thunderstorms",
          detailedForecast:
            "A slight chance of showers and thunderstorms before 8am, then a chance of showers and thunderstorms between 8am and 2pm, then a chance of showers and thunderstorms. Partly sunny, with a high near 80.",
        },
      ],
    },
  },
  minneapolis: {
    "@context": [
      "https://geojson.org/geojson-ld/geojson-context.jsonld",
      {
        "@version": "1.1",
        wx: "https://api.weather.gov/ontology#",
        s: "https://schema.org/",
        geo: "http://www.opengis.net/ont/geosparql#",
        unit: "http://codes.wmo.int/common/unit/",
        "@vocab": "https://api.weather.gov/ontology#",
        geometry: {
          "@id": "s:GeoCoordinates",
          "@type": "geo:wktLiteral",
        },
        city: "s:addressLocality",
        state: "s:addressRegion",
        distance: {
          "@id": "s:Distance",
          "@type": "s:QuantitativeValue",
        },
        bearing: {
          "@type": "s:QuantitativeValue",
        },
        value: {
          "@id": "s:value",
        },
        unitCode: {
          "@id": "s:unitCode",
          "@type": "@id",
        },
        forecastOffice: {
          "@type": "@id",
        },
        forecastGridData: {
          "@type": "@id",
        },
        publicZone: {
          "@type": "@id",
        },
        county: {
          "@type": "@id",
        },
      },
    ],
    id: "https://api.weather.gov/points/45,-93",
    type: "Feature",
    geometry: {
      type: "Point",
      coordinates: [-93, 45],
    },
    properties: {
      "@id": "https://api.weather.gov/points/45,-93",
      "@type": "wx:Point",
      cwa: "MPX",
      forecastOffice: "https://api.weather.gov/offices/MPX",
      gridId: "MPX",
      gridX: 117,
      gridY: 73,
      forecast: "https://api.weather.gov/gridpoints/MPX/117,73/forecast",
      forecastHourly:
        "https://api.weather.gov/gridpoints/MPX/117,73/forecast/hourly",
      forecastGridData: "https://api.weather.gov/gridpoints/MPX/117,73",
      observationStations:
        "https://api.weather.gov/gridpoints/MPX/117,73/stations",
      relativeLocation: {
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [-92.999174, 45.014439],
        },
        properties: {
          city: "North St. Paul",
          state: "MN",
          distance: {
            unitCode: "wmoUnit:m",
            value: 1606.8585021561,
          },
          bearing: {
            unitCode: "wmoUnit:degree_(angle)",
            value: 182,
          },
        },
      },
      forecastZone: "https://api.weather.gov/zones/forecast/MNZ062",
      county: "https://api.weather.gov/zones/county/MNC123",
      fireWeatherZone: "https://api.weather.gov/zones/fire/MNZ062",
      timeZone: "America/Chicago",
      radarStation: "KMPX",
    },
  },
};

export default sample_data;
