import axios, { AxiosResponse } from "axios";
import { WeatherData } from "../models";

const weatherApi = axios.create({
  baseURL: "http://localhost:5555/weather",
});

const handleError = (error: any, location: string): never => {
  if (error.response?.status === 404) {
    throw new Error(`No weather data found for location: ${location}`);
  }
  console.error(error);
  throw new Error("An unexpected error occurred while fetching weather data.");
};

/**
 * Fetch the weather data for the specified location.
 *
 * @param location The location to fetch the weather data for.
 *
 * @throws Error If no weather data is found for the location.
 * @throws Error If an unexpected error occurs while fetching the weather data.
 *
 * @returns The weather data for the specified location.
 */
const fetchWeather = async (location: string): Promise<WeatherData> => {
  try {
    const response: AxiosResponse<{ data: WeatherData }> = await weatherApi.get(
      "",
      {
        params: {
          location,
        },
      }
    );

    return response.data.data;
  } catch (error: any) {
    return handleError(error, location);
  }
};

export default fetchWeather;
