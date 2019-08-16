import { CRUDService } from "@common/crud.service";
import { Injectable } from "@nestjs/common";
import { Reminder } from "@reminder/reminder.entity";
import { ReminderRepository } from "@reminder/reminder.repository";

@Injectable()
export class ReminderService extends CRUDService<Reminder> {
  constructor(reminderRepository: ReminderRepository) {
    super(reminderRepository);
  }
}
