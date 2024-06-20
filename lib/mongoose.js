import mongoose from "mongoose";

export function mongooseConnect() {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection.asPromise();
  } else {
    const uri = "mongodb://localhost:27017/deepwall"; //process.env.MONGODB_URI;
    return mongoose.connect(uri);
  }
}