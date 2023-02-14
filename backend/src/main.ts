import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { enableCorsWhitelist } from './util/cors/enable-cors-whitelist';
import { WeatherModule } from './weather/weather.module';

async function bootstrap() {
  try {
    const app = await NestFactory.create(AppModule, {
      logger: ['warn', 'error', 'log', 'debug', 'verbose'],
    });

    const config = new DocumentBuilder()
      .setTitle('Ordina Weather App Backend')
      .setDescription(
        'This is the backend for the Ordina weather app assignment.',
      )
      .setVersion('0.1')
      .build();

    const documentSwagger = SwaggerModule.createDocument(app, config, {
      include: [WeatherModule],
    });

    SwaggerModule.setup('api', app, documentSwagger);

    const whitelist = [process.env.WEATHER_APP_URL];

    enableCorsWhitelist(app, whitelist);

    const configService = app.get(ConfigService);

    await app.listen(configService.get('BACKEND_PORT'));
    Logger.log(
      `🚀 Backend is running on port: ${configService.get('BACKEND_PORT')}`,
    );
  } catch (err) {
    Logger.error(`Failed to initialize, due to ${err}, backend exiting...`);
    process.exit(1);
  }
}

bootstrap();
