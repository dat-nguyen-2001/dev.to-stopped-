import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany } from 'typeorm';
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

    @OneToMany(() => Post, post => post.user_id)
    reading_list: Post

    // @Column({
    //     nullable: false,
    //     array: true,
    //     default: []
    // })
    // posts: Post[]

    // @Column('text', {
    //     array: true, default: {}
    // })
    // comments: string[]
}