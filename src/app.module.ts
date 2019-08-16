import * as config from "config";

import { DatabaseModule } from "@database/database.module";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ReminderModule } from "@reminder/reminder.module";

const graphQlTypePaths: string = config.get<string>("app.graphQl.typePaths");

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: graphQlTypePaths,
    }),
    ReminderModule,
    DatabaseModule,
  ],
})
export class AppModule {}
