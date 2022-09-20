import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Post } from './post.entity';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id',
    })
    id: number;

    @Column({
        nullable: false,
        default: '',
    })
    content: string;

    @Column({
        nullable: false,
    })
    user: User;

    @Column({
        nullable: false,
        default: 0
    })
    reactions: number;

    @Column({
        nullable: false
    })
    post: Post

    @Column() 
    created_date
}