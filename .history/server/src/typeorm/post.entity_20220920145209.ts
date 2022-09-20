import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
@Entity()
export class Post {
    @PrimaryGeneratedColumn({
        type: 'bigint',
        name: 'user_id',
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

    @Column()
    comments: string;

    @Column({
        nullable: false,
        default: 0
    })
    reactions: number;

    // @Column({
    //     nullable: false
    // })
    // user_id: number;

    @Column() 
    posted_date: string
}