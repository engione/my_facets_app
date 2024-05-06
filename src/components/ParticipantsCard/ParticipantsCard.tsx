import { Link } from "react-router-dom";
import Copy from "../../assets/copy-logo.svg?react";
import "./ParticipantsCard.scss";

export const ParticipantsCard = () => {
  return (
    <div className="card-participants">
      <div className="card-participants__wrapper card-participants__wrapper_top">
        <p>Всего в группе 6 человек</p>
        <div className="card-participants__avatars">
          <img
            className="user-avatar user-avatar_first"
            src="../src/assets/user-avatar_1.png"
            alt="Аватар пользователя"
          />
          <img
            className="user-avatar user-avatar_second"
            src="../src/assets/user-avatar_2.png"
            alt="Аватар пользователя"
          />
          <img
            className="user-avatar user-avatar_third"
            src="../src/assets/user-avatar.png"
            alt="Аватар пользователя"
          />
          <span>+3</span>
        </div>
      </div>
      <h3>12-14 сентября Футбол</h3>
      <div className="card-participants__wrapper card-participants__wrapper_bottom">
        <Link to="edit">Добавить участников</Link>
        <button>
          <Copy />
        </button>
      </div>
    </div>
  );
};
