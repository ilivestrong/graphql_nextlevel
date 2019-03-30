import { GraphQLServer } from 'graphql-yoga'

import db from './src/db'
import Mutation from './src/resolvers/Mutation.js'
import Query from './src/resolvers/Query.js'
import User from './src/resolvers/User.js'
import Post from './src/resolvers/Post.js'

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Mutation,
        Query,
        User,
        Post
    },
    context: {
        db
    }
})
.start(() => console.log('The GraphQL server is up and running!'))