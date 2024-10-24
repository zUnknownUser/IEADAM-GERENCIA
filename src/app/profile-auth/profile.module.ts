import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { User } from './user.entity';

/**
 * ProfileModule is responsible for managing the profile-related features
 * within the application. It imports the necessary TypeOrmModule for
 * interacting with the User entity, provides the ProfileService for
 * handling business logic, and registers the ProfileController for
 * handling HTTP requests.
 *
 * @module ProfileModule
 * @imports TypeOrmModule - For interacting with the User entity.
 * @providers ProfileService - Service for profile-related business logic.
 * @controllers ProfileController - Controller for handling profile-related HTTP requests.
 */
@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [ProfileService],
  controllers: [ProfileController],
})
export class ProfileModule {}