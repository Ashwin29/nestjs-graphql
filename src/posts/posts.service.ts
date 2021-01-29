import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { PostInput } from './type/post.input';

/**
 * PostService takes care of business logic operation related to posts module.
 */
@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postRepository: Repository<Post>,
  ) {}

  /**
   * Fetches all the posts from the database.
   */
  async getAllPosts(): Promise<Post[]> {
    // Create a query builder for the table post.
    const query = this.postRepository.createQueryBuilder('post');

    // Get all the posts.
    const posts: Post[] = await query.getMany();

    // Return.
    return posts;
  }

  /**
   * Fetch the post for the specified id.
   * @param id Id of the post to be retrieved.
   */
  async getPost(id: number): Promise<Post> {
    return await this.postRepository.findOne({ id });
  }

  /**
   * Creates post for the input provided.
   * @param createPostInput Post Input for the create post mutation.
   */
  async createPost(createPostInput: PostInput): Promise<Post> {
    // Destructure the create post input.
    const { createdDate, description, title, updatedDate } = createPostInput;

    // Create the post.
    const post = this.postRepository.create({
      title,
      createdDate,
      updatedDate,
      description,
    });

    // Save the post.
    return await this.postRepository.save(post);
  }
}
