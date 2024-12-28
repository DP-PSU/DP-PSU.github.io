import { MongoClient } from "mongodb";

declare global {
  // Allow TypeScript to recognize the global variable
  let _mongoClientPromise: Promise<MongoClient> | undefined;
}

const uri = process.env.MONGODB_CONNECTION_URI!;
if (!uri) {
  throw new Error(
    "Please define the MONGODB_URI environment variable in .env.local"
  );
}

let client: MongoClient;
let mongoClientPromise: Promise<MongoClient>;
console.log("in mongodb.ts!");

client = new MongoClient(uri, {
	maxPoolSize: 100,
	maxIdleTimeMS: 45000,
	connectTimeoutMS: 10000,
	socketTimeoutMS: 45000,
	waitQueueTimeoutMS: 5000
});
mongoClientPromise = client.connect();

export default mongoClientPromise;
