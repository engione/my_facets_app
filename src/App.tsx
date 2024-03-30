import { MainPage } from "./pages/MainPage";
import "./App.css";
import { AuthForm } from "./components/AuthForm/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AccountPage } from "./pages/AccountPage";


export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="auth" element={<AuthForm />} />
          {/* <Route path="account" element={<AccountPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}
