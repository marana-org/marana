import express from "express";
import { auth } from "../../auth/lucia";
import { type AuthRequest } from "../../types/authenticatedRequest";

const checkSession: express.RequestHandler = async (
	req: AuthRequest,
	res,
	next
) => {
	const authRequest = auth.handleRequest(req, res);
	if (!req.cookies.auth_session)
		return res.status(401).json({ error: "Unauthorized" });
	const session = await auth.validateSession(req.cookies.auth_session);

	req.authRequest = authRequest;
	if (!session) return res.status(401).json({ error: "Unauthorized" });
	else return next();
};

export { checkSession };
