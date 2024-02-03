import { Router } from "express";

import { AuthMiddleware } from "../middlewares/auth.middleware";
import { ProductController } from "./controller";

export class ProductRoutes {
  static get routes(): Router {
    const router = Router();

    // const categoryService = new CategoryService();
    const controller = new ProductController();

    // Definir las rutas
    router.get("/", [AuthMiddleware.validateJwt], controller.getProducts);
    router.post("/", [AuthMiddleware.validateJwt], controller.createProduct);

    return router;
  }
}
