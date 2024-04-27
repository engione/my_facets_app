import { Btn } from "./Button";
import { BsPerson } from "react-icons/bs";
import { PiHouseSimple, PiHandCoins } from "react-icons/pi";
import { MdOutlinePeople, MdOutlineInventory2 } from "react-icons/md";
import { LuWallet } from "react-icons/lu";
import { IoDocumentTextOutline, IoDocumentsOutline } from "react-icons/io5";
import { GrSchedules } from "react-icons/gr";
import { RxExit } from "react-icons/rx";
import { useState } from "react";
import "./Sidebar.scss";
import { useNavigate } from "react-router-dom";

export default function Sidebar({ handleLogout }: any) {
  const navigate = useNavigate();
  const btnList = [
    {
      step: 1,
      path: "/account",
      icon: <BsPerson />,
      name: "Шаг 1 - Анкета",
    },
    {
      step: 2,
      path: "/account/settlement",
      icon: <PiHouseSimple />,
      name: "Шаг 2 - Бронь площадки",
    },
    {
      step: 3,
      path: "/account",
      icon: <PiHouseSimple />,
      name: "Шаг 3 - Логистика",
    },
    {
      step: 4,
      path: "/account",
      icon: <GrSchedules />,
      name: "Шаг 4 - Расписание",
    },
    {
      step: 5,
      path: "/account",
      icon: <IoDocumentsOutline />,
      name: "Шаг 5 - Документация",
    },
    {
      step: 6,
      path: "/account",
      icon: <PiHandCoins />,
      name: "Шаг 6 - Оплата",
    },
    {
      step: 7,
      path: "/account",
      icon: <MdOutlineInventory2 />,
      name: "Шаг 7 - Инвентарь",
    },
    {
      step: 8,
      path: "/account/tournament",
      icon: <MdOutlinePeople />,
      name: "Шаг 8 - Турнирная сетка",
    },
    {
      step: 9,
      path: "/account/executor",
      icon: <IoDocumentTextOutline />,
      name: "Шаг 9 - Исполнители",
    },
    {
      step: 10,
      path: "/account",
      icon: <LuWallet />,
      name: "Шаг 10 - Проведение выезда",
    },
    {
      step: 11,
      path: "/account",
      icon: <LuWallet />,
      name: "Шаг 11 - Награждение",
    },
    {
      step: 12,
      path: "/account",
      icon: <LuWallet />,
      name: "Шаг 12 - Отчет о проведение",
    },
  ];

  const [btnActive, setBtnActive] = useState<number>(1);

  return (
    <aside>
      <div className="logo">
        <img src="../../src/assets/logo-v2.svg" alt="logo" />
      </div>
      <h2>Конструктор спортивных поездок</h2>
      <div className="sidebar">
        {btnList.map((btn) => {
          return (
            <Btn
              key={btn.step}
              name={btn.name}
              icon={btn.icon}
              active={btnActive === btn.step}
              onClick={() => {
                setBtnActive(btn.step);
                navigate(btn.path);
              }}
            />
          );
        })}
      </div>
      <div className="exit">
        <span>
          <RxExit className="iconExit" />
        </span>
        <button onClick={() => handleLogout()}>Выйти</button>
      </div>
    </aside>
  );
}
