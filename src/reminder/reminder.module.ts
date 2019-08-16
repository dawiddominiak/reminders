import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReminderRepository } from "@reminder/reminder.repository";
import { ReminderResolver } from "@reminder/reminder.resolver";
import { ReminderService } from "@reminder/reminder.service";

@Module({
  imports: [TypeOrmModule.forFeature([ReminderRepository])],
  providers: [ReminderResolver, ReminderService],
})
export class ReminderModule {}
