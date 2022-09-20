import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly postsService: PostsService) {}

    @Post('create')
    @UsePipes(ValidationPipe)
    createUsers(@Body() createPostDto: CreateUserDto) {
        return this.userService.createUser(createUserDto);
    }

}
