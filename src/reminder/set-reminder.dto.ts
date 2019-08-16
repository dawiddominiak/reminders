import { Field, InputType } from "type-graphql";

@InputType()
export class SetReminder {
  @Field()
  private readonly description: string;

  @Field()
  private readonly maturityTime: Date;

  @Field()
  private readonly alertTime: Date;
}
