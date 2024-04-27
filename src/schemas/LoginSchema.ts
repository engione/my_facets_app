import { z } from "zod";

export const CreateLoginSchema = z.object({
  email: z.string().email("Некорректный формат почты"),
  password: z.string().min(8, "Длина пароля должна быть не менее 8 символов"),
});
