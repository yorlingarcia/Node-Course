import { CreateCategoryDto, CustomError } from "../../domain";
import { Request, Response } from "express";
import { CategoryService } from "../services/category.service";

export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.log(`${error}`);

    return res.status(500).json({ error: "Internal server error" });
  };

  creteCategory = async (req: Request, res: Response) => {
    const [error, createCategoryDto] = CreateCategoryDto.create(req.body);
    if (error) res.status(400).json({ error });

    this.categoryService
      .creteCategory(createCategoryDto!, req.body.user)
      .then((category) => res.status(201).json(category))
      .catch((error) => this.handleError(error, res));
  };

  getCategories = async (req: Request, res: Response) => {
    this.categoryService
      .getCategories(req.body.user)
      .then((categories) => res.json(categories))
      .catch((error) => this.handleError(error, res));
  };
}
