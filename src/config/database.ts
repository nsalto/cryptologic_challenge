import { config } from "./environment";
import * as mongoDB from "mongodb";

export const collections: {
  transaction_data?: mongoDB.Collection;
  abi?: mongoDB.Collection;
} = {};

export const connectDB = async () => {
  try {
    const client: mongoDB.MongoClient = new mongoDB.MongoClient(
      config.MONGO_URI
    );
    await client.connect();
    const db: mongoDB.Db = client.db(config.DB_NAME);

    const transaction_collection: mongoDB.Collection = db.collection(
      'transaction_data'
    );

    const abi_collection: mongoDB.Collection = db.collection('ABI')

    collections.transaction_data = transaction_collection;
    collections.abi = abi_collection;

    console.log(
      `Successfully connected to database: ${db.databaseName}`
    );
  } catch (err) {
    console.log("Failed to connect to MongoDB", err);
  }
};