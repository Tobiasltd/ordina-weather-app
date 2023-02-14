import { ConfigService } from '@nestjs/config';
import { OpenWeatherMapService } from './openweathermap.service';

describe('OpenWeatherMapService', () => {
  let openWeatherMapService: OpenWeatherMapService;
  let configService: ConfigService;

  beforeEach(() => {
    configService = new ConfigService({
      OPEN_WEATHER_MAP_BASE_URL: 'https://api.openweathermap.org/data/2.5',
      OPEN_WEATHER_MAP_API_KEY: 'api-key',
    });
    openWeatherMapService = new OpenWeatherMapService(configService);
  });

  describe('createHttpOptions', () => {
    it('should return the correct HttpModuleOptions', () => {
      const result = openWeatherMapService.createHttpOptions();

      expect(result).toEqual({
        baseURL: 'https://api.openweathermap.org/data/2.5',
        params: {
          appid: 'api-key',
          units: 'metric',
        },
        headers: {
          'Content-Type': 'application/json',
        },
      });
    });
  });
});
