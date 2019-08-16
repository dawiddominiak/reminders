import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reminder {
  @PrimaryGeneratedColumn()
  private readonly uuid: string;

  @Column()
  private readonly description: string;

  @Column({ type: "timestamp" })
  private readonly maturityTime: Date;

  @Column({ type: "timestamp" })
  private readonly alertTime: Date;
}
