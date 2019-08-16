import { EntityRepository, Repository } from "typeorm";

import { Reminder } from "@reminder/reminder.entity";

@EntityRepository(Reminder)
export class ReminderRepository extends Repository<Reminder> {}
