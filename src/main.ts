import * as config from "config";

import { AppModule } from "@app/app.module";
import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { ExpressAdapter } from "@nestjs/platform-express";

const PORT: number = config.get<number>("app.port");

async function bootstrap() {
  const app = await NestFactory.create(AppModule, new ExpressAdapter());
  await app.listen(PORT);
}

bootstrap()
  .then(() => {
    Logger.log(`Listening on port ${PORT}.`);
  })
  .catch((error: Error) => {
    // Needed to properly handle promise.
    throw error;
  });
