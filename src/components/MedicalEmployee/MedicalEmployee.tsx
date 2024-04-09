import "./MedicalEmployee.scss";

export const MedicalEmployee = () => {
  return (
    <div className="form-medical-employee">
        <img className="form-medical-employee_img" src="/src/components/MedicalEmployee/imgs/image 21.svg"></img>
        <p className="form-medical-employee_fullName" id="fullName">Васильев Пётр Семёнович</p>
        <p className="form-medical-employee_info">Медицинский работник</p>
        <p className="form-medical-employee_info">2500/день</p>
        <div className="form-medical-employee_footer">
          <p className="form-medical-employee_footer_call">Позвонить</p>
          <p className="form-medical-employee_footer_write">Написать</p>
          <img className="form-medical-employee_footer_like" src="/src/components/MedicalEmployee/imgs/Vector.svg"></img>
        </div>
    </div>
  );
};