import { Field, ID, ObjectType } from '@nestjs/graphql';

/**
 * Post type for the graphql.
 */
@ObjectType('Post')
export class PostType {
  @Field((type) => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  comments: string;

  @Field()
  hearts: number;

  @Field()
  createdDate: string;

  @Field()
  updatedDate: string;
}
