import { User } from './../../../.history/server/src/typeorm/user.entity_20220920141636';
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

    @Column()
    comments: [];

    @Column({
        nullable: false,
        default: 0
    })
    reactions: number

    @Column({
        nullable: false
    })
    user: User
}