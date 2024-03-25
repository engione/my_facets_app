import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";
import "./AuthForm.scss";
import { ResetPassword } from "./ResetPassword";
import { ToastContainer } from "react-toastify";

export const AuthForm = () => {
  const [authType, setAuthType] = useState<string>("register");

  const handleClick = () => {
    setAuthType((prevState) =>
      prevState === "register" ? "auth" : "register"
    );
  };

  return (
    <>
      <div className="auth">
        <img className="auth__logo" src="./src/assets/logo.svg" alt="" />
        <p className="auth__title">
          {authType === "register" ? "Регистрация" : "Авторизация"}
        </p>
        <div className="form">
          {authType === "register" ? <RegisterForm /> : <LoginForm />}
          <div className="form__info">
            <span className="form__text">
              {authType === "register" ? "Есть аккаунт? " : "Нет аккаунта? "}
              <button className="form__btn" onClick={handleClick}>
                {authType === "register" ? "Войти" : "Регистрация"}
              </button>
            </span>
            {authType === "auth" && (
              <button
                className="form__btn"
                onClick={() => setAuthType("reset")}
              >
                Забыли свой пароль?
              </button>
            )}
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};
