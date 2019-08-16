import * as config from "config";
import { join } from "path";

import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

const host: string = config.get<string>("database.host");
const port: number = config.get<number>("database.port");
const username: string = config.get<string>("database.username");
const password: string = config.get<string>("database.password");
const database: string = config.get<string>("database.database");
const env: string = config.get<string>("env");

/**
 * Module containing all database realted stuff like settings, migration, etc.
 */
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "postgres",
      host,
      port,
      username,
      password,
      database,
      entities: [join(__dirname, "/../**/*.entity{.ts,.js}")],
      synchronize: env === "DEV",
    })
  ]
})
export class DatabaseModule {}
