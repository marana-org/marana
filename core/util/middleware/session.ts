import express from "express";
import { auth } from "../../auth/lucia";

const checkSession: express.RequestHandler = async (req, res, next) => {
  if (!req.cookies.auth_session)
    return res.status(401).json({ error: "Unauthorized" });
  const session = await auth.validateSession(req.cookies.auth_session);

  if (!session) return res.status(401).json({ error: "Unauthorized" });
  else return next();
};

export { checkSession };
