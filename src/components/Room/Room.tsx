import { useState } from "react";
import "./Room.scss";

type TProps = {
  title: string;
  sex?: "male" | "female" | "participants";
};

export const Room = ({ title, sex = "male" }: TProps) => {

    let bgColor: string;

  switch (sex) {
    case "male":
         bgColor = "#90C8F5";
      break;

    case "female":
         bgColor = "#FFA5C9";
      break;

    case "participants":
        bgColor = "#EFEFEF";
      break;
  }

  return (
    <div className="room" style={{ backgroundColor: bgColor }}>
      <p className="room_name">{title}</p>
      <p className="room_members">
        Болтунов Сергей Борисович Болтунов Сергей Борисович Болтунов Сергей
        Борисович Гаюров Виктор Алексеевич Гаюров Виктор Алексеевич Гаюров
        Виктор Алексеевич
      </p>
    </div>
  );
};
