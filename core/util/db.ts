import mongodb from "mongoose";
import { CONNECTION_URI } from "../.env.json";

export const db = mongodb.createConnection(CONNECTION_URI);
