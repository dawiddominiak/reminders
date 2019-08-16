import { DatabaseModule } from "@database/database.module";
import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { ReminderModule } from "@reminder/reminder.module";
import { CommonModule } from './common/common.module';
import * as config from "config";


const graphQlTypePaths: string = config.get<string>("app.graphQl.typePaths");

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: graphQlTypePaths,
    }),
    ReminderModule,
    DatabaseModule,
    CommonModule,
  ],
})
export class AppModule {}
