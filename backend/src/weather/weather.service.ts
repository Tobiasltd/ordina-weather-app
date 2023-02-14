import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { lastValueFrom } from 'rxjs';
import { ErrorHandler } from '../util/error-handlers/error-handler';
import { WeatherData } from '../models/weather-data';

@Injectable()
export class WeatherService {
  constructor(
    private errorHandler: ErrorHandler,
    private openWeatherMapService: HttpService,
  ) {}

  /**
   * Gets weather data for a specified location.
   *
   * @param location The location to get weather data for.
   * @returns The weather data for the specified location.
   */

  async getWeather(location: string): Promise<WeatherData | undefined> {
    try {
      const weather = await lastValueFrom(
        this.openWeatherMapService.get<WeatherData>('weather', {
          params: {
            q: location,
          },
        }),
      );
      return weather.data;
    } catch (error) {
      throw this.errorHandler.handleError(error);
    }
  }
}
