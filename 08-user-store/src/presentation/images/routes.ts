import { Router } from "express";
import { ImageController } from "./controller";

export class ImageRoutes {
  static get routes(): Router {
    const router = Router();

    const constroller = new ImageController();

    router.get("/:type/:img", constroller.getImage);
    return router;
  }
}
