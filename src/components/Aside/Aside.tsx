import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import "./Aside.scss";

export const Aside = () => {
  return (
    <>
      <aside className="aside">
        <Logo imgUrl="/logo-v2.svg" />
        <h3>Конструктор спортивных поездок</h3>
        <nav className="aside__nav">
          <ul>
            <li>
              <Button
                bgImage="/src/assets/aside-person.svg"
                className="btn-aside"
              >
                Шаг 1 - Анкета
              </Button>
            </li>
            <li>
              <Button bgImage="/src/assets/aside-home.svg" className="btn-aside">Шаг 2 - Бронь площадки</Button>
            </li>
            <li>
              <Button bgImage="/src/assets/aside-home.svg" className="btn-aside">Шаг 3 - Логистика</Button>
            </li>
            <li>
              <Button bgImage="/src/assets/aside-shedule.svg" className="btn-aside">Шаг 4 - Расписание</Button>
            </li>
            <li>
              <Button bgImage="/src/assets/aside-documents.svg" className="btn-aside">Шаг 5 - Документация</Button>
            </li>
            <li>
              <Button bgImage="/src/assets/aside-hand.svg" className="btn-aside">Шаг 6 - Оплата</Button>
            </li>
            <li>
              <Button bgImage="/src/assets/aside-inventory.svg" className="btn-aside">Шаг 7 - Инвентарь</Button>
            </li>
            <li>
              <Button bgImage="/src/assets/aside-people.svg" className="btn-aside">Шаг 8 - Турнираная сетка</Button>
            </li>
            <li>
              <Button bgImage="/src/assets/aside-contract.svg" className="btn-aside">Шаг 9 - Исполнители</Button>
            </li>
            <li>
              <Button bgImage="/src/assets/aside-wallet.svg" className="btn-aside">Шаг 10 - Проведение выезда</Button>
            </li>
            <li>
              <Button bgImage="/src/assets/aside-wallet.svg" className="btn-aside">Шаг 11 - Награждение</Button>
            </li>
            <li>
              <Button bgImage="/src/assets/aside-wallet.svg" className="btn-aside">Шаг 12 - Отчет о проведении</Button>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
};
