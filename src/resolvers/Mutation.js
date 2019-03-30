import uuidv4 from 'uuid/v4'

const Mutation = {

    addPost(parent, { data }, {db, pubsub}, info) {
        
        if (!db.users.some((user) => user.id === data.author)) {
            throw new Error(`The user mentioned with this post doesn't exists: ID: ${data.author}`)
        }

        if (db.posts.some((post) => post.title === data.title)) {
            throw new Error(`A post with title: ${data.title} already exists. Please choose a diffferent title.`)
        }

        const newPost =
        {
            id: uuidv4(),
            ...data
        }
        db.posts.push(newPost)

        console.log(`db.users: ${db.users}`)
        console.log(`data.author: ${data.author}`)
        const postuser = db.users.find((user) => user.id == data.author)

        console.log(postuser)
        pubsub.publish('getpostuser', { getNewPostAuthor: postuser})
        

        return newPost
    }

}

export { Mutation as default }