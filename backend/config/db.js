import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://notes:notes%408919@cluster0.razfbdf.mongodb.net/notes?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MONGODB Connected Successfully");
  } catch (error) {
    console.log("Error", error);
    process.exit(1);
  }
};
