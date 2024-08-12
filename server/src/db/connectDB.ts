import mongoose from "mongoose";

const connectDB = async () => {
  console.log("Connecting to mongodb");
  try {
    const mongoURI =
      process.env.MONGO_URI || "mongodb://localhost:27017/your_database_name";
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as mongoose.ConnectOptions);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.error("Error connecting to mongodb", err);
    throw err;
  }
};

export default connectDB;
