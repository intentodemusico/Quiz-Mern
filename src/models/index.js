import mongoose from "mongoose";

import User from "./user";
import Message from "./message";

mongoose.set("useUnifiedTopology", true);
const connectDb = () => {
  return mongoose.connect(
    "mongodb+srv://eseuser:lapass@cluster0-c282b.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true }
  );
};

const models = { User, Message };

export { connectDb };

export default models;
