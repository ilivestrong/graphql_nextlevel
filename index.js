import { GraphQLServer, PubSub } from 'graphql-yoga'

import db from './src/db'
import Mutation from './src/resolvers/Mutation.js'
import Query from './src/resolvers/Query.js'
import User from './src/resolvers/User.js'
import Post from './src/resolvers/Post.js'
import Subscription from './src/resolvers/Subscription'

const pubsub = new PubSub()

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        Mutation,
        Query,
        Subscription,
        User,
        Post
    },
    context: {
        db,
        pubsub
    }
})
.start(() => console.log('The GraphQL server is up and running!'))