import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserInput } from './type/create-user.input';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  /**
   * Creates a new user.
   * @param createUserInput values for the create user repository.
   */
  async createUser(createUserInput: UserInput): Promise<User> {
    // Create a new user row.
    const user = this.userRepository.create(createUserInput);

    // Save the user row.
    return await this.userRepository.save(user);
  }

  /**
   * Fetches all the users from the database.
   */
  async getAllUsers(): Promise<User[]> {
    /**
     * Initialize the query builder.
     */
    const query = this.userRepository.createQueryBuilder('user');

    /**
     * Return all the rows.
     */
    return await query.getMany();
  }

  /**
   * Fetch a user row based on its id.
   * @param id id for which the specific user needs to be retrieved.
   */
  async getUserById(id: number): Promise<User> {
    // Find the user row based on its id.
    const user = await this.userRepository.findOne({ id });

    // Return the user row.
    return user;
  }
}
