import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Notification = (message: string) =>
  toast(
    <div style={{ display: "flex", alignItems: "center"}}>
      <img
        src="../src/assets/info-logo_success.svg"
        style={{ width: "24px", marginRight: "10px" }}
        alt="info"
      />
      <p>{message}</p>
    </div>,
    {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    }
  );