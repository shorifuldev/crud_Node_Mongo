
const {MongoClient, Long} = require('mongodb')
// const mongoClient = require('mongodb').MongoClient

const url = 'mongodb://localhost:27017'
const database = 'iSoftDB'
const client = new MongoClient(url)

async function dbConnection(){
    let result = await client.connect();
    let db = result.db(database);
    return db.collection('items')
}

module.exports = dbConnection;