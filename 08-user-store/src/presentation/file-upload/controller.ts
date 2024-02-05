import { CreateCategoryDto, CustomError } from "../../domain";
import { Request, Response } from "express";
import { CategoryService } from "../services/category.service";
import { PaginationDto } from "../../domain/dtos/shared/pagination.dto";

export class FileUploadController {
  constructor() {} // private readonly categoryService: CategoryService

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.log(`${error}`);

    return res.status(500).json({ error: "Internal server error" });
  };

  uploadFile = async (req: Request, res: Response) => {
    res.json("upload file");
  };

  uploadMultipleFile = async (req: Request, res: Response) => {
    res.json("upload multiple file");
  };
}
