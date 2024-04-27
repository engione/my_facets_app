import { Button } from "../Button/Button";
import { FormField } from "../FormField/FormField";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "../../api/config";
import { useState } from "react";
import { Circular } from "../Circular/Circular";
import { addUserData } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./RegisterForm.scss";
import { CreateRegisterSchema } from "../../schemas/RegisterSchema";



type CreateRegisterForm = z.infer<typeof CreateRegisterSchema>;

export function RegisterForm({ setToken, setAuthBtn }: any) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateRegisterForm>({
    resolver: zodResolver(CreateRegisterSchema),
  });

  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <form
      className="register-form"
      onSubmit={handleSubmit(
        ({ surname, name, middlename, email, password, repeatPassword }) => {
          if (password === repeatPassword) {
            setLoading(true);
            api
              .post("/auth/signup", {
                first_name: name,
                middle_name: middlename,
                last_name: surname,
                email: email,
                password: password,
              })
              .then(({ data }) => {
                console.log(data);
                reset();
                setLoading(false);
                setToken(data);
                setAuthBtn(false);
                console.log(data);
                dispatch(addUserData(data));
                navigate("/", { replace: true });
              })
              .catch((error) => {
                console.error(error);
                setLoading(false);
              });
          } else {
            alert("Пароли не совпадают");
          }
        }
      )}
    >
      <FormField errorMessage={errors.surname?.message}>
        <input
          className="input"
          type="text"
          placeholder="Фамилия"
          {...register("surname")}
        />
      </FormField>
      <FormField errorMessage={errors.name?.message}>
        <input
          className="input"
          type="text"
          placeholder="Имя"
          {...register("name")}
        />
      </FormField>
      <FormField errorMessage={errors.middlename?.message}>
        <input
          className="input"
          type="text"
          placeholder="Отчество"
          {...register("middlename")}
        />
      </FormField>
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
          title="Пароль должен состоять из большой, маленькой буквы, цифр и знака"
          className="input"
          type="text"
          placeholder="Пароль"
          {...register("password")}
        />
      </FormField>
      <FormField>
        <input
          className="input"
          type="password"
          placeholder="Пароль"
          {...register("repeatPassword")}
        />
      </FormField>
      <Button type="submit">{loading ? <Circular /> : "Регистрация"}</Button>
    </form>
  );
}
