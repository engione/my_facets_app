import { Outlet, useNavigate } from "react-router-dom";
import { Button } from "../Button/Button";
import { ParticipantsCard } from "../ParticipantsCard/ParticipantsCard";
import "./Participants.scss";
import { ParticipantsForm } from "../ParticipantsForm/ParticipantsForm";

export const Participants = () => {
  const navigate = useNavigate();
  return (
    <section className="participants">
      <div className="container mx-auto">
        <Button onClick={() => navigate(-1)} bgImage="../../src/assets/arrow-back_acc.svg">Участники</Button>
        <h2>Участники</h2>
        <Outlet />
      </div>
    </section>
  );
};
