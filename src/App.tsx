import { MainPage } from "./pages/MainPage";
import { LoginForm } from "./components/AuthForm/LoginForm";
import { RegistrationForm } from "./components/AuthForm/RegistrationForm";
import "./App.css";
import { ResetPassword } from "./components/AuthForm/ResetPassword";

export function App() {
  return (
    <>
      {/* <MainPage /> */}
      {/* <LoginForm /> */}
      {/* <RegistrationForm /> */}
      <ResetPassword />
    </>
  );
}
