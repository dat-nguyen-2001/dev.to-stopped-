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

    @OneToMany(() => Comment, comment => comment.post_id)
    comments: Comment;

    @Column({
        nullable: false,
        default: 0
    })
    reactions: number;

    @Column({nullable: false})
    user_id: number;
}