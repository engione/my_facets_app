import { useState } from "react";
import { Button } from "../components/Button/Button";
import { FormField } from "../components/FormField/FormField";
import { Questionare } from "../components/Questionare/Questionare";
import { UserInfo } from "../components/UserInfo/UserInfo";
import { UserPhoto } from "../components/UserPhoto/UserPhoto";

export const FirstStep = () => {
  const [editProfile, setEditProfile] = useState(false);

  const handleClick = () => {
    setEditProfile((prev) => !prev);
  };

  return (
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
            <Button onClick={handleClick} version="third">
              Редактировать профиль
            </Button>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-5">
              <div className="flex gap-5">
                <Button
                  onClick={handleClick}
                  version="secondary"
                  className="text-sm py-1 px-3"
                >
                  Отменить изменения
                </Button>
                <Button
                  onClick={handleClick}
                  version="secondary"
                  className="text-sm py-1 px-3"
                >
                  Сохранить изменения
                </Button>
              </div>
              <form className="flex gap-5 flex-wrap">
                <FormField className="personal-field">
                  <span>Фио</span>
                  <input
                    className="personal-input"
                    type="text"
                    placeholder="Иванов Иван Иванович"
                  />
                </FormField>
                <FormField className="personal-field">
                  <span>Дата рождения</span>
                  <input
                    className="personal-input"
                    type="date"
                    placeholder="Иванов Иван Иванович"
                  />
                </FormField>
                <FormField className="personal-field">
                  <span>Почта</span>
                  <input
                    className="personal-input"
                    type="email"
                    placeholder="почта@mail.ru"
                  />
                </FormField>
                <FormField className="personal-field">
                  <span>Номер телефона</span>
                  <input
                    className="personal-input"
                    type="text"
                    placeholder="+7(999) 999-99-99"
                  />
                </FormField>
              </form>
            </div>
          </>
        )}
      </div>
      {!editProfile && (
        <div className="questionnaires flex flex-col gap-4 pt-10 border-t-4">
          <div className="questionnaires__top-wrap flex justify-between">
            <h4 className="text-lg font-bold">Мои анкеты</h4>
            <Button version="secondary" className="text-sm py-1 px-3">
              Добавить анкету
            </Button>
          </div>
          <Questionare />
          <Questionare />
        </div>
      )}
    </div>
  );
};
