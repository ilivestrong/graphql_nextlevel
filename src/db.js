
const posts = [
    { id: '1', title: 'Post 1', body: 'This is Post 1', published: true, author: "1" },
    { id: '2', title: 'Post 2', body: 'This is Post 2', published: true, author: "2" },
    { id: '3', title: 'Post 3', body: 'This is Post 3', published: true, author: "1" },
    { id: '4', title: 'Post 4', body: 'This is Post 4', published: true, author: "1" }
]


const users = [
    {
        id: "1", name: 'Deepak Pathak', age: 35, address: 'Bangkok, Thailand'
    },
    {
        id: "2", name: 'Kishore Pathak', age: 31, address: 'New Delhi, India'
    }
]

const db = { posts, users }

export { db as default }