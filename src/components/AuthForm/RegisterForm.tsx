import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import "./RegisterForm.scss";

export function RegisterForm() {
  return (
    <form className="register-form">
      <Input type="text" placeholder="Фамилия" />
      <Input type="text" placeholder="Имя" />
      <Input type="text" placeholder="Отчество" />
      <Input type="email" placeholder="Электронная почта" />
      <Input type="password" placeholder="Пароль" />
      <Input type="password" placeholder="Повторите пароль" />
      <Button>Регистрация</Button>
    </form>
  );
}
