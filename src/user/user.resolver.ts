import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UserInput } from './type/create-user.input';
import { UserType } from './type/user.type';
import { UserService } from './user.service';

/**
 * UserResolver takes care of the graphql queries and mutation calls.
 */
@Resolver((of) => UserType)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Mutation((returns) => UserType)
  createUser(@Args('createUser') createUserInput: UserInput) {
    return this.userService.createUser(createUserInput);
  }

  @Query((returns) => [UserType])
  getAllUsers() {
    return this.userService.getAllUsers();
  }

  @Query((returns) => UserType)
  getUserById(@Args('id') id: number) {
    return this.userService.getUserById(id);
  }
}
