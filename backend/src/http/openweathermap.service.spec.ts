import { HttpModuleOptions } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { OpenWeatherMapService } from './openweathermap.service';

describe('OpenWeatherMapService', () => {
  let openWeatherMapService: OpenWeatherMapService;
  let configService: ConfigService;

  beforeEach(() => {
    configService = new ConfigService();
    jest.spyOn(configService, 'get').mockImplementation((key) => {
      switch (key) {
        case 'OPEN_WEATHER_MAP_BASE_URL':
          return 'http://api.openweathermap.org/data/2.5';
        case 'OPEN_WEATHER_MAP_API_KEY':
          return 'abc123';
        default:
          return undefined;
      }
    });

    openWeatherMapService = new OpenWeatherMapService(configService);
  });

  describe('createHttpOptions', () => {
    it('should return the correct HttpModuleOptions', () => {
      const expectedOptions: HttpModuleOptions = {
        baseURL: 'http://api.openweathermap.org/data/2.5',
        params: {
          apikey: 'abc123',
        },
        headers: {
          'Content-Type': 'application/json',
        },
      };
      expect(openWeatherMapService.createHttpOptions()).toEqual(
        expectedOptions,
      );
    });
  });
});
