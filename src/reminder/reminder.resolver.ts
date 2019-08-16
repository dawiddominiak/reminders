import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Reminder } from "@reminder/reminder.dto";
import { Reminder as ReminderEntity } from "@reminder/reminder.entity";
import { ReminderService } from "@reminder/reminder.service";
import { SetReminder } from "@reminder/set-reminder.dto";

@Resolver("Reminder")
export class ReminderResolver {
  constructor(private readonly reminderService: ReminderService) {}

  @Query((returns) => [Reminder], { name: "reminders", nullable: true })
  public async getReminders(): Promise<Reminder[]> {
    const reminders = await this.reminderService.list();

    return reminders.map(entity => Object.assign(new Reminder(), entity));
  }

  @Mutation(returns => Reminder)
  public async setReminder(@Args({ name: "details", type: () => SetReminder }) reminder: SetReminder): Promise<Reminder> {
    const entity = Object.assign(new ReminderEntity(), reminder);
    const storedEntity = await this.reminderService.save(entity);
    const dto = Object.assign(new Reminder(), storedEntity);

    return dto;
  }
}
