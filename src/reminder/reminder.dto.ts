import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class Reminder {
  @Field()
  private readonly uuid: string;

  @Field()
  private readonly description: string;

  @Field()
  private readonly maturityTime: Date;

  @Field()
  private readonly alertTime: Date;
}
