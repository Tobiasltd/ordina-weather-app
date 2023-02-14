import { WeatherService } from './weather.service';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { of, throwError } from 'rxjs';
import { ErrorHandler } from '../util/error-handlers/error-handler';
import { WeatherData } from '../models/weather-data';
import { Test, TestingModule } from '@nestjs/testing';

describe('WeatherService', () => {
  let weatherService: WeatherService;
  let errorHandler: ErrorHandler;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        WeatherService,
        {
          provide: ErrorHandler,
          useValue: { handleError: jest.fn() },
        },
        {
          provide: HttpService,
          useValue: { get: jest.fn() },
        },
      ],
    }).compile();

    weatherService = module.get<WeatherService>(WeatherService);
    errorHandler = module.get<ErrorHandler>(ErrorHandler);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(weatherService).toBeDefined();
  });

  describe('getWeather', () => {
    it('should call the OpenWeatherMap API with the correct parameters and return the response data', async () => {
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
      jest.spyOn(httpService, 'get').mockImplementation(() =>
        of({
          data: weatherData,
        } as AxiosResponse<WeatherData>),
      );

      const result = await weatherService.getWeather('Heerenveen');

      expect(httpService.get).toHaveBeenCalledWith('weather', {
        params: {
          q: 'Heerenveen',
        },
      });
      expect(result).toEqual(weatherData);
    });

    it('should call the error handler if there is an error in the API call', async () => {
      const error = new Error('Error getting weather data');
      jest
        .spyOn(httpService, 'get')
        .mockImplementation(() => throwError(() => error));

      try {
        await weatherService.getWeather('Friesland');
      } catch (err) {
        expect(errorHandler.handleError).toHaveBeenCalledWith(error);
      }
    });
  });
});
