import { Router, Request, Response } from "express";

import {
  getTasks,
  getTask,
  saveTasks,
  updateTasks,
  finishedTasks,
  removeTasks
} from "./controller/TasksController";

const routes = Router();

routes.get("/", (resquest: Request, response: Response) => {
  return response.json({ message: "Hello Word!!" });
});

routes.get("/tasks", getTasks);
routes.get("/tasks/:id", getTask);
routes.post("/tasks", saveTasks);
routes.put("/tasks/:id", updateTasks);
routes.patch("/tasks/:id", finishedTasks);
routes.delete("/tasks/:id", removeTasks);

export default routes;
