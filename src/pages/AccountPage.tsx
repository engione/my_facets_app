import { useState } from "react";
import { Aside } from "../components/Aside/Aside";
import { Button } from "../components/Button/Button";
import { Header } from "../components/Header/Header";
import { Questionare } from "../components/Questionare/Questionare";
import { UserInfo } from "../components/UserInfo/UserInfo";
import { UserPhoto } from "../components/UserPhoto/UserPhoto";

export const AccountPage = () => {
  const [editProfile, setEditProfile] = useState(false);

  const handleClick = () => {
    setEditProfile((prev) => !prev);
  };
  return (
    <>
      <Header />
      <section className="personal-account">
        <div className="container mx-auto personal-account__container flex gap-10">
          <Aside />
          <div className="info-bloc flex flex-col gap-4 w-full">
            {editProfile && (
              <h3 className="text-2xl font-bold text-text-color">
                Редактировать профиль
              </h3>
            )}
            <div className="user-info w-full flex items-start gap-4">
              <UserPhoto />
              {!editProfile ? (
                <>
                  <UserInfo />
                  <Button
                    onClick={handleClick}
                    className="btn-edit"
                    bgImage="/src/assets/logo-edit.svg"
                  >
                    Редактировать профиль
                  </Button>
                </>
              ) : (
                <>
                  <Button onClick={handleClick} className="btn-secondary text-sm py-1 px-3">Отменить изменения</Button>
                  <Button onClick={handleClick} className="btn-secondary text-sm py-1 px-3">Сохранить изменения</Button>
                </>
              )}
            </div>
            {!editProfile && (
              <div className="questionnaires flex flex-col gap-4 pt-10 border-t-4">
                <div className="questionnaires__top-wrap flex justify-between">
                  <h4 className="text-lg font-bold">Мои анкеты</h4>
                  <Button className="btn-secondary text-sm py-1 px-3">
                    Добавить анкету
                  </Button>
                </div>
                <Questionare />
                <Questionare />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
