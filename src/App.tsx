import { MainPage } from "./pages/MainPage";
import { AuthForm } from "./components/AuthForm/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AccountPage } from "./pages/AccountPage";
import "./App.css";
import { Layout } from "./components/Layout/Layout";
import { FirstStep } from "./pages/FirstStep";
import { Settlement } from "./components/Settlement/Settlement";
import { Toaster } from "react-hot-toast";

export function App() {
  return (
    <>
      <Toaster
        toastOptions={{
          position: "top-right",
          style: {
            minWidth: "300px",
            height: "60px",
          },
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
            <Route path="account" element={<AccountPage />}>
              <Route index element={<FirstStep />} />
              <Route path="settlement" element={<Settlement />} />
            </Route>
          </Route>
          <Route path="auth" element={<AuthForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
