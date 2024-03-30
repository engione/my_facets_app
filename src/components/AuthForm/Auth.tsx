import { useState } from "react";
import { LoginForm } from "../LoginForm/LoginForm";
import { RegisterForm } from "../RegisterForm/RegisterForm";
import "./AuthForm.scss";
import { ResetForm } from "../ResetForm/ResetForm";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";

export const AuthForm = () => {
  const [authType, setAuthType] = useState<string>("register");

  const handleClick = () => {
    setAuthType((prevState) =>
      prevState === "register" ? "auth" : "register"
    );
  };

  switch (authType) {
    case "register":
      return (
        <>
          <div className="link-wrapper">
            <Link to={"/"}>
              Вернуться назад
            </Link>
          </div>
          <div className="auth">
            <img className="auth__logo" src="./src/assets/logo.svg" alt="" />
            <p className="auth__title">Регистрация</p>
            <div className="form">
              <RegisterForm />
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
          <ToastContainer />
        </>
      );
    case "auth":
      return (
        <>
          <div className="link-wrapper">
            <Link to={"/"}>
              Вернуться назад
            </Link>
          </div>
          <div className="auth">
            <img className="auth__logo" src="./src/assets/logo.svg" alt="" />
            <p className="auth__title">Вход</p>
            <div className="form">
              <LoginForm />
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
          <ToastContainer />
        </>
      );
    case "reset":
      return (
        <>
          <div className="link-wrapper">
            <Link to={"/"}>
              Вернуться назад
            </Link>
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
          <ToastContainer />
        </>
      );
  }

  //   return (
  //     <>
  //       <div className="auth">
  //         <img className="auth__logo" src="./src/assets/logo.svg" alt="" />
  //         <p className="auth__title">
  //           {authType === "register" ? "Регистрация" : "Авторизация"}
  //         </p>
  //         <div className="form">
  //           {authType === "register" ? <RegisterForm /> : <LoginForm />}
  //           <div className="form__info">
  //             <span className="form__text">
  //               {authType === "register" ? "Есть аккаунт? " : "Нет аккаунта? "}
  //               <button className="form__btn" onClick={handleClick}>
  //                 {authType === "register" ? "Войти" : "Регистрация"}
  //               </button>
  //             </span>
  //             {authType === "auth" && (
  //               <button className="form__btn" onClick={handleClick}>
  //                 Забыли свой пароль?
  //               </button>
  //             )}
  //           </div>
  //         </div>
  //       </div>
  //       <ToastContainer />
  //     </>
  //   );
};
