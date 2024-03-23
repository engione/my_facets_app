import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import { Notification } from "../Notification/Notification";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./AuthenticationForms.scss";
import { FormEvent } from "react";

export function ResetPassword() {
  const notify = (e: FormEvent) => {
    e.preventDefault();
    Notification("Код отправлен");
  };

  return (
    <>
      <div className="authentication">
        <img
          className="authentication__logo"
          src="./src/assets/logo.svg"
          alt=""
        />
        <span className="authentication__type">Восстановление пароля</span>
        <form className="authentication__form authentication__form_login">
          <Input
            type="email"
            className="authentication__input"
            placeholder="Электронная почта"
          />
          <Button className="authentication__btn">Запросить код</Button>
          <span className="authentication__text">
            Нет аккаунта? <a href="">Зарегистрироваться</a>
          </span>
          <button onClick={notify}>Notify!</button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}


