import { Auth } from "../interfaces/auth.interface";
import UserModel from "../models/user";
import { User } from "../interfaces/user.interface";
import { encrypt, verified } from "../utils/bcrypt.handle";
import { generateToken } from "../utils/jwt.handle";

const registerNewUser = async ({ email, password, name }: User) => {
  const checkIs = await UserModel.findOne({ email });
  if (checkIs) return "ALREADY_EXISTS";
  const passHash = await encrypt(password); //TODO 123456

  const registerNewUser = await UserModel.create({
    email,
    password: passHash,
    name,
  });

  return registerNewUser;
};

const loginUser = async ({ email, password }: Auth) => {
  const checkIs = await UserModel.findOne({ email });
  if (!checkIs) return "NOT_FOUND_USER";
  const passwordHash = checkIs.password; //TODO EL ENCRIPTADO!
  const isCorrect = await verified(password, passwordHash);

  if (!isCorrect) return "INCORRECT_PASSWORD";
  const token = generateToken(checkIs.email);
  const data = {
    token,
    user: checkIs,
  };
  return data;
};

export { registerNewUser, loginUser };
