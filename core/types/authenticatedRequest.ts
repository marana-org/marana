import { type Request } from "express";

interface AuthRequest extends Request {
	authRequest?: any;
}

export { type AuthRequest };
