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
	const user = await auth.getUser(session?.user.userId);

	req.authRequest = authRequest;
	req.authRequest.user = user;
	req.authRequest.session = session;
	if (!session) return res.status(401).json({ error: "Unauthorized" });
	else return next();
};

export { checkSession };
