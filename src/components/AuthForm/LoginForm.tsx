import { Input } from "../Input/Input";
import { Button } from "../Button/Button";
import "./AuthenticationForms.scss"


export function LoginForm() {
    return (
        <>
            <div className="authentication">
                <img
                    className="authentication__logo"
                    src="./src/assets/logo.svg"
                    alt="" />
                <span className="authentication__type">Вход</span>
                <form className="authentication__form authentication__form_login">
                    <Input
                        type="email"
                        className="authentication__input"
                        placeholder="Электронная почта" />
                    <Input
                        type="password"
                        className="authentication__input"
                        placeholder="Пароль" />
                    <Button className="authentication__btn">Войти</Button>
                    <span className="authentication__text">
                        Нет аккаунта? <a href="">Зарегистрироваться</a>
                    </span>
                    <a
                        href=""
                        className="authentication__text authentication__password-reset"
                    >
                        Забыли свой пароль?
                    </a>
                </form>
            </div>
        </>
    );
}
