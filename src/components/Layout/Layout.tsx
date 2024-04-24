import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

type TLayout = {
  authBtn: boolean;
};

export const Layout = () => {
  return (
    <>

      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
};
