import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
    tags: string[];

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