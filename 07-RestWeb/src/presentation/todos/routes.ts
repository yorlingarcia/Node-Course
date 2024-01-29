import { Router } from "express";
import { TodosController } from "./controller";

import { TodoDatasourceImpl } from "../../infraestructure/datasources/todo.datasource.impl";
import { TodoRepositoryImpl } from "../../infraestructure/repositories/todo.repositry.impl";

export class TodoRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new TodoDatasourceImpl();
    const todoRepository = new TodoRepositoryImpl(datasource);
    const todoController = new TodosController(todoRepository);

    router.get("/", todoController.getToDos);
    router.get("/:id", todoController.getToDoById);
    router.post("/", todoController.createToDo);
    router.put("/:id", todoController.updateToDo);
    router.delete("/:id", todoController.deleteToDo);
    return router;
  }
}
