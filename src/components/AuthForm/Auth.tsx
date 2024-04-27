import { useState } from "react";
import { LoginForm } from "../LoginForm/LoginForm";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import "./AuthForm.scss";
import { ResetForm } from "../ResetForm/ResetForm";

import { useNavigate } from "react-router-dom";


export const AuthForm = ({setToken, setAuthBtn} : any) => {
  const [authType, setAuthType] = useState<string>("auth");
  const navigate = useNavigate();

  const handleClick = () => {
    setAuthType((prevState) =>
      prevState === "register" ? "auth" : "register"
    );
  };

  switch (authType) {
    case "register":
      return (
        <>
          <div className="btn-back__wrapper">
            <button onClick={() => navigate(-1)}>
              Вернуться назад
            </button>
          </div>
          <div className="auth">
            <img className="auth__logo" src="./src/assets/logo.svg" alt="" />
            <p className="auth__title">Регистрация</p>
            <div className="form">
              <RegisterForm setAuthBtn={setAuthBtn} setToken={setToken} />
              <div className="form__info">
                <span className="form__text">
                  Есть аккаунт&nbsp;
                  <button className="form__btn" onClick={handleClick}>
                    Войти
                  </button>
                </span>
              </div>
            </div>
          </div>
        </>
      );
    case "auth":
      return (
        <>
          <div className="btn-back__wrapper">
            <button onClick={() => navigate(-1)}>
              Вернуться назад
            </button>
          </div>
          <div className="auth">
            <img className="auth__logo" src="./src/assets/logo.svg" alt="" />
            <p className="auth__title">Вход</p>
            <div className="form">
              <LoginForm setAuthBtn={setAuthBtn} setToken={setToken}/>
              <div className="form__info">
                <span className="form__text">
                  Нет аккаунта&nbsp;
                  <button className="form__btn" onClick={handleClick}>
                    Регистрация
                  </button>
                </span>
                <button
                  className="form__btn"
                  onClick={() => setAuthType("reset")}
                >
                  Забыли свой пароль?
                </button>
              </div>
            </div>
          </div>
        </>
      );
    case "reset":
      return (
        <>
          <div className="btn-back__wrapper">
            <button onClick={() => navigate(-1)}>
              Вернуться назад
            </button>
          </div>
          <div className="auth">
            <img className="auth__logo" src="./src/assets/logo.svg" alt="" />
            <p className="auth__title">Вход</p>
            <div className="form">
              <ResetForm />
              <div className="form__info">
                <span className="form__text">
                  Нет аккаунта&nbsp;
                  <button className="form__btn" onClick={handleClick}>
                    Регистрация
                  </button>
                </span>
              </div>
            </div>
          </div>
        </>
      );
  }
};
