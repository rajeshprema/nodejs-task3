import { MongoClient } from "mongodb";

const mongoConnectString =
  "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2";

export async function dbConnection() {
    
    const client = new MongoClient(mongoConnectString);

    await client.connect();
    console.log("MongoDB connected succesfully");
    return client
}
export const client = await dbConnection();

