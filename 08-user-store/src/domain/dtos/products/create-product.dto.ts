import { Validators } from "../../../config";

export class CreateProductDto {
  private constructor(
    public readonly name: string,
    public readonly available: boolean,
    public readonly price: string,
    public readonly description: string,
    public readonly user: string,
    public readonly category: string
  ) {}

  static create(objetc: { [key: string]: any }): [string?, CreateProductDto?] {
    const { name, available, price, description, user, category } = objetc;
    if (!name) return ["Missing name", undefined];
    if (!user) return ["Missing user", undefined];
    if (!Validators.isMongoId(user)) return ["Invalid user Id", undefined];
    if (!category) return ["Missing category", undefined];
    if (!Validators.isMongoId(category))
      return ["Invalid category Id", undefined];

    return [
      undefined,
      new CreateProductDto(
        name,
        !!available,
        price,
        description,
        user,
        category
      ),
    ];
  }
}
