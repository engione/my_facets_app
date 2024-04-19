import { Header } from "../components/Header/Header";
import Sidebar from "../components/Sidebar/Sidebar";
import { FirstStep } from "./FirstStep";
import { Settlement } from "../components/Settlement/Settlement";

export const AccountPage = () => {
  return (
    <>
      <Header />
      <section className="personal-account">
        <div className="container mx-auto personal-account__container flex gap-10">
          <Sidebar />
          {/* <FirstStep /> */}
          <Settlement />
        </div>
      </section>
    </>
  );
};
