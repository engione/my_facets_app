import { Button } from "../Button/Button"
import "./ParticipantsForm.scss"

export const ParticipantsForm = () => {

  return (
    <div className="participants-form">
      <div className="participants-form__wrapper participants-form__wrapper_top">
        <Button version="third">Редактировать</Button>
        <Button version="third" className="bg-none">Открыть в формате Excel</Button>
      </div>
      <h3>12-14 сентября Футбол</h3>
      <div className="participants-form__wrapper participants-form__wrapper_inputs">
        <label>
          <span>Фамилия Имя</span>
          <input type="text" />
        </label>
        <label>
          <span>Возраст</span>
          <input type="text" />
        </label>
        <label>
          <span>Вес</span>
          <input type="text" />
        </label>
        <label>
          <span>Аллергии</span>
          <input type="text" />
        </label>
        <label>
          <span>Пол</span>
          <input type="text" />
        </label>
        <label>
          <span>Где живет</span>
          <input type="text" />
        </label>
        <label>
          <span>Роль</span>
          <input type="text" />
        </label>
      </div>
    </div>
  )
}