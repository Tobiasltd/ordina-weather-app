import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { OpenWeatherMapService } from '../http/openweathermap.service';
import { ErrorHandler } from '../util/error-handlers/error-handler';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        OPEN_WEATHER_MAP_API_KEY: Joi.string().required(),
        OPEN_WEATHER_MAP_BASE_URL: Joi.string().required(),
        BACKEND_PORT: Joi.string().required(),
      }),
    }),
    HttpModule.registerAsync({
      useClass: OpenWeatherMapService,
    }),
  ],
  controllers: [WeatherController],
  providers: [WeatherService, ErrorHandler],
})
export class WeatherModule {}
