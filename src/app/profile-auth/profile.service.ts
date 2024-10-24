import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class ProfileService {
  findUserById(id: number): Promise<User> {
    throw new Error('Method not implemented.');
  }
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async findAllUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOneUser(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }
}