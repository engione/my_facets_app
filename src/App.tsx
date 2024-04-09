import { MainPage } from "./pages/MainPage";
import "./App.css";
import { AuthForm } from "./components/AuthForm/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AccountPage } from "./pages/AccountPage";
import BModal from "./components/Modal/BModal";
import Sidebar from "./components/Sidebar/Sidebar";
import { MedicalEmployee } from "./components/MedicalEmployee/MedicalEmployee";




export function App() {
  return (
    <>
      {/*<BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="auth_def" element={<AuthForm />} />
          <Route path="auth" element={<AccountPage />} />
        </Routes>
      </BrowserRouter>
  */}
  <MedicalEmployee FullName="Васильев Пётр Семёнович" Post="Медицинский работник" Salary="2500/день"/>
    </>
  );
}
