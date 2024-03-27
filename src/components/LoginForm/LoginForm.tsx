import { Button } from "../Button/Button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "./LoginForm.scss";
import { FormField } from "../FormField/FormField";

const CreateLoginSchema = z.object({
  email: z.string().email("Некорректный формат почты"),
  password: z.string().min(8, "Длина пароля должна быть не менее 8 символов"),
});

type CreateLoginForm = z.infer<typeof CreateLoginSchema>;

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateLoginForm>({
    resolver: zodResolver(CreateLoginSchema),
  });

  return (
    <form className="login-form" onSubmit={handleSubmit(() => {})}>
      <FormField errorMessage={errors.email?.message}>
        <input
          type="email"
          placeholder="Электронная почта"
          {...register("email")}
        />
      </FormField>
      <FormField errorMessage={errors.password?.message}>
        <input type="password" placeholder="Пароль" {...register("password")} />
      </FormField>
      <Button type="submit">Войти</Button>
    </form>
  );
};
