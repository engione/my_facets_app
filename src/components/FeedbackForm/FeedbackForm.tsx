import "./FeedbackForm.scss";

export const FeedbackForm = () => {
  return (
    <section className="feedback">
      <div className="container mx-auto">
        <h3 className="feedback__title">Оставить заявку:</h3>
        <form className="form-feedback">
          <div className="form-feedback_right">
            <input
              className="form-feedback__input"
              type="text"
              placeholder="Имя"
            />
            <input
              className="form-feedback__input"
              type="email"
              placeholder="Электронная почта"
            />
            <button className="form-feedback__btn">Отправить</button>
          </div>
          <textarea
            className="form-feedback__textarea"
            placeholder="Задайте ваш вопрос"
          ></textarea>
        </form>
      </div>
    </section>
  );
};
