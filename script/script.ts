import { MongoClient, MongoClientOptions } from 'mongodb';

const uri: string = 'mongodb+srv://s141765:Mei-2001@cluster0.bvejg9c.mongodb.net/?retryWrites=true&w=majority';

const client = new MongoClient(uri, { useNewUrlParser: true } as MongoClientOptions);

const main = async () => {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
    } catch (e) {
        console.error(e);
    } finally {
        await client.close();
    }
};

main();