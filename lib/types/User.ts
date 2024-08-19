import { db } from "../db";
import type { Model } from "mongoose";

export interface User {
  _id: `student_${string}` | `instructor_${string}` | `admin_${string}`;
  level: 0 | 1 | 2 | 3;
  givenId?: number;
  activation?: number; // this is deleted after the student or instructor "captures" their account
  email?: {
    personal?: `${string}@${string}`;
    school?: `${string}@${string}`;
  };
  phone?: {
    personal?: `+${number}${bigint}`;
    school?: `+${number}${bigint}`;
  };
}

const schema = new db.Schema<User, Model<User>>({
  _id: {
    required: true,
    immutable: true,
    type: String,
  },
  level: { required: true, type: Number },
  givenId: Number,
  activation: Number,
  email: {
    type: {
      personal: String,
      school: String
    },
  },
  phone: {
    personal: BigInt,
    school: BigInt
  },
});

export const mongoUserModel = db.models.User || db.model("User", schema);
