import express from "express";
import { ADMIN_KEY } from "../../.env.json";

const checkAdmin: express.RequestHandler = async (req, res, next) => {
  if (
    !req.query.user_hierarchy ||
    req.query.user_hierarchy !== "admin" ||
    req.query.user_key !== ADMIN_KEY
  )
    return res.status(403).json({ error: "Forbidden" });
  else return next();
};

export { checkAdmin };
