import { MainPage } from "./pages/MainPage";
import "./App.css";
import { AuthForm } from "./components/AuthForm/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Questionare } from "./components/Questionare/Questionare";


export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="auth" element={<AuthForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
