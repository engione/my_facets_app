import { z } from "zod";

export const CreateRegisterSchema = z.object({
  surname: z.string().min(2, "Длина фамилии должна быть не менее 2 символов"),
  name: z.string().min(2, "Длина имени должна быть не менее 2 символов"),
  middlename: z
    .string()
    .min(5, "Длина отчества должна быть не менее 5 символов"),
  email: z.string().email("Некорректный формат почты"),
  password: z.string().min(8, "Длина пароля должна быть не менее 8 символов"),
  repeatPassword: z.string(),
});
