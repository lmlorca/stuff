const graphql = require('graphql')
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList
} = graphql
const controller = require('../dependency-injection')

const PostType = new GraphQLObjectType({
    name: 'Post',
    fields: () => ({
        id: { type: GraphQLID },
        text: { type: GraphQLString },
        title: { type: GraphQLString },
        createdOn: { type: GraphQLString }
    })
})

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addPost: {
            type: PostType,
            args: {
                title: { type: GraphQLString },
                text: { type: GraphQLString }
            },
            resolve(parent, args) {
                return controller.createPost({
                    title: args.title,
                    text: args.text
                })
            }
        }
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        post: {
            type: PostType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                // get post by id
                return controller.getPostById({ postId: args.id })
            }
        },
        posts: {
            type: GraphQLList(PostType),
            resolve() {
                // get all posts
                return controller.getPosts()
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})
