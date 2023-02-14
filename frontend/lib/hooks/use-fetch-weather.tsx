import { useQuery } from "react-query";
import { WeatherData } from "../models";
import { fetchWeather } from "../services";

interface FetchWeatherResult {
  isLoading: boolean;
  error: any;
  data: WeatherData | null;
}

const CACHE_TIME = 60 * 60 * 1000;

/**
 * A hook that fetches weather data for the given location using the `fetchWeather` service.
 * The results are cached for 1 hour. This cache time can be changed by updating the `CACHE_TIME` constant.
 *
 * @param location - The location to get weather data for
 * @returns An object containing the weather data, a boolean indicating if the data is being fetched, and an error object.
 */

const useFetchWeather = (location: string): FetchWeatherResult => {
  const { data, isLoading, error } = useQuery(
    ["weather", location],
    () => fetchWeather(location),
    {
      enabled: !!location,
      cacheTime: CACHE_TIME,
    }
  );

  return {
    data: data ?? null,
    isLoading,
    error,
  };
};

export default useFetchWeather;
