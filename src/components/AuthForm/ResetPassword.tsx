import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Notification } from "../Notification/Notification";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./ResetForm.scss";
import { FormEvent } from "react";

export function ResetPassword() {
  const notify = (e: FormEvent) => {
    e.preventDefault();
    Notification("Код отправлен");
  };

  return (
    <>
      <form className="reset-form">
        <Input
          type="email"
          className="authentication__input"
          placeholder="Электронная почта"
        />
        <Button>Запросить код</Button>
        <button onClick={notify}>Notify!</button>
      </form>
      <ToastContainer />
    </>
  );
}
