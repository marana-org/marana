import { Lucia } from "lucia";
import { adapter } from "../db";

export const auth = new Lucia(adapter);

declare module "lucia" {
	interface Register {
		Lucia: typeof Lucia;
	}
}