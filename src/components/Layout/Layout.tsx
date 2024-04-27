import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

type TLayout = {
  authBtn: boolean;
};

export const Layout = ({ authBtn }: TLayout) => {
  return (
    <>
      <Header authBtn={authBtn} />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
