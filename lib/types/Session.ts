import { db } from "../db";
import type { Model } from "mongoose";

export interface Session {
    _id: `session_${string}`;
    user: `student_${string}` | `instructor_${string}` | `admin_${string}`;
    expires: number;
}

const schema = new db.Schema<Session, Model<Session>>({
    _id: {
        required: true,
        immutable: true,
        type: String,
    },
    user: {
        required: true,
        type: String,
    },
    expires: {
        required: true,
        type: Number,
    },
});

export const mongoSessionModel =
  db.models.Session || db.model("Session", schema);
