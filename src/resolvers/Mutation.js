import uuidv4 from 'uuid/v4'

const Mutation = {

    addPost(parent, { data }, ctx, info) {

        if (!users.some((user) => user.id === data.author)) {
            throw new Error(`The user mentioned with this post doesn't exists: ID: ${data.author}`)
        }

        if (posts.some((post) => post.title === data.title)) {
            throw new Error(`A post with title: ${data.title} already exists. Please choose a diffferent title.`)
        }

        const newPost =
        {
            id: uuidv4(),
            ...data
        }
        posts.push(newPost)

        return newPost
    }

}

export { Mutation as default }