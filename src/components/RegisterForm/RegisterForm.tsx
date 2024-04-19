import { Button } from "../Button/Button";
import { FormField } from "../FormField/FormField";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "./RegisterForm.scss";

const CreateRegisterSchema = z.object({
  surname: z.string().min(2, "Длина фамилии должна быть не менее 2 символов"),
  name: z.string().min(2, "Длина имени должна быть не менее 2 символов"),
  middlename: z
    .string()
    .min(5, "Длина отчества должна быть не менее 5 символов"),
  email: z.string().email("Некорректный формат почты"),
  password: z.string().min(8, "Длина пароля должна быть не менее 8 символов"),
});

type CreateRegisterForm = z.infer<typeof CreateRegisterSchema>;

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateRegisterForm>({
    resolver: zodResolver(CreateRegisterSchema),
  });

  return (
    <form
      className="register-form"
      onSubmit={handleSubmit(
        () => {}
      )}
    >
      <FormField errorMessage={errors.surname?.message}>
        <input className="input" type="text" placeholder="Фамилия" {...register("surname")} />
      </FormField>
      <FormField errorMessage={errors.name?.message}>
        <input className="input" type="text" placeholder="Имя" {...register("name")} />
      </FormField>
      <FormField errorMessage={errors.middlename?.message}>
        <input className="input" type="text" placeholder="Отчество" {...register("middlename")} />
      </FormField>
      <FormField errorMessage={errors.email?.message}>
        <input className="input"
          type="email"
          placeholder="Электронная почта"
          {...register("email")}
        />
      </FormField>
      <FormField errorMessage={errors.password?.message}>
        <input className="input" type="password" placeholder="Пароль" {...register("password")} />
      </FormField>
      <FormField>
        <input className="input" type="password" placeholder="Пароль" />
      </FormField>
      <Button type="submit">Регистрация</Button>
    </form>
  );
}
