import { Post } from './post.entity';
import { Comment } from './comment.entity';
export declare class User {
    id: number;
    username: string;
    email: string;
    password: string;
    reading_list: Post;
    posts: Post;
    comments: Comment;
}
