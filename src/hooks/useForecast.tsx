import axios from "axios";
import { useState } from "react";

const useForecast = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [forecast, setForecast] = useState();

  const fetchCity = async (city: string) => {
    const { data } = await axios.get(
      "http://dataservice.accuweather.com/locations/v1/cities/search",
      {
        params: {
          apikey: process.env.REACT_APP_ACCUWEATHER_API_KEY,
          q: city
        }
      }
    );

    return data;
  };

  const fetchForecastByCityKey = async (cityKey: string) => {
    const { data } = await axios.get(
      `http://dataservice.accuweather.com/currentconditions/v1/${cityKey}`,
      {
        params: {
          apikey: process.env.REACT_APP_ACCUWEATHER_API_KEY
        }
      }
    );

    return data;
  };

  const getForecastByCity = async (cityName: string) => {
    if (!cityName.length) {
      return;
    }
    setIsLoading(true);

    const city = await fetchCity(cityName);
    if (!city.length) {
      setError("There is no such city!");
      return;
    }
    const forecast = await fetchForecastByCityKey(city[0].Key);
    if (!forecast) {
      setError("There is no forecast for the city!");
      return;
    }

    setForecast(forecast[0].WeatherText);
    setIsLoading(false);
  };

  return {
    getForecastByCity,
    isLoading,
    forecast,
    error
  };
};

export default useForecast;
