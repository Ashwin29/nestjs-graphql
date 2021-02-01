import { Field, ID, ObjectType } from '@nestjs/graphql';

/**
 * Defines the data shape for the user object.
 */
@ObjectType('User')
export class UserType {
  @Field((type) => ID)
  id: string;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field()
  occupation: string;

  @Field()
  status: string;
}
