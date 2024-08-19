
import { MongodbAdapter } from "@lucia-auth/adapter-mongodb";
import { db } from "../db";

const User = mongoose.model()

const adapter = new MongodbAdapter()
