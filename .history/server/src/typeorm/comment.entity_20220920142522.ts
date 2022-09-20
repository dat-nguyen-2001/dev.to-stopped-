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
        default: '',
    })
    password: string;

    @Column({
        nullable: false,
        default: []
    })
    readingList: [];

    @Column({
        nullable: false,
        default: []
    })
    posts: []

    @Column()
    comments: string[]
}