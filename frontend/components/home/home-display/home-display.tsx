import Typography from "@/components/typography/typography";
import { useWeather } from "@/lib/context";

export interface HomeDisplayProps {}

const HomeDisplay: React.FC<HomeDisplayProps> = ({}) => {
  const { weather, isLoading, error } = useWeather();

  if (isLoading) {
    return (
      <Typography
        aria-label="Loading message"
        variant="xl-title"
        className="text-white"
      >
        Loading...
      </Typography>
    );
  }

  if (error) {
    return (
      <Typography
        aria-label="Error message"
        variant="xl-title"
        className="text-white"
      >
        {error.message}
      </Typography>
    );
  }
  return (
    <div className="relative">
      {weather && (
        <>
          <Typography
            aria-label="Location name"
            className="text-white"
            variant="s-title"
          >
            {weather.name}
          </Typography>
          <Typography
            aria-label="Temperature"
            uppercase
            className="text-white my-[2rem]"
            variant="xl-title"
          >
            {weather.main.temp}℃
          </Typography>
          <Typography
            aria-label="Weather description"
            className="text-white"
            variant="s-title"
          >
            {weather.weather[0].main}
          </Typography>
        </>
      )}
    </div>
  );
};

export default HomeDisplay;
