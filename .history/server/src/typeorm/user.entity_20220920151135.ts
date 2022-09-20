import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from './post.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id',
    })
    id: number;

    @Column({
        nullable: false,
        default: '',
    })
    username: string;

    @Column({
        name: 'email_address',
        nullable: false,
        default: '',
    })
    email: string;

    @Column({
        nullable: false,
        default: '',
    })
    password: string;

    @Column({
        t,
        nullable: false,
        array: true,
        default: []
    })
    reading_list: Post[];

    @Column({
        nullable: false,
        array: true,
        default: []
    })
    posts: Post[]

    @Column({
        type: 'text',
        array: true,
    })
    comments: string[]
}