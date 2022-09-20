import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/typeorm';
import { Repository } from 'typeorm';
import { CreatePostDto } from './posts.dto';

@Injectable()
export class PostsService {
    constructor(
        @InjectRepository(Post) private readonly postRepository: Repository<Post>,
    ) { }

    createPost(createPostDto: CreatePostDto) {
        const newPost = this.postRepository.createPost(createPostDto);
        return this.postRepository.save(newPost);
    }
}