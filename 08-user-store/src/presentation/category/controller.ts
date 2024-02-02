import { CreateCategoryDto, CustomError } from "../../domain";
import { Request, Response } from "express";

export class CategoryController {
  constructor() {}

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
    res.json(createCategoryDto);
  };

  getCategories = async (req: Request, res: Response) => {
    res.json("Get Categories");
  };
}
