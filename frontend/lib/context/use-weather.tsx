import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useFetchWeather } from "../hooks";
import { WeatherData } from "../models";

type ContextValueType = {
  weather: WeatherData | null;
  setWeather: (weather: WeatherData) => void;
  location: string;
  setLocation: (location: string) => void;
  isLoading: boolean;
  error: any;
};

type WeatherProviderProps = PropsWithChildren<{}>;

const WeatherContext = createContext<ContextValueType | null>(null);

/**
 * WeatherProvider is a context provider that provides the global state of the weather.
 *
 * @param children The components to be rendered inside the context provider. All children will have access to the global state. This can include other context providers.
 */

export function WeatherProvider({ children }: WeatherProviderProps) {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);

  const { data, isLoading, error } = useFetchWeather(location);

  useEffect(() => {
    if (!isLoading && !error) {
      setWeather(data);
    }
  }, [data, isLoading, error]);

  const contextValue = useMemo(
    () => ({
      weather,
      setWeather,
      location,
      setLocation,
      isLoading,
      error,
    }),
    [weather, setWeather, location, setLocation, isLoading, error]
  );

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  );
}

/**
 * useWeather is a hook that provides the global state of the weather.
 */

export default function useWeather() {
  const context = useContext(WeatherContext);
  if (context === null) throw new Error("Missing root <WeatherProvider />");

  return context;
}
