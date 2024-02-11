import mongoose from "mongoose";

let isConnected = false;

export const connectToDb = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }
  try {
    const mongoUri = process.env.MONGODB_URI || "";
    await mongoose.connect(mongoUri, {
      dbName: "mawazo",
    });
    isConnected = true;
    console.log("✔ MongoDB is connected");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
};
