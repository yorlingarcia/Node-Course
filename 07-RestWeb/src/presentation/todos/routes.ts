import { Router } from "express";
import { TodosController } from "./controller";

export class TodoRoutes {
  static get routes(): Router {
    const router = Router();
    const todoController = new TodosController();

    router.get("/", todoController.getTodos);
    router.get("/:id", todoController.getToDoById);
    router.post("/", todoController.createToDo);
    router.put("/:id", todoController.updateToDo);
    router.delete("/:id", todoController.deleteToDo);
    return router;
  }
}
