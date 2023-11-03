import express from "express";
import { Classes } from "../../../auth/schema";
import { AuthRequest } from "../../../types/authenticatedRequest";
import { Assignment } from "../../../types/assignment";
import { useID } from "../../../util/id";

const submitAssignment = async (req: AuthRequest, res: express.Response) => {
	const { submissionMethod } = req.query;
	const { assignmentID, submission } = req.body;
	const { user } = req.authRequest;

	if (!submissionMethod || !assignmentID)
		return res.status(400).json({ error: "Missing required fields" });

	const classAssignments = (
		await Classes.findOne({
			"class_assignments.id": assignmentID
		})
	)?.class_assignments as Assignment[];

	const assignment = classAssignments.find(
		(assignment) => assignment.id === assignmentID
	);

	if (!assignment)
		return res.status(404).json({ error: "Assignment not found" });
	if (assignment.method !== submissionMethod)
		return res.status(400).json({ error: "Invalid submission method" });
	if (!assignment.assignedTo.includes(user.userId))
		return res.status(409).json({ error: "Unauthorized" });
	if (submission.method !== submissionMethod)
		return res.status(400).json({ error: "Invalid submission method" });

	const newSubmission = {
		id: useID.gen("submission"),
		submittedAt: new Date().getSeconds(),
		submittedBy: user.userId,
		method: submission as [typeof submissionMethod],
		class: assignment.class,
		status: "submitted"
	};

	const updateAssignments = await Classes.findOneAndUpdate(
		{ "class_assignments.id": assignmentID },
		{
			$push: {
				"class_assignments.$.submissions": newSubmission
			}
		}
	);
	if (!updateAssignments)
		return res.status(500).json({ error: "Failed to submit assignment" });
	else
		return res
			.status(200)
			.json({ message: "Assignment submitted successfully" });
};

export { submitAssignment };
