import mongodb from "mongoose";

const User = mongodb.model(
  "User",
  new mongodb.Schema(
    {
      _id: {
        type: String,
        required: true,
      },
      hierarchy: {
        type: String,
        required: true,
      },
      attributes: {
        type: Object,
        required: false,
      },
    } as const,
    { _id: false }
  )
);
const Key = mongodb.model(
  "Key",
  new mongodb.Schema(
    {
      _id: {
        type: String,
        required: true,
      },
      user_id: {
        type: String,
        required: true,
      },
      hashed_password: String,
    } as const,
    { _id: false }
  )
);
const Session = mongodb.model(
  "Session",
  new mongodb.Schema(
    {
      _id: {
        type: String,
        required: true,
      },
      user_id: {
        type: String,
        required: true,
      },
      active_expires: {
        type: Number,
        required: true,
      },
      idle_expires: {
        type: Number,
        required: true,
      },
    } as const,
    { _id: false }
  )
);

const Classes = mongodb.model(
  "Classes",
  new mongodb.Schema(
    {
      _id: {
        type: String,
        required: true,
      },
      class_id: {
        type: String,
        required: true,
      },
      class_name: {
        type: String,
        required: true,
      },
      class_teacher: {
        type: String,
        required: true,
      },
      class_students: {
        type: Array,
        required: true,
      },
      class_assignments: {
        type: Array,
        required: true,
      },
    } as const,
    { _id: false }
  )
);

export { User, Key, Session, Classes };
