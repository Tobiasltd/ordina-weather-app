import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import { OpenWeatherMapService } from '../http/openweathermap.service';
import { ErrorHandler } from '../util/error-handlers/error-handler';

@Module({
  imports: [
    HttpModule.registerAsync({
      useClass: OpenWeatherMapService,
    }),
  ],
  controllers: [WeatherController],
  providers: [WeatherService, ErrorHandler],
})
export class WeatherModule {}
