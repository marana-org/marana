import type { Request, Response } from "express";
import { auth } from "../../../core/auth/lucia";
import { useID } from "../../util/id";

const loginUser = async (req: Request, res: Response) => {
  const authRequest = auth.handleRequest(req, res);
  try {
    const key = await auth.useKey(
      "studentID",
      req.body.studentId,
      req.body.passwordRaw
    );
    const user = await auth.getUser(key.userId);
    console.log(user);
    const session = await auth.createSession({
      sessionId: useID.gen("session"),
      userId: user.userId,
      attributes: {},
    });
    authRequest.setSession(session);
    return res.status(200).json({
      userId: key.userId,
      studentId: req.body.studentId,
    });
  } catch (error) {
    console.log(error);
  }
};

export { loginUser };
