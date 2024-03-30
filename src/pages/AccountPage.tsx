import { Aside } from "../components/Aside/Aside";
import { Header } from "../components/Header/Header";

export const AccountPage = () => {
  return (
    <>
      <Header />
      <section className="personal-account">
        <div className="container mx-auto personal-account__container flex gap-16">
            <Aside />
            <div className="info-bloc flex-col">
                <div className="user-info"></div>
                <div className="questionnaires"></div>
            </div>
        </div>
      </section>
    </>
  );
};
