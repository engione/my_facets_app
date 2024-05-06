import { MedicalEmployee } from "../MedicalEmployee/MedicalEmployee";
import ForwardIcon from "../../assets/reviews-arrow-forward.svg?react";
import "./Executors.scss";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";

export const Executors = () => {
  const navigate = useNavigate()
  return (
    <section className="executors">
      <div className="container mx-auto executors__container">
        <Button onClick={() => navigate("/account/tournament")} bgImage="../../src/assets/arrow-back_acc.svg">
          Шаг 8 - Турнирная сетка
        </Button>
        <h2>Исполнители</h2>
        <div className="executors-group executors-group__medical">
          <h3>Медицинские работники</h3>
          <div className="card-wrapper">
            <MedicalEmployee
              FullName="Васильев Петр Васильевич"
              Post="Медицинский работник"
              Salary="2500/день"
            />
            <MedicalEmployee
              FullName="Васильев Петр Васильевич"
              Post="Медицинский работник"
              Salary="2500/день"
            />
            <ForwardIcon />
          </div>
        </div>
        <div className=" executors-group executors-group__sport">
          <h3>Спортивное судейство</h3>
          <div className="card-wrapper">
            <MedicalEmployee
              FullName="Васильев Петр Васильевич"
              Post="Медицинский работник"
              Salary="2500/день"
            />
            <MedicalEmployee
              FullName="Васильев Петр Васильевич"
              Post="Медицинский работник"
              Salary="2500/день"
            />
            <ForwardIcon />
          </div>
        </div>
      </div>
    </section>
  );
};
