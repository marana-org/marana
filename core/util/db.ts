import mongodb from "mongoose";
import { CONNECTION_URI } from "../.env.json";

export const db = () => {
  try {
    mongodb.connect(CONNECTION_URI);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
};
