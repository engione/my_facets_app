import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import "./Hero.scss";

export const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero">
      <div className="container hero__container mx-auto">
        <div className="hero__card-first">
          <h1 className="hero__title">Развитие тела и духа вместе с нами</h1>
          <div className="btn-wrap">
            <Button version="white" onClick={() => navigate("/test")}>Конструктор спортивных мероприятий</Button>
            <Button version="bordered">Оставить заявку</Button>
          </div>
        </div>
        <div className="hero__card-img">
          <img src="../src/assets/football.png" alt="" />
        </div>
      </div>
    </section>
  );
};
