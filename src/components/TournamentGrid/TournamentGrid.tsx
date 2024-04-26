import { Button } from "../Button/Button";
import "./TournamentGrid.scss";

export const TournamentGrid = () => {
  return (
    <section className="tournament">
      <div className="container mx-auto tournament__container">
        <Button bgImage="../../src/assets/arrow-back_acc.svg">
          Шаг 7 - Заполнениие инвентаря
        </Button>
        <div className="tournament-wrap tournament-wrap_top">
          <h2>Турнирная сетка</h2>
          <Button className="px-16" version="third">
            Редактировать
          </Button>
        </div>
        <div className="tournament-grid">
          <div className="tournament-grid__buttons">
            <Button
              className="bg-none bg-gray-100 px-2 h-12 w-40 rounded-[30px]"
              version="third"
            >
              Сгенерировать турнирную сетку
            </Button>
            <Button
              className="bg-none bg-gray-100 px-2 h-12 w-40 rounded-[30px]"
              version="third"
            >
              Банк<br></br>шаблонов
            </Button>
          </div>
          <img
            src="../../src/assets/tournament-grid.png"
            alt="Турнирная сетка"
          />
          <Button
            className="bg-none bg-gray-100 px-2 h-12 w-40 rounded-[30px]"
            version="third"
          >
            Распечатать
          </Button>
        </div>
      </div>
    </section>
  );
};
