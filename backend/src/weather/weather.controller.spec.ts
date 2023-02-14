import { Test, TestingModule } from '@nestjs/testing';
import { HttpException, HttpStatus } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { WeatherData } from '../models/weather-data';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { ErrorHandler } from '../util/error-handlers/error-handler';
import { OpenWeatherMapService } from '../http/openweathermap.service';

describe('WeatherController', () => {
  let weatherController: WeatherController;
  let weatherService: WeatherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
        }),
        HttpModule.registerAsync({
          useClass: OpenWeatherMapService,
        }),
      ],
      controllers: [WeatherController],
      providers: [WeatherService, ErrorHandler],
    }).compile();

    weatherService = module.get<WeatherService>(WeatherService);
    weatherController = module.get<WeatherController>(WeatherController);
  });

  describe('getWeather', () => {
    it('should return weather data when successful', async () => {
      const location = 'Heerenveen';
      const weatherData: WeatherData = {
        coord: {
          lon: 5.9333,
          lat: 52.95,
        },
        weather: [
          {
            id: 800,
            main: 'Clear',
            description: 'clear sky',
            icon: '01d',
          },
        ],
        base: 'stations',
        main: {
          temp: 5.51,
          feels_like: 3.01,
          temp_min: 4.43,
          temp_max: 6.73,
          pressure: 1033,
          humidity: 75,
          sea_level: 1033,
          grnd_level: 1033,
        },
        visibility: 10000,
        wind: {
          speed: 3.16,
          deg: 187,
          gust: 4.84,
        },
        clouds: {
          all: 7,
        },
        dt: 1676369698,
        sys: {
          type: 2,
          id: 2004759,
          country: 'NL',
          sunrise: 1676357797,
          sunset: 1676393071,
        },
        timezone: 3600,
        id: 2754668,
        name: 'Gemeente Heerenveen',
        cod: 200,
      };

      jest.spyOn(weatherService, 'getWeather').mockResolvedValue(weatherData);

      const result = await weatherController.getWeather(location);

      expect(result.statusCode).toBe(HttpStatus.OK);
      expect(result.message).toBe('Weather successfully retrieved');
      expect(result.data).toEqual(weatherData);
    });

    it('should throw an error when weatherService fails', async () => {
      const location = 'London';
      const errorResponse = {
        response: 'Failed to get weather',
        status: HttpStatus.INTERNAL_SERVER_ERROR,
      };
      jest.spyOn(weatherService, 'getWeather').mockRejectedValue(errorResponse);

      try {
        await weatherController.getWeather(location);
      } catch (error) {
        expect(error).toBeInstanceOf(HttpException);
        expect(error.getStatus()).toBe(errorResponse.status);
        expect(error.getResponse()).toEqual({
          statusCode: errorResponse.status,
          message: errorResponse.response,
        });
      }
    });
  });
});
