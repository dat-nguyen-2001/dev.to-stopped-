import { Comment } from './comment.entity';
export declare class Post {
    id: number;
    title: string;
    content: string;
    tags: string;
    comments: Comment;
    reactions: number;
    user_id: number;
}
