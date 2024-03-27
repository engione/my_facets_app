import { Button } from "../Button/Button";
import { Notification } from "../Notification/Notification";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import "react-toastify/dist/ReactToastify.css";
import "./ResetForm.scss";
import { FormEvent, useState } from "react";
import { FormField } from "../FormField/FormField";

const CreateResetSchema = z.object({
  email: z.string().email("Некорректный формат почты"),
});

type CreateResetForm = z.infer<typeof CreateResetSchema>;

export const ResetForm = () => {
  const [sendKey, setSendKey] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateResetForm>({
    resolver: zodResolver(CreateResetSchema),
  });

  const notify = () => {
    Notification("Код отправлен");
  };

  return (
    <>
      <form
        className="reset-form"
        onSubmit={handleSubmit(() => {
          notify();
          setSendKey(true);
        })}
      >
        <FormField errorMessage={errors.email?.message}>
          <input
            type="email"
            placeholder="Электронная почта"
            {...register("email")}
          />
        </FormField>
        {sendKey && (
          <FormField>
            <input type="text" placeholder="Введите код с почты" />
          </FormField>
        )}
        <Button type="submit">{sendKey ? "Изменить пароль" : "Запросить код"}</Button>
      </form>
    </>
  );
};
