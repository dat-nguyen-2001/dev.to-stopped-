import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
// import { Comment } from "src/typeorm/comment.entity";
// import { Post } from "src/typeorm/post.entity";

export class CreatePostDto {
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @IsNotEmpty()
  @MinLength(8)
  content: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}