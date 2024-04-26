import { FC } from "react";
import "./MedicalEmployee.scss";

interface componentProps {
  FullName: string;
  Post: string;
  Salary: string;
}

export const MedicalEmployee: FC<componentProps> = ({
  FullName,
  Post,
  Salary,
}) => {
  return (
    <div className="form-medical-employee">
      <img
        className="form-medical-employee_img"
        src="/src/components/MedicalEmployee/imgs/image 21.svg"
      ></img>
      <p className="form-medical-employee_fullName">{FullName}</p>
      <p className="form-medical-employee_info">{Post}</p>
      <p className="form-medical-employee_info">{Salary}</p>
      <div className="form-medical-employee_footer">
        <a className="form-medical-employee_footer_call">Позвонить</a>
        <a className="form-medical-employee_footer_write">Написать</a>
        <button className="form-medical-employee_footer_like">
          <img src="/src/components/MedicalEmployee/imgs/Vector.svg"></img>
        </button>
      </div>
    </div>
  );
};
