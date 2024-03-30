import "./Profile.scss"

export const Profile =()=> {
  return (
        <div className="form-profile">

            <p className="close">&#10006;</p>
            <p className="anc">Редактировать анкету</p>
            <p className="form-profile_text">Название: Соревнования по футболу</p>
            <p className="form-profile_text">Вид спорта: Футбол</p>
            <p className="form-profile_text">Место проведения: ПФК КЛУБ</p>
            <p className="form-profile_text">Дата проведения: 19.01.2024</p>
            <button className="form-profile_list_members">
                <p className="form-profile_list_members_text" >Список участников</p>
            </button>
        </div>
        
  );
}