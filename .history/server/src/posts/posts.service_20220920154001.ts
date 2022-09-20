import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/typeorm';
import { CreateUserDto } from 'src/users/users.dtos';
import { Repository } from 'typeorm';
import { CreatePostDto } from './posts.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private readonly postRepository: Repository<Post>,
  ) {}
      
  createUser(createPostDto: CreatePostDto) {
    const newUser = this.userRepository.create(createPostDto);
    return this.userRepository.save(newUser);
  }
}