import Typography from "@/components/typography/typography";
import { useWeather } from "@/lib/context";

export interface HomeCardProps {}

const HomeCard: React.FC<HomeCardProps> = ({}) => {
  const { weather, isLoading, error } = useWeather();

  if (isLoading || error) return null;

  return (
    <>
      {weather && (
        <div className="relative bg-white bg-opacity-50 rounded-[12px] px-[4rem] py-[2rem]">
          <div className="flex justify-between">
            <section aria-label="Feels like temperature">
              <Typography className="text-white font-bold" variant="body">
                {weather.main.feels_like}℃
              </Typography>
              <Typography className="text-white" variant="body">
                Feels Like
              </Typography>
            </section>

            <section aria-label="Humidity percentage">
              <Typography className="text-white font-bold" variant="body">
                {weather.main.humidity}%
              </Typography>
              <Typography className="text-white" variant="body">
                Humidity
              </Typography>
            </section>

            <section aria-label="Wind speed in kilometers per hour">
              <Typography className="text-white font-bold" variant="body">
                {weather.wind.speed} KM/H
              </Typography>
              <Typography className="text-white" variant="body">
                Wind Speed
              </Typography>
            </section>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeCard;
