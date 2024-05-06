import { MainPage } from "./pages/MainPage";
import { AuthForm } from "./components/AuthForm/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AccountPage } from "./pages/AccountPage";
import { Layout } from "./components/Layout/Layout";
import { FirstStep } from "./pages/FirstStep";
import { Settlement } from "./components/Settlement/Settlement";
import { Toaster } from "react-hot-toast";
import { TestPage } from "./pages/TestPage";
import { Test } from "./components/Test/Test";
import { Executors } from "./components/Executors/Executors";
import { TournamentGrid } from "./components/TournamentGrid/TournamentGrid";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addUserData } from "./store/authSlice";
import "./App.css";
import { Participants } from "./components/Participants/Participants";
import { ParticipantsCard } from "./components/ParticipantsCard/ParticipantsCard";
import { ParticipantsForm } from "./components/ParticipantsForm/ParticipantsForm";

export function App() {
  const dispatch = useDispatch();
  const [token, setToken] = useState(false);
  const [authBtn, setAuthBtn] = useState<boolean>(true);

  if (token) {
    sessionStorage.setItem("token", JSON.stringify(token));
  }
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      let data = JSON.parse(sessionStorage.getItem("token")!);
      setToken(data);
      console.log(data);
      dispatch(addUserData(data));
      setAuthBtn(false);
    }
  }, []);

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
          <Route path="/" element={<Layout authBtn={authBtn} />}>
            <Route index element={<MainPage />} />
            <Route path="test" element={<TestPage />} />
            <Route path="test/:id" element={<Test />} />
            <Route
              path="account"
              element={
                <AccountPage setToken={setToken} setAuthBtn={setAuthBtn} />
              }
            >
              <Route index element={<FirstStep />} />
              <Route path="participants" element={<Participants />}>
                <Route
                  index
                  element={
                    <div className="participants__cards">
                      <ParticipantsCard />
                      <ParticipantsCard />
                      <ParticipantsCard />
                      <ParticipantsCard />
                    </div>
                  }
                />
                <Route path="edit" element={<ParticipantsForm />} />
              </Route>
              <Route path="settlement" element={<Settlement />} />
              <Route path="executor" element={<Executors />} />
              <Route path="tournament" element={<TournamentGrid />} />
            </Route>
          </Route>
          <Route
            path="auth"
            element={<AuthForm setToken={setToken} setAuthBtn={setAuthBtn} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
