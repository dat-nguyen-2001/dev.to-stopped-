import { Column, Entity, PrimaryGeneratedColumn, OneToMany, ManyToMany, OneToOne, ManyToOne } from 'typeorm';

@Entity()
export class Comment {
    @PrimaryGeneratedColumn({
        type: 'bigint',
    })
    id: number;

    @Column({
        nullable: false,
        default: '',
    })
    content: string;

    @Column({
        nullable: false,
        default: 0
    })
    reactions: number;

    @Column({
        nullable: false
    })
    post_id: number;

    @Column({
        nullable: false
    })
    user_id: number
}