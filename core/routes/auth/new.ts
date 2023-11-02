import type { Request, Response } from "express";
import { auth } from "../../../core/auth/lucia";
import { useID } from "../../util/id";

const createUser = async (req: Request, res: Response) => {
	const authRequest = auth.handleRequest(req, res);
	try {
		const user = await auth.createUser({
			key: {
				providerId: "studentID",
				providerUserId: req.body.studentID,
				password: req.body.password || null
			},
			attributes: {
				details: {
					name: {
						legalFirst: req.body.firstName,
						legalLast: req.body.lastName,
						preferred: req.body.preferredName || req.body.firstName
					},
					email: req.body.email,
					grade: req.body.year
				},
				hierarchy: req.body.hierarchy === null ? "student" : null
			},
			userId: useID.gen("user")
		});
		const session = await auth.createSession({
			sessionId: useID.gen("session"),
			userId: user.userId,
			attributes: {}
		});
		authRequest.setSession(session);
		return res.status(200).json(user);
	} catch (error) {
		console.log(error);
	}
};

export { createUser };
