import { Router } from "express";
import { CategoryController } from "./controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { CategoryService } from "../services/category.service";

export class CategoryRoutes {
  static get routes(): Router {
    const router = Router();

    const categoryService = new CategoryService();
    const controller = new CategoryController(categoryService);

    // Definir las rutas
    router.get("/", [AuthMiddleware.validateJwt], controller.getCategories);
    router.post("/", [AuthMiddleware.validateJwt], controller.creteCategory);

    return router;
  }
}
