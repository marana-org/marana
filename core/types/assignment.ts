import { type id } from "./id";
import {
	type TextSubmission,
	type FileSubmission,
	type QuizSubmission,
	type ExternalSubmission
} from "./submission";

interface Assignment {
	id: id;
	title: string;
	description?: string;
	due: number;
	class: id;
	assignedTo: id[] | "all" | "readonly";
	method: "text" | "file" | "quiz" | "external";
	submitted?:
		| TextSubmission
		| FileSubmission
		| QuizSubmission
		| ExternalSubmission;
	type?: "homework" | "test" | "quiz" | "project" | "other";
	points?: number;
	external?: {
		source: "google" | "microsoft" | "notion" | "webhook";
		url: string;
		auth?: string;
	};
}

export { type Assignment };
