import uuid4 from 'uuid/v4'

const Subscription = {
    randomValue: {
        subscribe(parent, args, {pubsub}, info) {
            setInterval(() => pubsub.publish('randomval', { randomValue: uuid4()}), 2000)
            return pubsub.asyncIterator('randomval')
        }
    },
    getNewPostAuthor : {
        subscribe(parent, args, {pubsub}, info) {
            return pubsub.asyncIterator('getpostuser')
        }
    }
}

export {Subscription as default}