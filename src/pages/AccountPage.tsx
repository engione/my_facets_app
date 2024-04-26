import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

export const AccountPage = () => {
  return (
    <>
      <section className="personal-account">
        <div className="container mx-auto personal-account__container justify-between flex gap-10">
          <Sidebar />
          <Outlet />
        </div>
      </section>
    </>
  );
};
