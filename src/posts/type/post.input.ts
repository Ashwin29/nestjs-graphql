import { Field, InputType } from '@nestjs/graphql';
import { IsDateString, IsNotEmpty } from 'class-validator';

/**
 * Post Input is input shape for the graphql mutations.
 */
@InputType()
export class PostInput {
  @IsNotEmpty()
  @Field()
  title: string;

  @IsNotEmpty()
  @Field()
  description: string;

  @Field({ nullable: true })
  comments?: string;

  @IsNotEmpty()
  @Field()
  @IsDateString()
  createdDate: string;

  @IsNotEmpty()
  @Field()
  @IsDateString()
  updatedDate: string;

  @Field({ nullable: true })
  hearts?: number;
}
