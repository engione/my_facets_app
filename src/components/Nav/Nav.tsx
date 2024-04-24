import { Link } from "react-router-dom";
import "./Nav.scss"

type TProps = {
    className: string,
    v?: boolean;
}

export function Nav({className, v=false} : TProps) {
    return (
        <nav className="nav">
            <ul className={`nav__list ${className}`}>
                <li className="nav__item">
                    <a href="/#aboutUs" className="nav__link">
                        {v ? "Новости" : "О сервисе"}
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/#advantages" className="nav__link">
                    {v ? "О нас" : "Преимущества"}
                        
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/#reviews" className="nav__link">
                        Отзывы  
                    </a>
                </li>
                <li className="nav__item">
                    <a href="/#feedback" className="nav__link">
                    {v ? "Обратная связь" : "Контакты"}     
                    </a>
                </li>
            </ul>
        </nav>
    );
}
