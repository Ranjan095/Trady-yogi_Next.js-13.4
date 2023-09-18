/** @format */
require("dotenv").config();
import mongoose from "mongoose";

export default async function connectDB() {
  let connection = await mongoose.connect(process.env.MONGO_URL);
  if (!connection) console.log("Oops DB has not been connected");
  console.log("Db has been connected successfully");
  try {
  } catch (error) {
    console.log(error);
  }
}
