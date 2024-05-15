import React, { useEffect, useState } from "react";
import getCurrentDate from "../../../../utils/getCurrentDate";
import SearchBar from "../search";

interface WeatherData {
    name: string
    sys: {
      country: string
    }
    main: {
      temp: number
      humidity: number
    }
    weather: Array<{
      description: string
    }>
    wind: {
      speed: number
    }
  }
  
const Weather = () => {
  const [search, setSearch] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<null>(null);
  const [weatherData, setWeatherData] = useState<any>(null);

  const fetchWeatherData = async (param: string):  Promise<WeatherData | null> => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=7b607ea7f7eb29daaee6e33ac3d5d6c2`
      );
      const data = await res.json();
      if (data) {
        setWeatherData(data);
        setLoading(false);
      }
    } catch (error: any) {
      console.log(error);
      setErrorMsg(error.message);
      setLoading(false);
    }
    return null
  };

  useEffect(
    () => {
      fetchWeatherData("pehuajo");
    }, //eslint-disable-next-line
    []
  );

  const handleSearch = async () => {
    fetchWeatherData(search);
  };

  if (errorMsg !== null) {
    return <div>An error ocurred!</div>;
  }
  console.log(weatherData);

  return (
    <div className="weather-app max-w-3xl mx-auto p-6 rounded-lg shadow-md shadow-indigo-600  bg-white">
      <SearchBar
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {loading ? (
        <div className="text-center text-4xl font-semibold">Loading...</div>
      ) : (
        <div>
          <div className="weather-info text-center">
            <h1 className="text-3xl font-bold mb-2">
              {weatherData?.name},
              <span className="text-gray-500">{weatherData?.sys?.country}</span>
            </h1>
            <span className="text-gray-500">{getCurrentDate()}</span>
            <div className="temperature text-6xl font-bold mb-4">
              {Math.round(weatherData?.main?.temp - 275.15).toFixed(2)} °C
            </div>
            <div className="description text-lg mb-6">
              {weatherData?.weather?.map((item: any, index: any) => (
                <p key={index}>{item.description}</p>
              ))}
            </div>
          </div>

          <div className="additional-details grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-4 rounded-md flex items-center justify-between">
              <p className="text-gray-500 font-semibold">Wind speed</p>
              <p className="text-lg font-bold">
                {Math.round(weatherData?.wind?.speed * 3.6).toFixed(2)} km/h
              </p>
            </div>
            <div className="bg-gray-100 p-4 rounded-md flex items-center justify-between">
              <p className="text-gray-500 font-semibold">Humidity</p>
              <p className="text-lg font-bold">
                {Math.round(weatherData?.main?.humidity).toFixed(2)} %
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
