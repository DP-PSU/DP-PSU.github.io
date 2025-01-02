import { MongoClient } from "mongodb";

declare global {
  // Allow TypeScript to recognize the global variable
  let _mongoClientPromise: Promise<MongoClient> | undefined;
}

let client: MongoClient;
let mongoClientPromise: Promise<MongoClient>;

client = new MongoClient(process.env.MONGODB_CONNECTION_URI!, {
  maxPoolSize: 25,
  maxIdleTimeMS: 45000,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 20000,
  waitQueueTimeoutMS: 5000,
});
mongoClientPromise = client.connect();

export default mongoClientPromise;
