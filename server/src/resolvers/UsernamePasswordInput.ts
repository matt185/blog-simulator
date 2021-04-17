import { Field, InputType } from "type-graphql";



@InputType()
export class UsernamePasswordInput {
    @Field()
    username: string;
    @Field()
    email: string;
    @Field()
    password: string;
    @Field()
    phone: string;
    @Field()
    role: string;
}
