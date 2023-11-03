import express from "express";
import { Classes } from "../../../auth/schema";
import { useID } from "../../../util/id";
import { auth } from "../../../auth/lucia";
import { type Assignment } from "../../../types/assignment";
import { type id } from "../../../types/id";

const createAssignment = async (
	req: express.Request,
	res: express.Response
) => {
	const {
		title,
		description,
		due,
		assignees,
		classID,
		submissionMethod,
		type,
		points,
		externalSetup
	} = req.body;
	const id = useID.gen("assignment");

	if (!title || !due || !classID || !submissionMethod)
		return res.status(400).json({ error: "Missing required fields" });

	const assignment: Assignment = {
		id,
		title,
		description: description || undefined,
		due: due,
		class: classID,
		assignedTo: (assignees as id[]) || "readonly",
		method: submissionMethod,
		type: type || undefined,
		points: points || 0,
		external: externalSetup || undefined
	};

	try {
		const updatedClass = await Classes.findOneAndUpdate(
			{ _id: classID },
			{
				$push: {
					class_assignments: assignment
				}
			},
			{ new: true }
		);

		return res.status(200).json({
			message: "Assignment created successfully",
			class: updatedClass
		});
	} catch (error) {
		console.error(error);
		return res
			.status(500)
			.json({ error: "Failed to create assignment", details: error });
	}
};

export { createAssignment };
