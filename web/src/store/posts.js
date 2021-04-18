import graphqlClient from '../apollo';
import gql from "graphql-tag"



export default {
    namespaced: true,
    state: () => ({
        posts: [],

    }),
    mutations: {
        setPosts(state, list) {
            state.posts = list
        }
    },
    actions: {
        async posts({
            commit
        }) {
            const response = await graphqlClient.query({
                query: gql `
                query posts{
                    posts{
                        id
                        title
                        text
                        point
                        updatedAt
                        creatorId
                        creator{
                            username
                        }
                    }
                }
                `
            })
            const posts = response.data.posts
            commit("setPosts", posts)
        }
    },
    getters: {}
}