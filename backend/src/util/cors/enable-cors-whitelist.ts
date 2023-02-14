import {
  INestApplication,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';

export const enableCorsWhitelist = (
  app: INestApplication,
  whitelist: string[],
) => {
  app.enableCors({
    origin: function (origin, callback) {
      if (
        process.env.NODE_ENV !== 'production' ||
        whitelist.indexOf(origin) !== -1
      ) {
        callback(null, true);
      } else {
        Logger.error(`blocked cors for: ${origin}`);
        callback(new UnauthorizedException('Not allowed by CORS'));
      }
    },
  });
};
