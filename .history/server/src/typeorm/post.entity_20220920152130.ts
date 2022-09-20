import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Comment } from './comment.entity';
@Entity()
export class Post {
    @PrimaryGeneratedColumn({
        type: 'bigint',
    })
    id: number;

    @Column({
        nullable: false,
        default: '',
    })
    title: string;

    @Column({
        nullable: false,
        default: '',
    })
    content: string;

    @Column({
        nullable: false,
        default: '',
    })
    tags: string;

    @OneToMany(() =>)
    comments: Comment;

    @Column({
        nullable: false,
        default: 0
    })
    reactions: number;

    @Column()
    user_id: number;

    @Column() 
    posted_date: string
}