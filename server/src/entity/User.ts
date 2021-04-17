import { Field, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Post } from "./Post"

@ObjectType()
@Entity()
export class User extends BaseEntity {

    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({ unique: true })
    username!: string;

    @Field()
    @Column({ unique: true })
    email!: string

    @Field()
    @Column({ unique: true })
    phone!: string

    @Column()
    password!: string;

    @Field()
    @Column()
    role!: string

    @Field()
    @Column({ default: false })
    newAccount!: Boolean

    @OneToMany(() => Post, post => post.creator)
    posts: Post[]

    @Field(() => String)
    @CreateDateColumn()
    createdAt: Date

    @Field(() => String)
    @UpdateDateColumn()
    updatedAt: Date

}