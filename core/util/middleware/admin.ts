import express from "express";
import { ADMIN_KEY } from "../../.env.json";
import { auth } from "../../auth/lucia";

const checkAdmin: express.RequestHandler = async (req, res, next) => {
	if (
		!req.query.user_hierarchy ||
		req.query.user_hierarchy !== "admin" ||
		req.query.user_key !== ADMIN_KEY
	)
		return res.status(403).json({ error: "Forbidden" });
	else return next();
};

const checkManager: express.RequestHandler = async (req, res, next) => {
	if (
		(req.query.user_hierarchy !== "teacher" &&
			req.query.user_hierarchy !== "admin") ||
		(req.query.user_key !== ADMIN_KEY && !req.cookies["auth_session"])
	)
		return res
			.status(401)
			.json({ error: "Missing key or hierarchy status" });
	const session = await auth.validateSession(req.cookies["auth_session"]);
	if (session.state === "active") return next();
	else return res.status(403).json({ error: "Forbidden" });
};

export { checkAdmin, checkManager };
