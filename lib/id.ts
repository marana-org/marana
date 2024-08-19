import Pika from "pika-id";

const id = new Pika([
  "student",
  "instructor",
  "admin",
  "course",
  "assignment",
  "submission",
  "session"
], {
    epoch: 17232662120,
});

export default id;
