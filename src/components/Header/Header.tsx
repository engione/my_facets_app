import { Logo } from "../Logo/Logo";
import { Nav } from "../Nav/Nav";
import { Button } from "../Button/Button";
import "./Header.scss";

export function Header() {
  return (
    <header className="header">
      <div className="container header__container mx-auto">
        <Logo imgUrl="logo_name.svg"/>
        <div className="header__wrapper header__wrapper_center">
          <Nav />
          <input className="search-input" type="text" placeholder="События и места" />
        </div>
        <div className="header__wrapper header__wrapper_right">
            <span className="location">Москва</span>
            <Button className="btn-secondary">Войти</Button>
        </div>
      </div>
    </header>
  );
}
