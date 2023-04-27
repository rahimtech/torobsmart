import mongoose from "mongoose";

const connectMongo = async () => {
  try {
    console.log("✔ Connecting to MongoDB server at: ", process.env.MONGO_URI);
    const { connection } = await mongoose.connect(process.env.MONGO_URI);

    if (connection.readyState == 1) {
      return Promise.resolve(true);
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectMongo;
