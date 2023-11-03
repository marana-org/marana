import express from "express";
import { Classes } from "../../../auth/schema";
import { AuthRequest } from "../../../types/authenticatedRequest";
import { Assignment } from "../../../types/assignment";
import { useID } from "../../../util/id";

const getAllAssignments = async (req: AuthRequest, res: express.Response) => {
	const { classId } = req.query;

	const classAssignments = (
		await Classes.findOne({
			id: classId
		})
	)?.class_assignments as Assignment[];

	if (!classAssignments)
		return res.status(404).json({ error: "Class not found" });
	else return res.status(200).json(classAssignments);
};

const getAssignment = async (req: AuthRequest, res: express.Response) => {
	const { classId } = req.query;
	const { assignmentId } = req.params;

	const classAssignments = (
		await Classes.findOne({
			id: classId
		})
	)?.class_assignments as Assignment[];

	if (!classAssignments)
		return res.status(404).json({ error: "Class not found" });

	const assignment = classAssignments.find(
		(assignment) => assignment.id === assignmentId
	);

	if (!assignment)
		return res.status(404).json({ error: "Assignment not found" });
	else return res.status(200).json(assignment);
};

export { getAssignment, getAllAssignments };
