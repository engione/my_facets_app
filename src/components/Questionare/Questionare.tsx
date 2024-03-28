import "./Questionare.scss"

export const Questionare =()=> {
  return (
    <section className="questionare">
        <div className="form-questionare">
            <div className="form-questionare_div">
                <p className="form-questionare_text">Название: Соревнования по футболу</p>
            </div>
            <div className="form-questionare_div">
                <p className="form-questionare_text">Вид спорта: Футбол</p>
            </div>
            <div className="form-questionare_div">
                <p className="form-questionare_text">Место проведения: Текст</p>
            </div>
            <div className="form-questionare_div">
                <p className="form-questionare_text">Дата проведения: TEXT</p>
            </div>
            <button className="form-questionare_list_members">
                <img className="w-[14px] h-[10px]" src="/src/components/Questionare/Vector.png"></img>
                <p className="form-questionare_list_members_text" >Список участников</p>
            </button>
        </div>
    </section>
  );
}