import { GraphQLServer } from 'graphql-yoga'
import uuidv4 from 'uuid/v4'

const user1 = {
    id: "1", name: 'Deepak Pathak', age: 35, address: 'Bangkok, Thailand'
}

const user2 = {
    id: "2", name: 'Kishore Pathak', age: 31, address: 'New Delhi, India'
}

const posts = [
    { id: '1', title: 'Post 1', body: 'This is Post 1', published: true, author: "1" },
    { id: '2', title: 'Post 2', body: 'This is Post 2', published: true, author: "2" },
    { id: '3', title: 'Post 3', body: 'This is Post 3', published: true, author: "1" },
    { id: '4', title: 'Post 4', body: 'This is Post 4', published: true, author: "1" }
]



const users = [user1, user2]



const resolvers = {
    Query: {
        hello() {
            return 'This is my first query'
        },
        name() {
            return "Deepak Pathak"
        },
        me() {
            return {
                name: 'Deepak Pathak', age: 35, address: 'Bangkok, Thailand'
            }
        },
        add(parent, args, ctx, info) {
            if (args.numbers.length === 0) {
                return 0
            }

            return args.numbers.reduce((acc, curr) => acc + curr)
        },
        users() {
            return users
        },
        posts() {
            return posts
        }
    },
    Mutation: {
        addPost(parent, {data}, ctx, info) {

            if(!users.some((user) => user.id === data.author)) {
                throw new Error(`The user mentioned with this post doesn't exists: ID: ${data.author}`)
            }

            if (posts.some((post) => post.title === data.title)) {
                throw new Error(`A post with title: ${data.title} already exists. Please choose a diffferent title.`)
            }

            const newPost =
            {
                id:  uuidv4(),
                ...data
            }
            posts.push(newPost)

            return newPost
        }
    },
    Post: {
        author(parent, args, ctx, info) {
            return users.find(user => parent.author === user.id)
        }
    },
    User: {
        posts(parent, args, ctx, info) {
            return posts.filter(post => post.author === parent.id)
        }
    }
}

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers
})
    .start(() => console.log('The GraphQL server is up and running!'))