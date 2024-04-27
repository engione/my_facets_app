import { Logo } from "../Logo/Logo";
import { Nav } from "../Nav/Nav";
import { Button } from "../Button/Button";
import "./Header.scss";
import { useNavigate } from "react-router-dom";

type THeader = {
    authBtn?: boolean;
}

export function Header({ authBtn = true } : THeader) {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="container header__container mx-auto">
        <Logo imgUrl="logo_name.svg" />
        <div className="header__wrapper header__wrapper_center">
          <Nav className="" />
          <input
            className="search-input"
            type="text"
            placeholder="События и места"
          />
        </div>
        <div className="header__wrapper header__wrapper_right">
          <span className="location">Москва</span>
          {authBtn ? (
            <Button
              version="secondary"
              onClick={() => navigate("auth", { replace: false })}
            >
              Войти
            </Button>
          ) : (
            <Button
              version="secondary"
              onClick={() => navigate("account", { replace: false })}
            >
              Профиль
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
