import express from "express";
import { AuthRequest } from "../../types/authenticatedRequest";
import { Classes } from "../../auth/schema";

export const getClass = async (req: AuthRequest, res: express.Response) => {
	const { from_teacher, search_query, grade, assignments_includes, class_id, count } =
		req.query;

	const query = await Classes.find({
		class_students: req.authRequest.user.userId,
		...(from_teacher && { class_teacher: { userId: from_teacher } }),
		...(search_query && {
			class_name: { $regex: search_query, $options: "i" }
		}),
		...(assignments_includes && { class_assignments: { $exists: true } }),
		...(class_id && { class_id: class_id }),
	});

	if (grade !== undefined) {
		const filteredQuery = query.filter((result) => {
			const classId = result.class_id.split("_");
			return classId[2] === grade;
		});
		if (filteredQuery.length > 0) {
			res.status(200).json({ classes: filteredQuery });
		} else {
			res.status(404).json({ error: "No classes found!" });
		}
	} else {
		if (query) res.status(200).json({ classes: query });
		else res.status(404).json({ error: "No classes found!" });
	}
};
