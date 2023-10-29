import express from "express";
import { PORT } from "./.env.json";
import { auth } from "./auth/lucia";
import { createUser, loginUser, createClassAdministrative } from "./routes";
import { db } from "./util/db";
import { checkSession } from "./util/middleware/session";
import { checkAdmin } from "./util/middleware/admin";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  const authRequest = auth.handleRequest(req, res);
  res.send("Hello World!");
  console.log(authRequest);
});

app.post("/auth/user/new", createUser);
app.post("/auth/user/authenticate", loginUser);
app.post("/class/new", checkAdmin, createClassAdministrative);

app.listen(PORT, () => {
  const connection = db();
  if (connection) {
    console.log(`Server is running on port ${PORT}`);
  } else {
    console.log("Failed to connect to database!");
    process.exit(1);
  }
});
