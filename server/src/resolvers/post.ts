import { isAuth } from "../middleware/isAuth";
import { MyContext } from "src/types";
import { Arg, Ctx, Field, InputType, Int, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import { Post } from "./../entity/Post"

@InputType()
class PostInput {
    @Field()
    title: string
    @Field()
    text: string
}

@Resolver()
export class PostResolver {
    @Query(() => [Post])
    async post(): Promise<Post[] | undefined> {
        return Post.find()
    }

    @Query(() => Post)
    async postById(
        @Arg("id", () => Int) id: number
    ): Promise<Post | undefined> {
        return await Post.findOneOrFail(id)
    }

    @Mutation(() => Post)
    @UseMiddleware(isAuth)
    async createPost(
        @Arg("input") input: PostInput,
        @Ctx() { req }: MyContext
    ): Promise<Post> {
        return await Post.create({
            ...input,
            creatorId: req.session.userId
        }).save()
    }

    @Mutation(() => Boolean)
    async deletePost(
        @Arg("id", () => Int) id: number
    ): Promise<Boolean> {
        await Post.delete(id)
        return true
    }

}
