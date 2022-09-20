import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/typeorm/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
      
  createUser(createUserDto: create) {
    const newUser = this.userRepository.create(createUserDto);
    return this.userRepository.save(newUser);
  }
      
  findUsersById(id: number) {
    return this.userRepository.findOne(id);
  }
}