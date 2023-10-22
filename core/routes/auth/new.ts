import type { Request, Response } from "express";
import { auth } from "../../../core/auth/lucia";
import { useID } from "../../util/id";

const createUser = async (req: Request, res: Response) => {
  try {
    const user = await auth.createUser({
      key: {
        providerId: "username",
        providerUserId: req.body.studentID,
        password: req.body.password || null,
      },
      attributes: {},
      userId: useID.gen("user"),
    });
    console.log(user);
    return res.status(200).json(user);
  } catch (error) {
    console.log(error);
  }
};

export { createUser };
