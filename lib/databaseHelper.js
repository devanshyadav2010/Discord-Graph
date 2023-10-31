const { MongoClient } = require('mongodb'); // or 'pro.db'

// Code for interacting with MongoDB or pro.db to store stats
async function storeStats(category, data) {
    const uri = 'your_mongodb_uri'; // Replace this with your actual MongoDB URI
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const database = client.db('your_database_name');
        const collection = database.collection('your_collection_name');
        await collection.insertOne({ category, data, timestamp: new Date() });
    } catch (error) {
        console.log('Error storing data:', error);
    } finally {
        await client.close();
    }
}

module.exports = { storeStats };
