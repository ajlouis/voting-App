const Mongodb = require('mongodb')

const uri = 'mongodb+srv://mysuperuser:superuser1@cluster0-xszw4.mongodb.net/voting-platform?retryWrites=true&w=majority'

module.exports = () => {
    const client = new Mongodb.MongoClient(uri, {useUnifiedTopology: true})
    return client.connect()
}
