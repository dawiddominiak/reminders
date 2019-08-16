import { Query, Resolver } from "@nestjs/graphql";
import { Reminder } from "@reminder/reminder.dto";

@Resolver("Reminder")
export class ReminderResolver {
  @Query((returns) => [Reminder], { name: "reminders", nullable: true })
  public getReminders(): Reminder[] {
    const fixtureReminder = new Reminder();

    Object.assign(fixtureReminder, {
      uuid: "test uuid",
      description: "test reminder",
      maturityTime: "maturity time",
      alertTime: "alertTime",
    });

    return [
      fixtureReminder,
    ];
  }
}
