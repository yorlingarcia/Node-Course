import { CategoryModel } from "../../data";
import { CreateCategoryDto, CustomError, UserEntity } from "../../domain";
import { PaginationDto } from "../../domain/dtos/shared/pagination.dto";

export class CategoryService {
  constructor() {}

  async creteCategory(createCategoryDto: CreateCategoryDto, user: UserEntity) {
    const categoryExist = await CategoryModel.findOne({
      name: createCategoryDto.name,
    });

    if (categoryExist) throw CustomError.badRequest("Category already exist");

    try {
      const category = new CategoryModel({
        ...createCategoryDto,
        user: user.id,
      });

      await category.save();

      return {
        id: category.id,
        name: category.name,
        available: category.available,
      };
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }

  async getCategories(paginationDto: PaginationDto) {
    const { page, limit } = paginationDto;
    // const total = await CategoryModel.countDocuments();
    // const categories = await CategoryModel.find()
    const [total, categories] = await Promise.all([
      CategoryModel.countDocuments(),
      CategoryModel.find()
        .skip((page - 1) * limit)
        .limit(limit),
    ]);

    try {
      return {
        page,
        limit,
        total,
        next: `/api/categories?page=${page + 1}&limit=${limit}`,
        prev:
          page - 1 > 0
            ? `/api/categories?page=${page - 1}&limit=${limit}`
            : null,
        categories: categories.map((category) => ({
          id: category._id,
          name: category.name,
          available: category.available,
        })),
      };
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }
}
