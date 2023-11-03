import { type id } from "./id";

interface SubmittedAssignment {
	id: id;
	method:
		| TextSubmission
		| FileSubmission
		| QuizSubmission
		| ExternalSubmission;
	submittedBy: id;
	submittedAt: number;
	class: id;
	status: "submitted" | "graded";

	points?: number;
	gradedAt?: number;
	responses?: string[];
}

interface TextSubmission extends SubmittedAssignment {
	content: string;
}

interface FileSubmission extends SubmittedAssignment {
	files: URL[];
}

// TODO: Add individual quiz answer type
interface QuizSubmission extends SubmittedAssignment {
	answers: number[];
}

// TODO: External API research, implementation, and documentation
interface ExternalSubmission extends SubmittedAssignment {
	source: "google" | "microsoft" | "notion" | "webhook";
	url: string;
	auth?: string;
}

export {
	type SubmittedAssignment,
	type TextSubmission,
	type FileSubmission,
	type QuizSubmission,
	type ExternalSubmission
};
