import { Response } from "express";
import { UserModel } from "../../data";
import { CustomError } from "../../domain";
import { RegisterUserDto } from "../../domain/dtos/auth/register-user.dto";

export class AuthService {
  constructor() {}

  public async registerUser(registerUserDto: RegisterUserDto) {
    const existUser = await UserModel.findOne({ email: registerUserDto.email });
    if (existUser) throw CustomError.badRequest("Email already exist");

    try {
      const user = new UserModel(registerUserDto);
      await user.save();
      return user;
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }
}
