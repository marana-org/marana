import { Pika } from "pika-id";

export const useID = new Pika(["user", "session", "class"], {
  epoch: 1696425840,
});
