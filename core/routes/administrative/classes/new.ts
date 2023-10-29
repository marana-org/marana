import express from "express";
import { Classes } from "../../../auth/schema";
import { useID } from "../../../util/id";
import { auth } from "../../../auth/lucia";

const createClassAdministrative = async (
  req: express.Request,
  res: express.Response
) => {
  const { details, manager, students } = req.body;
  const id = `${useID.gen("class")}_${details.grade}`;
  const teacher = await auth.getUser(manager);
  let studentList: string[] = [];

  if (!teacher)
    return res.status(401).json({ error: `Teacher ${manager} does not exist` });

  if (students.length > 0) {
    students.forEach(async (student: any) => {
      studentList.push(student);
    });
  }

  const resp = await Classes.create({
    _id: id,
    class_id: id,
    class_name: details.title,
    class_teacher: teacher,
    class_students: studentList,
  });

  return res.status(200).send(resp);
};

export { createClassAdministrative };
