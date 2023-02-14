import { HttpModuleOptions, HttpModuleOptionsFactory } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class OpenWeatherMapService implements HttpModuleOptionsFactory {
  constructor(private configService: ConfigService) {}

  createHttpOptions(): HttpModuleOptions {
    return {
      baseURL: this.configService.get('OPEN_WEATHER_MAP_BASE_URL'),
      params: {
        appid: this.configService.get('OPEN_WEATHER_MAP_API_KEY'),
        units: 'metric',
      },
      headers: {
        'Content-Type': 'application/json',
      },
    };
  }
}
