import { Button } from "../Button/Button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "./LoginForm.scss";
import { FormField } from "../FormField/FormField";
import { api } from "../../api/config";
import { useState } from "react";
import { Circular } from "../Circular/Circular";

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

  const [loading, setLoading] = useState<boolean>(false);

  return (
    <form
      className="login-form"
      onSubmit={handleSubmit(({ email, password }) => {
        setLoading(true);
        api
          .post("/auth/signin", {
            email: email,
            password: password,
          })
          .then(({ data }) => {
            console.log(data);
            reset();
            setLoading(false);
          })
          .catch((error) => {
            console.error(error);
            setLoading(false);
          });
      })}
    >
      <FormField errorMessage={errors.email?.message}>
        <input
          className="input"
          type="email"
          placeholder="Электронная почта"
          {...register("email")}
        />
      </FormField>
      <FormField errorMessage={errors.password?.message}>
        <input
          className="input"
          type="password"
          placeholder="Пароль"
          {...register("password")}
        />
      </FormField>
      <Button type="submit">
        {loading ? (
          <Circular />
        ) : (
          "Войти"
        )}
      </Button>
    </form>
  );
};
