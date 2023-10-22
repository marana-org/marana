import { lucia, type Env } from "lucia";
import { express } from "lucia/middleware";
import { mongoose } from "@lucia-auth/adapter-mongoose";
import "lucia/polyfill/node";
import { User, Key, Session } from "./schema";
import { ENV } from "../.env.json";

export const auth = lucia({
  env: ENV as Env,
  middleware: express(),
  adapter: mongoose({
    User,
    Key,
    Session,
  }),
});

export type Auth = typeof auth;
