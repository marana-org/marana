import { db } from "../db";
import id from "../id";
import { mongoUserModel } from "../types/User";

interface UncapturedUser {
  studentId?: string;
  activation: number;
}

const capture = async ({ studentId, activation }: UncapturedUser) => {
  const user = new mongoUserModel({ _id: id.gen("student"), level: 0 });
  await user.save();
};

export default capture;
