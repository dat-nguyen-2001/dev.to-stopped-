import { User } from "./user.entity";
import { Post } from "./post.entity";
import { Comment } from "./comment.entity";

const entities = {[User, Post, Comment]};

export {User, Post, Comment};
export default entities;