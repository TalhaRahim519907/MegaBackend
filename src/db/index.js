import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONOGDB_URI}/${DB_NAME}`
    );
    console.log(
      `/n MongoDb Connected !! Db Host: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongoDb connection error: ", error);
  }
};
export default connectDb;
