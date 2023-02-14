import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { enableCorsWhitelist } from './util/cors/enable-cors-whitelist';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const whitelist = [process.env.WEATHER_APP_URL];

  enableCorsWhitelist(app, whitelist);

  await app.listen(5555);
}
bootstrap();
