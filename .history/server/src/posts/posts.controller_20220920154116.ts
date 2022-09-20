import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreatePostDto } from './posts.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) { }

    @Post('create')
    @UsePipes(ValidationPipe)
    createUsers(@Body() createPostDto: CreatePostDto) {
        return this.postsService.createPost(createPostDto);
    }
}
