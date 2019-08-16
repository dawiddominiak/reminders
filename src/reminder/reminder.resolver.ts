import { Query, Resolver } from "@nestjs/graphql";
import { Reminder } from "@reminder/reminder.dto";
import { ReminderService } from "@reminder/reminder.service";

@Resolver("Reminder")
export class ReminderResolver {
  constructor(private readonly reminderService: ReminderService) {}

  @Query((returns) => [Reminder], { name: "reminders", nullable: true })
  public async getReminders(): Promise<Reminder[]> {
    const reminders = await this.reminderService.list();

    return reminders.map(entity => Object.assign(new Reminder(), entity));
  }
}
