const Query = {
    add(parent, args, ctx, info) {
        if (args.numbers.length === 0) {
            return 0
        }

        return args.numbers.reduce((acc, curr) => acc + curr)
    },
    users() {
        return users
    },
    posts(parent, args, {db}, info) {
        console.log(db)
        return db.posts
    }
}

export { Query as default }