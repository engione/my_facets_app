import { Logo } from "./Logo/Logo";
import { Nav } from "./Nav/Nav";
import { Button } from "./Button/Button";
import { Input } from "./Input/Input";
import "./Header.scss";

export function Header() {
  return (
    <header className="header">
      <div className="container header__container mx-auto">
        <Logo imgUrl="logo_name.svg"/>
        <div className="header__wrapper header__wrapper-center">
          <Input className="header__input" placeholder="События и места" />
          <Nav />
        </div>
        <Button className="header__btn">Войти</Button>
      </div>
    </header>
  );
}
