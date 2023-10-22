import express from "express";
import { PORT } from "./.env.json";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("Listening on port 3000!");
});
