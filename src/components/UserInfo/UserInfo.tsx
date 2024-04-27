import { useSelector } from "react-redux";
import "./UserInfo.scss";

export const UserInfo = () => {
  const userData = useSelector((state: any) => state.auth.userData.data);
  return (
    <div className="userInfo">
      <p className="userInfo_fio">{`${userData.last_name} ${userData.first_name} ${userData.middle_name}`}</p>
      <p className="userInfo_birthday">Дата рождения: 12.12.1980</p>
      <p className="userInfo_email">Почта: {userData.email}</p>
      <p className="userInfo_phone">Номер телефона: +7(999)999-99-99</p>
    </div>
  );
};
