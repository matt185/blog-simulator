import { isAuth } from "../middleware/isAuth";
import { MyContext } from "src/types";
import { Arg, Ctx, Field, InputType, Int, Mutation, Query, Resolver, UseMiddleware } from "type-graphql";
import { Post } from "./../entity/Post"
// import { User } from "../entity/User";


@InputType()
class PostInput {
    @Field()
    title: string
    @Field()
    text: string
}

@Resolver(Post)
export class PostResolver {
    @Query(() => [Post])
    async posts(): Promise<Post[] | undefined> {
        return Post.find({ relations: ["creator"] })
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
