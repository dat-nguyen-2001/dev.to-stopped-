import { User } from "./user.entity";
import { Post } from "./post.entity";
import { Comment } from "./comment.entity";
declare const entities: (typeof Comment | typeof User | typeof Post)[];
export { User, Post, Comment };
export default entities;
