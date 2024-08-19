import mongoose from "mongoose";
import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";

export const db = await mongoose.connect(
  "mongodb://mongo:HsAOgwiksRxbxaEMubwZOkcnVbNKeGjM@monorail.proxy.rlwy.net:46732"
);

export const adapter = new MongodbAdapter(
  mongoose.connection.collection("session"),
  mongoose.connection.collection("users")
);
