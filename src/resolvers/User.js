const User = {
    posts(parent, args, ctx, info) {
        return posts.filter(post => post.author === parent.id)
    }
}

export { User as default }