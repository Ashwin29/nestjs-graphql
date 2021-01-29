import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { PostInput } from './type/post.input';
import { PostsService } from './posts.service';
import { PostType } from './type/posts.type';

/**
 * PostResolver takes care of the graphql queries and mutation calls.
 */
@Resolver((of) => PostType)
export class PostResolver {
  constructor(private postService: PostsService) {}

  @Query((returns) => [PostType])
  getAllPosts() {
    return this.postService.getAllPosts()
  }

  @Query((returns) => PostType)
  post(@Args('id') id: number) {
    return this.postService.getPost(id);
  }

  @Mutation((returns) => PostType)
  createPost(@Args('createPostInput') createPostInput: PostInput) {
    return this.postService.createPost(createPostInput);
  }
}
