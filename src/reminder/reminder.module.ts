import { Module } from "@nestjs/common";
import { ReminderResolver } from "@reminder/reminder.resolver";

@Module({
  providers: [ReminderResolver],
})
export class ReminderModule {}
