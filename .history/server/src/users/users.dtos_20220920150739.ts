import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Post } from "src/typeorm";
// import { Comment } from "src/typeorm/comment.entity";
// import { Post } from "src/typeorm/post.entity";

export class CreateUserDto {
  @IsNotEmpty()
  @MinLength(3)
  username: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  reading_list: Post[];
  posts: Post[]
  comments: string[]
}