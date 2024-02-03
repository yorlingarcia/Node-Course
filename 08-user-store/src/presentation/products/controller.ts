import { CreateCategoryDto, CustomError } from "../../domain";
import { Request, Response } from "express";
import { CategoryService } from "../services/category.service";
import { PaginationDto } from "../../domain/dtos/shared/pagination.dto";

export class ProductController {
  constructor() {} // private readonly productService: ProductService

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }
    console.log(`${error}`);

    return res.status(500).json({ error: "Internal server error" });
  };

  createProduct = async (req: Request, res: Response) => {
    res.json("Create Product");
    // const [error, createProductDto] = CreateProductDto.create(req.body);
    // if (error) res.status(400).json({ error });
    // this.productService
    //   .creteCategory(createProductDto!, req.body.user)
    //   .then((product) => res.status(201).json(product))
    //   .catch((error) => this.handleError(error, res));
  };

  getProducts = async (req: Request, res: Response) => {
    const { page = 1, limit = 10 } = req.query;
    const [error, paginationDto] = PaginationDto.create(+page, +limit);
    if (error) return res.status(400).json({ error });

    res.json("get Product");

    // this.categoryService
    //   .getCategories(paginationDto!)
    //   .then((categories) => res.json(categories))
    //   .catch((error) => this.handleError(error, res));
  };
}
