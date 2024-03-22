import { Logo } from "./Logo";
import { Nav } from "./Nav";
import "./Header.scss";
import { Button } from "./Button";

export function Header() {
  return (
    <header className="header">
      <div className="container header__container mx-auto">
        <Logo />
        <div className="header__wrapper header__wrapper-center">
          <input type="text" className="header__input" placeholder="События и места" />
          <Nav />
        </div>
        <Button>Войти</Button>
      </div>
    </header>
  );
}
