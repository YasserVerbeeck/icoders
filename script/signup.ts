import { MongoClient, MongoClientOptions } from 'mongodb';

const uri: string = 'mongodb+srv://s141765:Mei-2001@cluster0.bvejg9c.mongodb.net/mydatabase?retryWrites=true&w=majority';
const dbName: string = 'iCoders';
const collectionName: string = 'db';

const client = new MongoClient(uri, { useNewUrlParser: true } as MongoClientOptions);

const main = async () => {
  try {
    await client.connect();
    console.log('Verbonden met MongoDB');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // Gebruiker aanmelden
    const user = {
      username: 'admin',
      email: 'gebruiker@test.be',
      password: 'admin'
    };

    const result = await collection.insertOne(user);
    console.log('Gebruiker succesvol aangemeld:', result.insertedId);
  } catch (e) {
    console.error(e);
  } finally {
    await client.close();
  }
};

main();
