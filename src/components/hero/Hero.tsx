import { Button } from "../Button/Button";
import "./Hero.scss";

export const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__container mx-auto">
        <div className="hero__card-first">
          <h1 className="hero__title">Развитие тела и духа вместе с нами</h1>
          <div className="btn-wrap">
            <Button className="btn-secondary btn-secondary_white">
              Конструктор спортивных мероприятий
            </Button>
            <Button className="btn-secondary btn-secondary_bordered">Оставить заявку</Button>
          </div>
        </div>
        <div className="hero__card-img">
          <img src="../src/assets/football.png" alt="" />
        </div>
      </div>
    </section>
  );
}