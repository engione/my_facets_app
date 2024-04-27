import { useDispatch } from "react-redux";
import Sidebar from "../components/Sidebar/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import { removeUserData } from "../store/authSlice";

export const AccountPage = ({ setToken, setAuthBtn }: any) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  function handleLogout() {
    sessionStorage.removeItem("token");
    navigate("/", { replace: true });
    setToken(false);
    dispatch(removeUserData(null));
    setAuthBtn(true);
  }
  return (
    <>
      <section className="personal-account">
        <div className="container mx-auto personal-account__container justify-between flex gap-10">
          <Sidebar handleLogout={handleLogout} />
          <Outlet />
        </div>
      </section>
    </>
  );
};
