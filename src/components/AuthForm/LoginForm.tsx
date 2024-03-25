import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import "./LoginForm.scss"

export function LoginForm() {
  return (
    <form className="login-form">
      <Input type="email" placeholder="Электронная почта" />
      <Input type="password" placeholder="Пароль" />
      <Button>Войти</Button>
    </form>
  );
}
