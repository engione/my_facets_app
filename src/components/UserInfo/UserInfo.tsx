import "./UserInfo.scss";

export const UserInfo = () => {
    return (
      <section className="userInfo">
          <div>
            <p className="userInfo_fio">Фамилия Имя Отчество</p>
          </div>
          <div>
            <p className="userInfo_birthday">Дата рождения: 12.12.1980</p>
          </div>
          <div>
            <p className="userInfo_email">Почта: почта@mail.ru</p>
          </div>
          <div>
            <p className="userInfo_phone">Номер телефона: +7(999)999-99-99</p>
          </div>
              
                  
      </section>
    );
  };