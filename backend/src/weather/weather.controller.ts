import {
  Controller,
  Get,
  HttpStatus,
  Query,
  HttpException,
  HttpCode,
} from '@nestjs/common';
import { WeatherData } from '../models/weather-data';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async getWeather(@Query('location') location: string): Promise<{
    statusCode: HttpStatus;
    message: string;
    data: WeatherData | undefined;
  }> {
    try {
      const weather = await this.weatherService.getWeather(location);

      return {
        statusCode: HttpStatus.OK,
        message: 'Weather successfully retrieved',
        data: weather,
      };
    } catch (error) {
      throw new HttpException(
        {
          statusCode: error.status,
          message: error.response,
        },
        error.status,
      );
    }
  }
}
