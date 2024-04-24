import { useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import hero from "./HeroTest.module.scss"

export const HeroTest = () => {
    const navigate = useNavigate()
  return (
    <div className={hero.hero}>
      <h1>Конструктор спортивных выездов</h1>
      <p>
        Не можете найти нужный вам выезд? Пройдите небольшой тест и мы подберем
        или кастомизируем выезд специально для вас
      </p>
      <Button onClick={() => navigate("/test/1", {replace: true})} version="secondary" className="underline px-24">Пройти тест</Button>
    </div>
  );
};
