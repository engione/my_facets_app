import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import "./AuthenticationForms.scss";

export function RegistrationForm() {
  return (
    <>
      <div className="authentication">
        <img
          className="authentication__logo"
          src="./src/assets/logo.svg"
          alt=""
        />
        <span className="authentication__type">Регистрация</span>
        <form className="authentication__form authentication__form_reg">
          <Input
            type="text"
            className="authentication__input"
            placeholder="Фамилия"
          />
          <Input
            type="text"
            className="authentication__input"
            placeholder="Имя"
          />
          <Input
            type="text"
            className="authentication__input"
            placeholder="Отчество"
          />
          <Input
            type="email"
            className="authentication__input"
            placeholder="Электронная почта"
          />
          <Input
            type="password"
            className="authentication__input"
            placeholder="Пароль"
          />
          <Input
            type="password"
            className="authentication__input"
            placeholder="Повторите пароль"
          />
          <Button className="authentication__btn">Авторизация</Button>
          <span className="authentication__text">
            Есть аккаунт? <a href="">Войти</a>
          </span>
        </form>
      </div>
    </>
  );
}
