import "./SubmitApplication.scss"

export const SubmitApplication =()=> {
  return (
    <>
        <h1 className="section-title">ОСТАВИТЬ ЗАЯВКУ:</h1>
        <form className="form-feedback">
            <div className="form-feedback_right">
                <input className="form-feedback__input" type="text" placeholder="Имя" />
                <input className="form-feedback__input" type="email" placeholder="Электронная почта" />
                <button className="form-feedback__btn">Отправить</button>
            </div>
            <textarea className="form-feedback__textarea" placeholder="Задайте ваш вопрос"></textarea>
        </form>
    </>
  );
}
    
