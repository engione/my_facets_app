import { MouseEventHandler } from "react";
import { FaArrowRight } from "react-icons/fa";

type TBtn = {
  name: string;
  icon: any;
  active?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const Btn = ({ name, icon, onClick, active }: TBtn) => {
  return (
    <button className={active ? "sidebar active" : "sidebar"} onClick={onClick}>
      <span>{icon}</span>
      {name}
      <span className="arrow">
        <FaArrowRight />
      </span>
    </button>
  );
};

