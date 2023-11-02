import { Pika } from "pika-id";

export const useID = new Pika(
	["user", "session", "class", "assignment", "submission"],
	{
		epoch: 1696425840
	}
);
