import "./UserInfo.scss";

export const UserInfo = () => {
    return (
      <div className="userInfo">
            <p className="userInfo_fio">Фамилия Имя Отчество</p>
            <p className="userInfo_birthday">Дата рождения: 12.12.1980</p>
            <p className="userInfo_email">Почта: почта@mail.ru</p>
            <p className="userInfo_phone">Номер телефона: +7(999)999-99-99</p>
      </div>
    );
  };