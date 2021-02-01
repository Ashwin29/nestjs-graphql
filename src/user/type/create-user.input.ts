import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

/**
 * Defines the input shape for the create user row mutation.
 */
@InputType()
export class UserInput {
  @IsNotEmpty()
  @Field()
  username: string;

  @IsNotEmpty()
  @Field()
  password: string;

  @Field({ nullable: true })
  occupation: string;

  @Field({ nullable: true })
  status: string;
}
