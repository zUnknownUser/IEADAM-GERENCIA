import { Controller, Get, Param } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { User } from './user.entity';

/**
 * Controller for handling profile-related requests.
 */
@Controller('profile')
export class ProfileController {
  /**
   * Constructs a new ProfileController.
   * @param profileService - The service used to manage profiles.
   */
  constructor(private readonly profileService: ProfileService) {}

  /**
   * Retrieves all users.
   * @returns A promise that resolves to an array of users.
   */
  @Get()
  findAllUsers(): Promise<User[]> {
    return this.profileService.findAllUsers();
  }

  /**
   * Retrieves a user by their ID.
   * @param id - The ID of the user to retrieve.
   * @returns A promise that resolves to the user with the specified ID.
   */
  @Get(':id')
  findUserById(@Param('id') id: number): Promise<User> {
    return this.profileService.findUserById(id);
  }
}