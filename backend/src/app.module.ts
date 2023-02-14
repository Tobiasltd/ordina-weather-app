import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherModule } from './weather/weather.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        BACKEND_PORT: Joi.string().required(),
        OPEN_WEATHER_MAP_API_KEY: Joi.string().required(),
        OPEN_WEATHER_MAP_BASE_URL: Joi.string().required(),
      }),
    }),
    WeatherModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
