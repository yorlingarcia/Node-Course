import { Response } from "express";
import { UserModel } from "../../data";
import { CustomError, LoginUserDto, UserEntity } from "../../domain";
import { RegisterUserDto } from "../../domain/dtos/auth/register-user.dto";
import { JwtAdapter, bcryptAdapter, envs } from "../../config";
import { EmailService } from "./email.service";

export class AuthService {
  constructor(private readonly emailService: EmailService) {}

  public async registerUser(registerUserDto: RegisterUserDto) {
    const existUser = await UserModel.findOne({ email: registerUserDto.email });
    if (existUser) throw CustomError.badRequest("Email already exist");

    try {
      const user = new UserModel(registerUserDto);

      // Encriptar password
      user.password = bcryptAdapter.hash(registerUserDto.password);

      await user.save();

      //Email de confirmacion
      this.sendEmailValidationLink(user.email);

      const { password, ...userEntity } = UserEntity.fromObject(user);

      const token = await JwtAdapter.generateToken({
        id: user.id,
      });
      if (!token) throw CustomError.internalServer("Error while creating JWT");

      return {
        user: userEntity,
        token,
      };
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }

  public async loginUser(loginUserDto: LoginUserDto) {
    const existUser = await UserModel.findOne({
      email: loginUserDto.email,
    });
    if (!existUser) throw CustomError.badRequest("Email not exist");

    const isMathc = bcryptAdapter.compare(
      loginUserDto.password,
      existUser.password
    );
    if (!isMathc) throw CustomError.badRequest("Password is not valid");

    try {
      const { password, ...userEntity } = UserEntity.fromObject(existUser);
      const token = await JwtAdapter.generateToken({
        id: userEntity.id,
        email: userEntity.email,
      });
      if (!token) throw CustomError.internalServer("Error while creating JWT");

      return {
        user: userEntity,
        token,
      };
    } catch (error) {
      throw CustomError.internalServer(`${error}`);
    }
  }

  private sendEmailValidationLink = async (email: string) => {
    const token = await JwtAdapter.generateToken({ email });

    if (!token) throw CustomError.internalServer("Error getting token");

    const link = `${envs.WEBSERVICE_URL}/auth/validate-email/${token}`;
    const html = `
      <h1>Validate your Email</h1>
      <p>Click on the following link to validate your email</p>
      <a href="${link}">Validate yout email: ${email}</a>
      <p>${link}</p>
    `;

    const options = {
      to: email,
      subject: "Validate your email",
      htmlBody: html,
    };

    const isSent = await this.emailService.sendEmail(options);
    if (!isSent) throw CustomError.internalServer("Error sending email");
    return true;
  };

  public validateEmail = async (token: string) => {
    const payload = await JwtAdapter.validateToken(token);
    if (!payload) throw CustomError.unAuthorized("Invalid Token");

    const { email } = payload as { email: string };

    if (!email) throw CustomError.internalServer("Email not in token");

    const user = await UserModel.findOne({ email });

    if (!user) throw CustomError.internalServer("Email not exist");

    user.emailValidated = true;

    await user.save();
    return true;
  };
}
